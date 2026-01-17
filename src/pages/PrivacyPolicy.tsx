import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Camera, Type, Copyright, Scale, AlertTriangle, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  const sections = [
    {
      icon: Shield,
      title: language === 'en' ? 'Content Protection' : 'কন্টেন্ট সুরক্ষা',
      content: language === 'en' 
        ? 'All content on this website is protected by advanced security measures. Text selection, right-click context menus, and keyboard shortcuts for copying are disabled to prevent unauthorized reproduction of content.'
        : 'এই ওয়েবসাইটের সমস্ত কন্টেন্ট উন্নত নিরাপত্তা ব্যবস্থা দ্বারা সুরক্ষিত। অননুমোদিত কন্টেন্ট পুনরুৎপাদন রোধ করতে টেক্সট সিলেকশন, রাইট-ক্লিক কনটেক্সট মেনু এবং কপি করার কীবোর্ড শর্টকাট অক্ষম করা হয়েছে।'
    },
    {
      icon: Camera,
      title: language === 'en' ? 'Screenshot Policy' : 'স্ক্রিনশট নীতি',
      content: language === 'en'
        ? 'While browser-level screenshot prevention is technically limited, taking screenshots of this website\'s content for commercial use, redistribution, or any purpose other than personal reference is strictly prohibited. Any screenshots taken are subject to the same copyright protections as the original content.'
        : 'ব্রাউজার-স্তরের স্ক্রিনশট প্রতিরোধ প্রযুক্তিগতভাবে সীমিত হলেও, ব্যক্তিগত রেফারেন্স ব্যতীত বাণিজ্যিক ব্যবহার, পুনর্বিতরণ বা অন্য কোনো উদ্দেশ্যে এই ওয়েবসাইটের কন্টেন্টের স্ক্রিনশট নেওয়া কঠোরভাবে নিষিদ্ধ। নেওয়া যেকোনো স্ক্রিনশট মূল কন্টেন্টের মতো একই কপিরাইট সুরক্ষার অধীন।'
    },
    {
      icon: Type,
      title: language === 'en' ? 'Text Copy Restrictions' : 'টেক্সট কপি সীমাবদ্ধতা',
      content: language === 'en'
        ? 'Copying, reproducing, or extracting any text content from this website is prohibited. This includes but is not limited to: profile descriptions, educational content, research papers, blog posts, professional experience details, and any other written material. Violation of this policy may result in legal action.'
        : 'এই ওয়েবসাইট থেকে কোনো টেক্সট কন্টেন্ট কপি, পুনরুৎপাদন বা এক্সট্রাক্ট করা নিষিদ্ধ। এর মধ্যে অন্তর্ভুক্ত কিন্তু সীমাবদ্ধ নয়: প্রোফাইল বিবরণ, শিক্ষামূলক কন্টেন্ট, গবেষণা পত্র, ব্লগ পোস্ট, পেশাদার অভিজ্ঞতার বিবরণ এবং অন্যান্য লিখিত উপাদান। এই নীতি লঙ্ঘন করলে আইনি ব্যবস্থা নেওয়া হতে পারে।'
    },
    {
      icon: Copyright,
      title: language === 'en' ? 'Copyright Notice' : 'কপিরাইট নোটিশ',
      content: language === 'en'
        ? `All content, including text, images, graphics, certificates, research materials, and multimedia elements are the intellectual property of Md Ridoan Mahmud Zisan and are protected under international copyright laws. Unauthorized use, reproduction, distribution, or modification of any content is strictly prohibited and may be subject to legal prosecution.`
        : `সমস্ত কন্টেন্ট, যার মধ্যে টেক্সট, ছবি, গ্রাফিক্স, সার্টিফিকেট, গবেষণা উপকরণ এবং মাল্টিমিডিয়া উপাদান রয়েছে, সবই মো. রিদওয়ান মাহমুদ জিসানের বুদ্ধিবৃত্তিক সম্পত্তি এবং আন্তর্জাতিক কপিরাইট আইনের অধীনে সুরক্ষিত। যেকোনো কন্টেন্টের অননুমোদিত ব্যবহার, পুনরুৎপাদন, বিতরণ বা পরিবর্তন কঠোরভাবে নিষিদ্ধ এবং আইনি বিচারের সাপেক্ষ হতে পারে।`
    },
    {
      icon: Scale,
      title: language === 'en' ? 'Terms of Use' : 'ব্যবহারের শর্তাবলী',
      content: language === 'en'
        ? 'By accessing this website, you agree to abide by all stated policies and terms. You may view content for personal, non-commercial purposes only. Any attempt to circumvent security measures, copy content, or use materials without explicit written permission is a violation of these terms and applicable laws.'
        : 'এই ওয়েবসাইট অ্যাক্সেস করার মাধ্যমে, আপনি সমস্ত বর্ণিত নীতি ও শর্তাবলী মেনে চলতে সম্মত হন। আপনি শুধুমাত্র ব্যক্তিগত, অ-বাণিজ্যিক উদ্দেশ্যে কন্টেন্ট দেখতে পারেন। নিরাপত্তা ব্যবস্থা এড়ানোর, কন্টেন্ট কপি করার বা স্পষ্ট লিখিত অনুমতি ছাড়া উপকরণ ব্যবহার করার যেকোনো প্রচেষ্টা এই শর্তাবলী এবং প্রযোজ্য আইন লঙ্ঘন।'
    },
    {
      icon: AlertTriangle,
      title: language === 'en' ? 'Violation Consequences' : 'লঙ্ঘনের পরিণতি',
      content: language === 'en'
        ? 'Violations of these policies may result in: Immediate termination of access to the website, Legal action under applicable copyright and intellectual property laws, Claims for damages and injunctive relief, Reporting to relevant authorities for prosecution. We actively monitor for unauthorized use of our content and will pursue all available legal remedies.'
        : 'এই নীতিগুলি লঙ্ঘন করলে যা হতে পারে: ওয়েবসাইটে অ্যাক্সেস অবিলম্বে বন্ধ, প্রযোজ্য কপিরাইট এবং বুদ্ধিবৃত্তিক সম্পত্তি আইনের অধীনে আইনি ব্যবস্থা, ক্ষতিপূরণ এবং নিষেধাজ্ঞামূলক প্রতিকারের দাবি, প্রাসঙ্গিক কর্তৃপক্ষের কাছে বিচারের জন্য রিপোর্ট। আমরা আমাদের কন্টেন্টের অননুমোদিত ব্যবহারের জন্য সক্রিয়ভাবে পর্যবেক্ষণ করি এবং সমস্ত উপলব্ধ আইনি প্রতিকার অনুসরণ করব।'
    },
    {
      icon: FileText,
      title: language === 'en' ? 'Fair Use Disclaimer' : 'ফেয়ার ইউজ দাবিত্যাগ',
      content: language === 'en'
        ? 'Limited quotation of content for purposes of criticism, commentary, news reporting, teaching, scholarship, or research may be permissible under fair use doctrine, provided proper attribution is given. However, any such use must be minimal and transformative, and should not substitute for the original work.'
        : 'সমালোচনা, মন্তব্য, সংবাদ প্রতিবেদন, শিক্ষাদান, স্কলারশিপ বা গবেষণার উদ্দেশ্যে কন্টেন্টের সীমিত উদ্ধৃতি ফেয়ার ইউজ মতবাদের অধীনে অনুমোদিত হতে পারে, যদি যথাযথ অ্যাট্রিবিউশন দেওয়া হয়। তবে, এই ধরনের যেকোনো ব্যবহার ন্যূনতম এবং রূপান্তরমূলক হতে হবে এবং মূল কাজের বিকল্প হওয়া উচিত নয়।'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              <span>{language === 'en' ? 'Back to Home' : 'হোমে ফিরে যান'}</span>
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {language === 'en' ? 'Privacy Policy & Terms' : 'গোপনীয়তা নীতি ও শর্তাবলী'}
              </h1>
            </div>
            
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Please read these policies carefully before using this website.' 
                : 'এই ওয়েবসাইট ব্যবহার করার আগে অনুগ্রহ করে এই নীতিগুলি মনোযোগ সহকারে পড়ুন।'}
            </p>
            
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 flex items-start gap-2">
                <AlertTriangle size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  {language === 'en'
                    ? 'Last updated: January 2025. By continuing to use this website, you acknowledge and agree to these terms.'
                    : 'সর্বশেষ আপডেট: জানুয়ারি ২০২৫। এই ওয়েবসাইট ব্যবহার চালিয়ে যাওয়ার মাধ্যমে, আপনি এই শর্তাবলী স্বীকার এবং সম্মত হন।'}
                </span>
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-2">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-10 p-6 bg-accent/30 rounded-xl text-center">
            <h3 className="font-semibold text-foreground mb-2">
              {language === 'en' ? 'Questions or Concerns?' : 'প্রশ্ন বা উদ্বেগ?'}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {language === 'en'
                ? 'If you have any questions about these policies or need permission for specific use cases, please contact:'
                : 'এই নীতিগুলি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে বা নির্দিষ্ট ব্যবহারের ক্ষেত্রে অনুমতির প্রয়োজন হলে, অনুগ্রহ করে যোগাযোগ করুন:'}
            </p>
            <a 
              href="mailto:ridoan.job@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              ridoan.job@gmail.com
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
