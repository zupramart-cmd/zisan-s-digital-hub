import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldAlert } from 'lucide-react';

interface SecurityProviderProps {
  children: React.ReactNode;
}

const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const showSecurityToast = () => {
      toast(t('security.copyProhibited'), {
        icon: <ShieldAlert size={18} className="text-primary" />,
        style: {
          background: 'hsl(var(--accent))',
          color: 'hsl(var(--accent-foreground))',
          border: '1px solid hsl(var(--border))',
        },
      });
    };

    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showSecurityToast();
    };

    // Disable copy, cut, paste
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      showSecurityToast();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+A, Ctrl+U, Ctrl+S, Ctrl+P
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'x', 'v', 'a', 'u', 's', 'p'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        showSecurityToast();
      }
      
      // Disable F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        showSecurityToast();
      }
      
      // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        showSecurityToast();
      }
      
      // Disable PrintScreen - attempt to block screenshot
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        // Clear clipboard after PrintScreen attempt
        navigator.clipboard?.writeText('').catch(() => {});
        showSecurityToast();
      }

      // Disable Windows + Shift + S (Windows screenshot)
      if (e.shiftKey && e.metaKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        showSecurityToast();
      }

      // Disable Cmd + Shift + 3/4/5 (Mac screenshot shortcuts)
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        showSecurityToast();
      }
    };

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // Attempt to detect screenshot via visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Page is hidden, might be taking screenshot
        // We can't prevent it but we can clear clipboard
        navigator.clipboard?.writeText('').catch(() => {});
      }
    };

    // Disable pinch zoom
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Disable wheel zoom (Ctrl + scroll)
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        showSecurityToast();
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCopy);
    document.addEventListener('paste', handleCopy);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
      document.removeEventListener('paste', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [t]);

  return <>{children}</>;
};

export default SecurityProvider;
