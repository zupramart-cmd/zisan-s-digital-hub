// Chatbot responses — dynamically sourced from Portfolio.ts
import { portfolioData } from './Portfolio';

const p = portfolioData;

const projectsList = (lang: 'en' | 'bn') =>
  p.projects.map(pr => `• ${pr.name} — ${pr.link}`).join('\n');

const experienceList = (lang: 'en' | 'bn') =>
  p.experience.map(e => {
    const role = lang === 'en' ? e.role : e.roleBn;
    const co = lang === 'en' ? e.company : e.companyBn;
    const period = lang === 'en' ? e.period : e.periodBn;
    return `• ${role} @ ${co} (${period})`;
  }).join('\n');

const coursesList = (lang: 'en' | 'bn') =>
  p.courses.map(c => `• ${lang === 'en' ? c.name : c.nameBn} — ${c.platform}`).join('\n');

export const chatbotData = {
  greeting: {
    en: `Hello! I'm here to tell you about ${p.profile.name}. Ask me about:\n\n• Profile\n• Education\n• Experience\n• Projects\n• Certificates\n• Skills\n• Contact\n• Blog\n• Social Media\n• Agency (OnonnoBit)`,
    bn: `হ্যালো! আমি এখানে ${p.profile.nameBn} সম্পর্কে বলতে এসেছি। জিজ্ঞাসা করুন:\n\n• প্রোফাইল\n• শিক্ষা\n• অভিজ্ঞতা\n• প্রজেক্ট\n• সার্টিফিকেট\n• দক্ষতা\n• যোগাযোগ\n• ব্লগ\n• সোশ্যাল মিডিয়া\n• এজেন্সি (OnonnoBit)`,
  },
  profile: {
    en: `${p.profile.name} — ${p.profile.title}\n\n${p.profile.fullDescription}\n\n📧 ${p.profile.email}\n📞 ${p.profile.phone}\n📍 ${p.profile.location}`,
    bn: `${p.profile.nameBn} — ${p.profile.titleBn}\n\n${p.profile.fullDescriptionBn}\n\n📧 ${p.profile.email}\n📞 ${p.profile.phone}\n📍 ${p.profile.locationBn}`,
  },
  education: {
    en: `🎓 HSC: ${p.education.hsc.institute} — GPA ${p.education.hsc.gpa} (${p.education.hsc.session})\n🎓 SSC: ${p.education.ssc.institute} — GPA ${p.education.ssc.gpa} (${p.education.ssc.session})`,
    bn: `🎓 এইচএসসি: ${p.education.hsc.instituteBn} — জিপিএ ${p.education.hsc.gpa} (${p.education.hsc.session})\n🎓 এসএসসি: ${p.education.ssc.instituteBn} — জিপিএ ${p.education.ssc.gpa} (${p.education.ssc.session})`,
  },
  skills: {
    en: `💻 Frontend: ${p.skills.frontend.join(', ')}\n🔧 Backend: ${p.skills.backend.join(', ')}\n☁️ Hosting: ${p.skills.hosting.join(', ')}\n🎯 Services: ${p.skills.services.join(', ')}\n⌨️ Typing: Bangla ${p.skills.typing.bangla}, English ${p.skills.typing.english}`,
    bn: `💻 ফ্রন্টএন্ড: ${p.skills.frontend.join(', ')}\n🔧 ব্যাকএন্ড: ${p.skills.backend.join(', ')}\n☁️ হোস্টিং: ${p.skills.hosting.join(', ')}\n🎯 সার্ভিস: ${p.skills.services.join(', ')}\n⌨️ টাইপিং: বাংলা ${p.skills.typing.bangla}, ইংরেজি ${p.skills.typing.english}`,
  },
  experience: {
    en: `Experience:\n${experienceList('en')}`,
    bn: `অভিজ্ঞতা:\n${experienceList('bn')}`,
  },
  projects: {
    en: `Projects:\n${projectsList('en')}`,
    bn: `প্রজেক্ট:\n${projectsList('bn')}`,
  },
  certificates: {
    en: `Certificates:\n${p.certificates.map(c => `• ${c.name}`).join('\n')}\n\nAlso courses:\n${coursesList('en')}`,
    bn: `সার্টিফিকেট:\n${p.certificates.map(c => `• ${c.nameBn}`).join('\n')}`,
  },
  contact: {
    en: `📧 ${p.profile.email}\n📞 ${p.profile.phone}\n📍 ${p.profile.location}\n🔗 ${p.social.linkedin}\n💬 ${p.social.whatsapp}`,
    bn: `📧 ${p.profile.email}\n📞 ${p.profile.phone}\n📍 ${p.profile.locationBn}\n🔗 ${p.social.linkedin}\n💬 ${p.social.whatsapp}`,
  },
  agency: {
    en: `🏢 ${p.agency.name} — ${p.agency.tagline}\n🌐 ${p.agency.website}\n📧 ${p.agency.email}\n💬 WhatsApp: ${p.agency.whatsapp}\n📍 ${p.agency.location}`,
    bn: `🏢 ${p.agency.name} — কাস্টম ওয়েব অ্যাপ ডেভেলপমেন্ট এজেন্সি\n🌐 ${p.agency.website}\n📧 ${p.agency.email}\n💬 হোয়াটসঅ্যাপ: ${p.agency.whatsapp}\n📍 ${p.agency.location}`,
  },
  blog: {
    en: `Read latest blog posts and social media updates at /blog`,
    bn: `সর্বশেষ ব্লগ পোস্ট ও সোশ্যাল মিডিয়া আপডেট দেখুন /blog পেজে`,
  },
  social: {
    en: `🔗 LinkedIn: ${p.social.linkedin}\n💻 GitHub: ${p.social.github}\n📘 Facebook: ${p.social.facebook}\n🎥 YouTube: ${p.social.youtube}\n💬 WhatsApp: ${p.social.whatsapp}`,
    bn: `🔗 লিংকডইন: ${p.social.linkedin}\n💻 গিটহাব: ${p.social.github}\n📘 ফেসবুক: ${p.social.facebook}\n🎥 ইউটিউব: ${p.social.youtube}\n💬 হোয়াটসঅ্যাপ: ${p.social.whatsapp}`,
  },
  thanks: {
    en: `You're welcome! Ask me anything else about ${p.profile.name}.`,
    bn: `স্বাগতম! আরও কিছু জিজ্ঞাসা করতে পারেন।`,
  },
  age: {
    en: (age: number) => `${p.profile.name} is ${age} years old.`,
    bn: (age: number) => `${p.profile.nameBn}-এর বয়স ${age} বছর।`,
  },
  bloodGroup: {
    en: `Blood group: B+`,
    bn: `রক্তের গ্রুপ: বি+`,
  },
  default: {
    en: `I can help with:\n• Profile\n• Education\n• Skills\n• Experience\n• Projects\n• Certificates\n• Contact\n• Blog\n• Agency (OnonnoBit)\n• Social Media`,
    bn: `আমি সাহায্য করতে পারি:\n• প্রোফাইল\n• শিক্ষা\n• দক্ষতা\n• অভিজ্ঞতা\n• প্রজেক্ট\n• সার্টিফিকেট\n• যোগাযোগ\n• ব্লগ\n• এজেন্সি\n• সোশ্যাল মিডিয়া`,
  },
};

