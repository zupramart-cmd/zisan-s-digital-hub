// Blog Data - Social media embeds + Blog posts (English & Bangla)

export interface SocialPost {
  id: number;
  platform: 'facebook' | 'linkedin';
  embedUrl: string;
  title: string;
  titleBn: string;
  date: string;
}

export interface BlogPost {
  id: number;
  title: string;
  titleBn: string;
  category: string;
  categoryBn: string;
  date: string;
  excerpt: string;
  excerptBn: string;
  content: string;
  contentBn: string;
  image: string;
  link?: string;
}

// Social Media Embedded Posts
// Facebook: use https://www.facebook.com/plugins/post.php?href=<encoded-post-url>
// LinkedIn: use https://www.linkedin.com/embed/feed/update/<urn>
export const socialPosts: SocialPost[] = [
  {
    id: 1,
    platform: 'facebook',
    embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fridoan.zisan%2Fposts%2Fpfbid02QnEWmuGaHmZoDLoK4mgvQ3TZFj9Tf6yBwJvVjZ7Y8pP1a4mQmZ2C1Z9YSSD5ke5Zl&show_text=true&width=500',
    title: 'Latest Development Update',
    titleBn: 'সর্বশেষ ডেভেলপমেন্ট আপডেট',
    date: '2025-01-15',
  },
  {
    id: 2,
    platform: 'linkedin',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7150000000000000000',
    title: 'Web Development Journey',
    titleBn: 'ওয়েব ডেভেলপমেন্ট যাত্রা',
    date: '2025-01-10',
  },
  {
    id: 3,
    platform: 'facebook',
    embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fridoan.zisan&show_text=true&width=500',
    title: 'OnonnoBit Agency Launch',
    titleBn: 'OnonnoBit এজেন্সি লঞ্চ',
    date: '2025-01-05',
  },
  {
    id: 4,
    platform: 'linkedin',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7145000000000000000',
    title: 'BOBDO Platform Milestone',
    titleBn: 'BOBDO প্ল্যাটফর্মের মাইলফলক',
    date: '2024-12-20',
  },
];

// Written Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building OnonnoBit: My Journey as a Web App Developer",
    titleBn: "OnonnoBit তৈরি: একজন ওয়েব অ্যাপ ডেভেলপার হিসেবে আমার যাত্রা",
    category: "Personal Journey",
    categoryBn: "ব্যক্তিগত যাত্রা",
    date: "2025-01-15",
    excerpt: "How I founded OnonnoBit and my mission to build impactful digital solutions for communities in Bangladesh.",
    excerptBn: "কীভাবে আমি OnonnoBit প্রতিষ্ঠা করেছি এবং বাংলাদেশের সম্প্রদায়গুলির জন্য প্রভাবশালী ডিজিটাল সমাধান তৈরির আমার মিশন।",
    content: "Founding OnonnoBit was a natural evolution of my passion for building web applications that solve real problems...",
    contentBn: "OnonnoBit প্রতিষ্ঠা করা ছিল বাস্তব সমস্যা সমাধানকারী ওয়েব অ্যাপ্লিকেশন তৈরির জন্য আমার আবেগের একটি স্বাভাবিক বিবর্তন...",
    image: "https://ononnobit.vercel.app/icon.png",
    link: "https://ononnobit.vercel.app",
  },
  {
    id: 2,
    title: "Chor Koi: Fighting Corruption with Crowd Verification",
    titleBn: "চোর কই: ক্রাউড ভেরিফিকেশন দিয়ে দুর্নীতির বিরুদ্ধে লড়াই",
    category: "Civic Tech",
    categoryBn: "সিভিক টেক",
    date: "2024-12-10",
    excerpt: "How the Chor Koi platform uses crowdsourced verification to identify and report corruption in Bangladesh.",
    excerptBn: "চোর কই প্ল্যাটফর্ম কীভাবে বাংলাদেশে দুর্নীতি চিহ্নিত ও রিপোর্ট করতে ক্রাউডসোর্সড ভেরিফিকেশন ব্যবহার করে।",
    content: "Corruption is one of the biggest challenges facing developing nations. Chor Koi was born out of a desire to create technology-driven solutions...",
    contentBn: "দুর্নীতি উন্নয়নশীল দেশগুলির মুখোমুখি সবচেয়ে বড় চ্যালেঞ্জগুলির মধ্যে একটি। চোর কই প্রযুক্তি-চালিত সমাধান তৈরির ইচ্ছা থেকে জন্ম নিয়েছে...",
    image: "https://chor-koi.vercel.app/favicon.png",
    link: "https://chor-koi.vercel.app",
  },
  {
    id: 3,
    title: "BOBDO: Saving Lives Through Technology",
    titleBn: "BOBDO: প্রযুক্তির মাধ্যমে জীবন বাঁচানো",
    category: "Healthcare Tech",
    categoryBn: "স্বাস্থ্যসেবা প্রযুক্তি",
    date: "2024-11-20",
    excerpt: "Building the Bogura Online Blood Donation Organization platform to connect donors with recipients in real-time.",
    excerptBn: "রিয়েল-টাইমে দাতাদের সাথে গ্রহীতাদের সংযোগ স্থাপনে বগুড়া অনলাইন রক্তদান সংগঠন প্ল্যাটফর্ম তৈরি।",
    content: "The BOBDO platform serves the Bogura community by matching blood donors with those in need through an efficient digital system...",
    contentBn: "BOBDO প্ল্যাটফর্ম একটি দক্ষ ডিজিটাল সিস্টেমের মাধ্যমে প্রয়োজনীয়দের সাথে রক্তদাতাদের মিলিয়ে বগুড়া সম্প্রদায়ের সেবা করে...",
    image: "https://bobdo.vercel.app/bobdo.png",
    link: "https://bobdo.vercel.app",
  },
  {
    id: 4,
    title: "Modern Web Development with React & TypeScript",
    titleBn: "React ও TypeScript দিয়ে আধুনিক ওয়েব ডেভেলপমেন্ট",
    category: "Web Development",
    categoryBn: "ওয়েব ডেভেলপমেন্ট",
    date: "2024-10-15",
    excerpt: "My tech stack and why I chose React with TypeScript, Vite, and Tailwind CSS for building modern web applications.",
    excerptBn: "আমার টেক স্ট্যাক এবং কেন আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির জন্য React with TypeScript, Vite, এবং Tailwind CSS বেছে নিয়েছি।",
    content: "Choosing the right tech stack is crucial for building maintainable and scalable applications. Here's my approach...",
    contentBn: "রক্ষণাবেক্ষণযোগ্য এবং স্কেলেবল অ্যাপ্লিকেশন তৈরির জন্য সঠিক টেক স্ট্যাক বেছে নেওয়া গুরুত্বপূর্ণ। এই আমার পদ্ধতি...",
    image: "https://api.microlink.io/?url=https://react.dev&screenshot=true&meta=false&embed=screenshot.url",
  },
];

export const blogCategories = {
  en: ['All', 'Personal Journey', 'Civic Tech', 'Healthcare Tech', 'Web Development'],
  bn: ['সব', 'ব্যক্তিগত যাত্রা', 'সিভিক টেক', 'স্বাস্থ্যসেবা প্রযুক্তি', 'ওয়েব ডেভেলপমেন্ট'],
};
