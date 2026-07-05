import React from 'react';
import ProfileSection from '@/components/sections/ProfileSection';
import ProjectsPreviewSection from '@/components/sections/ProjectsPreviewSection';
import EducationSection from '@/components/sections/EducationSection';
import ProfessionalDevSection from '@/components/sections/ProfessionalDevSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import GitHubCalendar from '@/components/GitHubCalendar';

const Portfolio: React.FC = () => {
  return (
    <main>
      <ProfileSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsPreviewSection />
      <ProfessionalDevSection />
      <CertificatesSection />
      <GitHubCalendar />
      <ContactSection />
    </main>
  );
};

export default Portfolio;
