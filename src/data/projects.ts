// Project catalog - source of truth for /projects and /projects/:slug

import darpanImg from '@/assets/darpan-academy.svg';
import bitqraftImg from '@/assets/bitqraft.svg';
import chorKoiImg from '@/assets/chor-koi.svg';
import bloodmateImg from '@/assets/bloodmate.svg';
import bobdoImg from '@/assets/bobdo.svg';
import ziptogramImg from '@/assets/ziptogram.svg';
import zisanTradersImg from '@/assets/zisan-traders.svg';
import youthhopebdImg from '@/assets/youthhopebd.svg';
import zpadImg from '@/assets/zpad.svg';
import uniconverterImg from '@/assets/uniconverter.svg';
import portfolioImg from '@/assets/portfolio.svg';

export type Project = {
  slug: string;
  name: string;
  url: string;
  category: string;
  description: string;
  descriptionBn?: string;
  features: string[];
  problem?: string;
  solution?: string;
  tech: string[];
  demo?: { user?: { email: string; pass: string }; admin?: { email: string; pass: string } };
  offer?: { regular: string; promo: string; note: string };
  image: string;
};

export const projects: Project[] = [
  {
    slug: "darpan-academy",
    name: "Darpan Academy",
    url: "https://upcoach.netlify.app",
    category: "LMS",
    description:
      "Production-ready LMS for coaching centers and academies — students, courses, custom video player, exams with anti-cheating, ranking, manual payments, and a full admin panel.",
    descriptionBn:
      "কোচিং সেন্টার ও একাডেমির জন্য প্রোডাকশন-রেডি LMS — শিক্ষার্থী, কোর্স, কাস্টম ভিডিও প্লেয়ার, অ্যান্টি-চিটিং সহ পরীক্ষা, র‍্যাংকিং এবং সম্পূর্ণ অ্যাডমিন প্যানেল।",
    features: [
      "Public course browsing (thumbnail, price, syllabus, instructor)",
      "Multi-course enrollment with a single account",
      "Manual payments (bKash / Nagad / Rocket) + TXN validation",
      "Custom YouTube IFrame player — no branding, no related videos",
      "Speed control (1x–2x), double-tap seek, landscape fullscreen",
      "Subject & chapter-wise video filtering + PDF notes",
      "MCQ exams (text & image) with negative marking & pass marks",
      "Live / upcoming / submitted / result-published statuses",
      "Auto-computed ranking system",
      "Anti-cheating: forced fullscreen, tab-switch auto-submit",
      "One-device, one-login policy + real-time force logout",
      "Admin: user, course, video, exam management + dynamic settings",
      "One-click JSON backup & restore",
      "PWA install + in-app browser auto-redirect",
      "Bangla FAQ chatbot + WhatsApp support widget",
    ],
    problem:
      "Coaching centers need a full-featured LMS but can't afford SaaS platforms or high recurring costs.",
    solution:
      "A complete LMS engineered to serve thousands of students while staying inside Firebase's free tier — no paid gateway, no monthly fees.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Firebase", "PWA"],
    demo: {
      user: { email: "ppp@gmail.com", pass: "ppp000" },
      admin: { email: "admin@gmail.com", pass: "admin000" },
    },
    offer: {
      regular: "৳9,999",
      promo: "৳5,999",
      note: "Get the complete LMS web app for just ৳5,999 when you provide a video review about OnonnoBit and our founder.",
    },
    image: darpanImg,
  },
  {
    slug: "bitqraft",
    name: "BitQraft",
    url: "https://bitqraft.netlify.app",
    category: "E-commerce",
    description:
      "Complete e-commerce web app with a Zero Recurring Cost Architecture — cart, rewards, coupons, PWA install, manual payment verification, and a full admin dashboard.",
    descriptionBn:
      "সম্পূর্ণ ই-কমার্স ওয়েব অ্যাপ — কার্ট, রিওয়ার্ড, কুপন, PWA, ম্যানুয়াল পেমেন্ট এবং সম্পূর্ণ অ্যাডমিন ড্যাশবোর্ড।",
    features: [
      "Fast, smart UI with seamless cart & checkout",
      "Reward & referral system (points → discount coupons)",
      "Progressive Web App — installable on phones",
      "Smart redirect — opens in external browser from Facebook",
      "Integrated chatbot & order tracking",
      "Centralized dashboard for orders, users, and products",
      "Dynamic category, banner, and coupon management",
      "Smart manual payment verification (bKash / Nagad / COD)",
      "One-click backup system",
      "Zero recurring cost architecture",
    ],
    problem:
      "Small businesses can't sustain monthly hosting, database, and payment-gateway fees on top of a build cost.",
    solution:
      "An e-commerce web app that runs on free tiers with manual payment flow — automating sales at near-zero recurring cost.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind", "PWA"],
    demo: {
      user: { email: "user1@gmail.com", pass: "user000" },
      admin: { email: "admin@gmail.com", pass: "admin000" },
    },
    offer: {
      regular: "৳2,999",
      promo: "৳599",
      note: "Get the complete e-commerce web app for just ৳599 when you provide a short video review about our agency.",
    },
    image: bitqraftImg,
  },
  {
    slug: "chor-koi",
    name: "Chor Koi",
    url: "https://chor-koi.vercel.app",
    category: "Civic Tech",
    description: "Anonymous corruption reporting platform for citizens to report and track corruption cases with crowd verification.",
    descriptionBn: "নাগরিকদের জন্য দুর্নীতি রিপোর্ট করার অনামিক প্ল্যাটফর্ম, ক্রাউড ভেরিফিকেশন সহ।",
    features: ["Anonymous reporting", "Location tagging", "Case tracking", "Public feed", "Admin moderation", "Crowd verification"],
    problem: "Citizens fear reporting corruption due to identity exposure.",
    solution: "Anonymous, secure platform to report corruption with evidence and community verification.",
    tech: ["React", "Firebase", "Tailwind"],
    image: chorKoiImg,
  },
  {
    slug: "bloodmate",
    name: "BloodMate",
    url: "https://blood-mate.netlify.app",
    category: "Healthcare",
    description: "Blood donor-recipient matching platform with real-time availability and emergency requests.",
    descriptionBn: "রক্তদাতা ও গ্রহীতার মিলন প্ল্যাটফর্ম, রিয়েল-টাইম উপলব্ধতা ও জরুরি রিকোয়েস্ট সহ।",
    features: ["Donor registration", "Blood group search", "Emergency requests", "Location-based matching", "Donation history"],
    problem: "Finding blood donors during emergencies is time-consuming and unreliable.",
    solution: "Instant donor-recipient matching with real-time availability status.",
    tech: ["React", "Firebase", "Tailwind"],
    image: bloodmateImg,
  },
  {
    slug: "bobdo",
    name: "BOBDO",
    url: "https://bobdo.vercel.app",
    category: "NGO",
    description: "Blood donation organization site with campaign, volunteer, and event management.",
    descriptionBn: "রক্তদান সংগঠনের সাইট — ক্যাম্পেইন, স্বেচ্ছাসেবক ও ইভেন্ট ব্যবস্থাপনা।",
    features: ["Campaign management", "Volunteer registration", "Event calendar", "Blood request system", "Statistics dashboard"],
    problem: "Blood donation organizations lack digital presence and management tools.",
    solution: "Complete organizational website with campaign and volunteer management.",
    tech: ["React", "Firebase", "Tailwind"],
    image: bobdoImg,
  },
  {
    slug: "ziptogram",
    name: "ZiptoGram",
    url: "https://micro-media.netlify.app",
    category: "Social",
    description: "Lightweight mini social media platform with posts, likes, comments, and user profiles.",
    descriptionBn: "লাইটওয়েট মিনি সোশ্যাল মিডিয়া প্ল্যাটফর্ম — পোস্ট, লাইক, কমেন্ট এবং প্রোফাইল।",
    features: ["User profiles", "Post creation", "Image upload", "Likes", "Comments", "Follow system", "Real-time feed"],
    problem: "Major social platforms are bloated and privacy-invasive.",
    solution: "Minimalist, privacy-focused social platform for small communities.",
    tech: ["React", "Firebase", "Tailwind"],
    image: ziptogramImg,
  },
  {
    slug: "zisan-traders",
    name: "Zisan Traders",
    url: "https://zisan-trader.netlify.app",
    category: "Business",
    description: "Complete inventory and sales management system for small businesses and traders.",
    descriptionBn: "ছোট ব্যবসা ও ট্রেডারদের জন্য সম্পূর্ণ ইনভেন্টরি ও সেলস ম্যানেজমেন্ট সিস্টেম।",
    features: ["Product inventory", "Sales tracking", "Purchase management", "Profit/loss reports", "Invoice generation", "Supplier management"],
    problem: "Small traders manage inventory manually, leading to errors and losses.",
    solution: "Digital inventory system with automated calculations and reports.",
    tech: ["React", "Firebase", "Tailwind"],
    image: zisanTradersImg,
  },
  {
    slug: "youthhopebd",
    name: "YouthHopeBD",
    url: "https://youthhope-bd.netlify.app",
    category: "NGO",
    description: "Youth empowerment organization with programs, events, membership, and impact tracking.",
    descriptionBn: "যুব সংগঠনের ওয়েবসাইট — প্রোগ্রাম, ইভেন্ট এবং প্রভাব ট্র্যাকিং।",
    features: ["Program showcase", "Event management", "Member registration", "Impact statistics", "Blog/news section"],
    problem: "Youth organizations struggle to reach and engage young people digitally.",
    solution: "Modern platform to showcase programs, recruit members, and track impact.",
    tech: ["React", "Firebase", "Tailwind"],
    image: youthhopebdImg,
  },
  {
    slug: "zpad",
    name: "Zpad",
    url: "https://zpad.netlify.app",
    category: "Utility",
    description: "Minimal, fast notepad app with cloud sync, markdown support, and offline capability.",
    descriptionBn: "মিনিমাল, দ্রুত নোটপ্যাড অ্যাপ — ক্লাউড সিঙ্ক, মার্কডাউন সাপোর্ট।",
    features: ["Rich text editing", "Cloud sync", "Offline mode", "Note organization", "Search", "Export"],
    tech: ["React", "Firebase", "Tailwind"],
    image: zpadImg,
  },
  {
    slug: "uniconverter",
    name: "UniConverter",
    url: "https://uniconverter.netlify.app",
    category: "Utility",
    description: "Universal unit converter supporting length, weight, temperature, currency, and more.",
    descriptionBn: "ইউনিভার্সাল ইউনিট কনভার্টার — দৈর্ঘ্য, ওজন, তাপমাত্রা, মুদ্রা।",
    features: ["Multiple unit categories", "Real-time conversion", "Currency rates", "History", "Favorites"],
    tech: ["React", "Tailwind"],
    image: uniconverterImg,
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    url: "https://ridoan-zisan.netlify.app",
    category: "Portfolio",
    description: "Personal developer portfolio with modern animations, project showcase, and contact integration.",
    descriptionBn: "ব্যক্তিগত ডেভেলপার পোর্টফোলিও — আধুনিক অ্যানিমেশন এবং প্রজেক্ট শোকেস।",
    features: ["Responsive design", "Smooth animations", "SEO/AEO/GEO optimized", "Bilingual (EN/BN)", "Chatbot"],
    tech: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    image: portfolioImg,
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