export const chatbotKeywords = {
  greeting: ['hi', 'hello', 'hey', 'হ্যালো', 'হাই', 'হেই', 'assalamu', 'salam'],
  profile: ['profile', 'about', 'who', 'ridoan', 'zisan', 'প্রোফাইল', 'সম্পর্কে', 'কে', 'জিসান'],
  education: ['education', 'study', 'school', 'college', 'hsc', 'ssc', 'শিক্ষা', 'পড়া', 'স্কুল', 'কলেজ'],
  skills: ['skill', 'tech', 'stack', 'frontend', 'backend', 'react', 'দক্ষতা', 'টেক'],
  experience: ['experience', 'work', 'job', 'career', 'অভিজ্ঞতা', 'কাজ', 'চাকরি'],
  projects: ['project', 'portfolio', 'app', 'website', 'lms', 'e-commerce', 'ecommerce', 'প্রজেক্ট', 'প্রকল্প'],
  certificates: ['certificate', 'certification', 'course', 'olympiad', 'award', 'সার্টিফিকেট', 'সনদ', 'কোর্স', 'অলিম্পিয়াড'],
  contact: ['contact', 'email', 'phone', 'reach', 'যোগাযোগ', 'ইমেইল', 'ফোন'],
  agency: ['agency', 'ononnobit', 'company', 'business', 'এজেন্সি', 'কোম্পানি'],
  blog: ['blog', 'post', 'article', 'ব্লগ', 'পোস্ট', 'নিবন্ধ'],
  social: ['social', 'linkedin', 'github', 'facebook', 'youtube', 'twitter', 'whatsapp', 'সোশ্যাল', 'ফেসবুক'],
  thanks: ['thanks', 'thank you', 'ধন্যবাদ'],
  age: ['age', 'old', 'birthday', 'বয়স', 'জন্ম'],
  bloodGroup: ['blood', 'group', 'রক্ত', 'গ্রুপ'],
};
