// Portfolio Data - Main page content (English & Bangla)
// Purpose: Bangladesh Govt. job portfolio + Developer showcase
// Person: Md Ridoan Mahmud Zisan | Founder @OnonnoBit

export const portfolioData = {
  profile: {
    name: "Md Ridoan Mahmud Zisan",
    nameBn: "মোঃ রিদোয়ান মাহমুদ জিসান",
    title: "Web Application Developer | Founder @OnonnoBit",
    titleBn: "ওয়েব অ্যাপ্লিকেশন ডেভেলপার | প্রতিষ্ঠাতা @OnonnoBit",
    description: "Building impactful digital solutions for communities",
    descriptionBn: "সম্প্রদায়ের জন্য প্রভাবশালী ডিজিটাল সমাধান তৈরি",
    fullDescription: "I am a passionate Web Application Developer and the Founder of OnonnoBit, a custom web application development agency. I build impactful digital solutions from Learning Management Systems and E-commerce platforms to civic tech tools that fight corruption through crowd verification. I also volunteer with blood donation organizations and youth groups, building web apps that serve communities. Google certified IT Support Professional with strong computer skills and a drive to make technology accessible for everyone.",
    fullDescriptionBn: "আমি একজন প্যাশনেট ওয়েব অ্যাপ্লিকেশন ডেভেলপার এবং OnonnoBit — একটি কাস্টম ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট এজেন্সির প্রতিষ্ঠাতা। আমি লার্নিং ম্যানেজমেন্ট সিস্টেম ও ই-কমার্স প্ল্যাটফর্ম থেকে শুরু করে দুর্নীতির বিরুদ্ধে ক্রাউড ভেরিফিকেশনের মাধ্যমে লড়াই করা সিভিক টেক টুলস পর্যন্ত প্রভাবশালী ডিজিটাল সমাধান তৈরি করি। এছাড়াও আমি রক্তদান সংগঠন ও যুব সংগঠনের সাথে স্বেচ্ছাসেবক হিসেবে কাজ করি, সম্প্রদায়ের সেবায় ওয়েব অ্যাপ তৈরি করি। Google Certified IT Support Professional হিসেবে আমার লক্ষ্য প্রযুক্তিকে সবার জন্য সহজলভ্য করা।",
    email: "ridoan.zisan@gmail.com",
    phone: "+8801712525910",
    whatsapp: "+8801712525910",
    location: "Bogura, Bangladesh",
    locationBn: "বগুড়া, বাংলাদেশ",
    address: {
      village: "Bishwaharigacha",
      villageBn: "বিশ্বহরিগাছা",
      upazila: "Dhunat",
      upazilaBn: "ধুনট",
      district: "Bogura",
      districtBn: "বগুড়া",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      postCode: "5850",
    },
    profileImage: "https://ridoan-zisan.netlify.app/profile.jpg",
    signatureImage: "https://ridoan-zisan.netlify.app/signature.png",
    resumeLink: "/Resume.pdf",
    githubUsername: "RidoanDev",
  },

  // Education (Board result format for Govt. job portfolio)
  education: {
    hsc: {
      degree: "Higher Secondary Certificate (HSC)",
      degreeBn: "উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)",
      board: "Rajshahi",
      boardBn: "রাজশাহী",
      year: "2025",
      yearBn: "২০২৫",
      gpa: "4.25",
      gpaOutOf: "5.00",
      group: "Science",
      groupBn: "বিজ্ঞান",
    },
    ssc: {
      degree: "Secondary School Certificate (SSC)",
      degreeBn: "মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)",
      board: "Rajshahi",
      boardBn: "রাজশাহী",
      year: "2023",
      yearBn: "২০২৩",
      gpa: "5.00",
      gpaOutOf: "5.00",
      group: "Science",
      groupBn: "বিজ্ঞান",
    },
  },

  // Extra-curricular / Professional Development
  courses: {
    en: "I have learned complete web application development from YouTube. Additionally, I have completed various online courses from Google, IBM, Coursera and other platforms and received their certificates.",
    bn: "ইউটিউব থেকে সম্পূর্ণ ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট শিখেছি। এছাড়াও Google, IBM, Coursera সহ বিভিন্ন প্ল্যাটফর্ম থেকে বিভিন্ন অনলাইন কোর্স করেছি যেগুলোর সার্টিফিকেট পেয়েছি।",
  },

  olympiads: [
    {
      id: 1,
      name: "Bangladesh Mathematical Olympiad",
      nameBn: "বাংলাদেশ গণিত অলিম্পিয়াড",
      platform: "BdMO Committee",
      details: ["National Level Participation", "Problem Solving", "Mathematical Reasoning"],
      detailsBn: ["জাতীয় পর্যায়ে অংশগ্রহণ", "সমস্যা সমাধান", "গাণিতিক যুক্তি"],
      certificateLink: "https://i.postimg.cc/pLFhFkWb/Bangladesh-Mathematical-Olympiad.png",
    },
    {
      id: 2,
      name: "ICT Olympiad",
      nameBn: "আইসিটি অলিম্পিয়াড",
      platform: "Bangladesh ICT Olympiad",
      details: ["Quarter Final Qualifier", "Technical Skills", "Innovation"],
      detailsBn: ["কোয়ার্টার ফাইনালে উত্তীর্ণ", "প্রযুক্তিগত দক্ষতা", "উদ্ভাবন"],
      certificateLink: "https://i.postimg.cc/wMwnXdDM/ICT-Olympiad.png",
    },
    {
      id: 3,
      name: "National GK Olympiad",
      nameBn: "জাতীয় সাধারণ জ্ঞান অলিম্পিয়াড",
      platform: "Zero Olympiad",
      details: ["General Knowledge", "Current Affairs", "Critical Thinking"],
      detailsBn: ["সাধারণ জ্ঞান", "সাম্প্রতিক বিষয়াবলী", "সমালোচনামূলক চিন্তা"],
      certificateLink: "https://i.postimg.cc/tTg8j6x0/GK-olympiad.jpg",
    },
  ],

  // Professional Experience
  experience: [
    {
      id: 1,
      company: "OnonnoBit",
      companyBn: "OnonnoBit",
      role: "Founder & Lead Developer",
      roleBn: "প্রতিষ্ঠাতা ও লিড ডেভেলপার",
      period: "2026 - Present",
      periodBn: "২০২৬ - বর্তমান",
      logo: "https://ononnobit.vercel.app/icon.png",
      details: [
        "Founded and lead OnonnoBit, a custom web application development agency",
        "Specialize in building Learning Management Systems, E-commerce platforms, and business solutions",
        "Utilize modern tech stack including React, TypeScript, and Firebase",
        "Provide SEO, AEO, and GEO services to clients across Bangladesh",
      ],
      detailsBn: [
        "OnonnoBit — একটি কাস্টম ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট এজেন্সি প্রতিষ্ঠা ও পরিচালনা করছি",
        "লার্নিং ম্যানেজমেন্ট সিস্টেম, ই-কমার্স প্ল্যাটফর্ম এবং বিজনেস সলিউশন তৈরিতে বিশেষজ্ঞ",
        "React, TypeScript এবং Firebase সহ আধুনিক টেক স্ট্যাক ব্যবহার",
        "বাংলাদেশ জুড়ে ক্লায়েন্টদের SEO, AEO এবং GEO সেবা প্রদান",
      ],
      link: "https://ononnobit.vercel.app",
    },
    {
      id: 2,
      company: "Bogura Online Blood Donation Organization",
      companyBn: "বগুড়া অনলাইন রক্তদান সংগঠন",
      role: "Web Developer & Volunteer",
      roleBn: "ওয়েব ডেভেলপার ও স্বেচ্ছাসেবক",
      period: "2025 - Present",
      periodBn: "২০২৫ - বর্তমান",
      logo: "https://bobdo.vercel.app/bobdo.png",
      details: [
        "Volunteer with a blood donation organization serving Bogura community",
        "Developed and maintain the organization's Blood Management web application",
        "Built the official website to streamline donor management and blood requests",
        "Coordinate between blood donors and recipients through digital platform",
      ],
      detailsBn: [
        "বগুড়া সম্প্রদায়ের সেবায় নিয়োজিত রক্তদান সংগঠনে স্বেচ্ছাসেবক হিসেবে কাজ করছি",
        "সংগঠনের ব্লাড ম্যানেজমেন্ট ওয়েব অ্যাপ্লিকেশন তৈরি ও রক্ষণাবেক্ষণ করছি",
        "ডোনার ম্যানেজমেন্ট ও রক্তের অনুরোধ সহজ করতে অফিশিয়াল ওয়েবসাইট তৈরি করেছি",
        "ডিজিটাল প্ল্যাটফর্মের মাধ্যমে রক্তদাতা ও প্রাপকদের মধ্যে সমন্বয় করি",
      ],
      link: "https://bobdo.vercel.app",
    },
    {
      id: 3,
      company: "Anti Corruption Platform (Chor Koi)",
      companyBn: "দুর্নীতিবিরোধী প্ল্যাটফর্ম (চোর কই)",
      role: "Civic Tech Developer",
      roleBn: "সিভিক টেক ডেভেলপার",
      period: "2024",
      periodBn: "২০২৪",
      logo: "https://chor-koi.vercel.app/favicon.png",
      details: [
        "Developed 'Chor Koi' — an innovative anti-corruption web application",
        "Uses crowd verification to identify and report corruption",
        "Citizens can submit reports which are verified by the community",
        "Creates a transparent accountability system for social good",
      ],
      detailsBn: [
        "'চোর কই' — একটি উদ্ভাবনী দুর্নীতিবিরোধী ওয়েব অ্যাপ্লিকেশন তৈরি করেছি",
        "দুর্নীতি চিহ্নিত ও রিপোর্ট করতে ক্রাউড ভেরিফিকেশন ব্যবহার করে",
        "নাগরিকরা রিপোর্ট জমা দিতে পারেন যা সম্প্রদায় দ্বারা যাচাই হয়",
        "সামাজিক কল্যাণের জন্য একটি স্বচ্ছ জবাবদিহিতা ব্যবস্থা তৈরি করে",
      ],
      link: "https://chor-koi.vercel.app",
    },
  ],

  // Certificates (using verified image links)
  certificates: [
    { id: 1, name: "Google IT Support", nameBn: "গুগল আইটি সাপোর্ট", verifyLink: "https://i.postimg.cc/SRk6P0YS/Google-IT-Support.png", image: "https://i.postimg.cc/SRk6P0YS/Google-IT-Support.png" },
    { id: 2, name: "Foundations of Cyber Security", nameBn: "সাইবার সিকিউরিটির মূল ভিত্তি", verifyLink: "https://i.postimg.cc/nhk0pcgv/Foundations-of-Cyber-Security.png", image: "https://i.postimg.cc/nhk0pcgv/Foundations-of-Cyber-Security.png" },
    { id: 3, name: "Complete Web Development", nameBn: "সম্পূর্ণ ওয়েব ডেভেলপমেন্ট", verifyLink: "https://i.postimg.cc/gkr6Ym10/Complete-Web-Development.png", image: "https://i.postimg.cc/gkr6Ym10/Complete-Web-Development.png" },
    { id: 4, name: "Introduction to Python", nameBn: "পাইথন পরিচিতি", verifyLink: "https://i.postimg.cc/L6qhcvZY/Introduction-to-Python.jpg", image: "https://i.postimg.cc/L6qhcvZY/Introduction-to-Python.jpg" },
    { id: 5, name: "Python for Data Science & AI", nameBn: "ডেটা সায়েন্স ও এআই-এর জন্য পাইথন", verifyLink: "https://i.postimg.cc/j2X7CZSv/Python-for-Data-Science-AI-Development.png", image: "https://i.postimg.cc/j2X7CZSv/Python-for-Data-Science-AI-Development.png" },
    { id: 6, name: "Introduction to Artificial Intelligence", nameBn: "কৃত্রিম বুদ্ধিমত্তার ভূমিকা", verifyLink: "https://i.postimg.cc/fTWdVzN6/introduction-to-artificial-intelligence.png", image: "https://i.postimg.cc/fTWdVzN6/introduction-to-artificial-intelligence.png" },
    { id: 7, name: "Machine Learning", nameBn: "মেশিন লার্নিং", verifyLink: "https://i.postimg.cc/7YB27FPb/machine-learning.png", image: "https://i.postimg.cc/7YB27FPb/machine-learning.png" },
    { id: 8, name: "Digital Marketing", nameBn: "ডিজিটাল মার্কেটিং", verifyLink: "https://i.postimg.cc/XvKr2JBs/digital-marketing.png", image: "https://i.postimg.cc/XvKr2JBs/digital-marketing.png" },
    { id: 9, name: "Gender & Climate Action", nameBn: "লিঙ্গ ও জলবায়ু পদক্ষেপ", verifyLink: "https://i.postimg.cc/V6Dd8VRM/Gender-equality-and-human-rights-in-climate-action-and-renewable-energy.jpg", image: "https://i.postimg.cc/V6Dd8VRM/Gender-equality-and-human-rights-in-climate-action-and-renewable-energy.jpg" },
    { id: 10, name: "Net Zero 101", nameBn: "নেট জিরো ১০১", verifyLink: "https://i.postimg.cc/ZR7Kgybx/Net-Zero-101-What-Why-and-How.jpg", image: "https://i.postimg.cc/ZR7Kgybx/Net-Zero-101-What-Why-and-How.jpg" },
    { id: 11, name: "Introduction to Sustainable Development", nameBn: "টেকসই উন্নয়নের ভূমিকা", verifyLink: "https://i.postimg.cc/tCL7pPhr/Introduction-to-Sustainable-Development-in-Practice.jpg", image: "https://i.postimg.cc/tCL7pPhr/Introduction-to-Sustainable-Development-in-Practice.jpg" },
    { id: 12, name: "The UN Climate Change Process", nameBn: "জাতিসংঘ জলবায়ু পরিবর্তন প্রক্রিয়া", verifyLink: "https://i.postimg.cc/zv4DDZRL/The-UN-Climate-Change-process.jpg", image: "https://i.postimg.cc/zv4DDZRL/The-UN-Climate-Change-process.jpg" },
    { id: 13, name: "BOBDO App Developer", nameBn: "BOBDO অ্যাপ ডেভেলপার", verifyLink: "https://i.postimg.cc/8CfQNkjN/BOBDO.png", image: "https://i.postimg.cc/8CfQNkjN/BOBDO.png" },
    { id: 14, name: "Bangladesh Mathematical Olympiad", nameBn: "বাংলাদেশ গণিত অলিম্পিয়াড", verifyLink: "https://i.postimg.cc/pLFhFkWb/Bangladesh-Mathematical-Olympiad.png", image: "https://i.postimg.cc/pLFhFkWb/Bangladesh-Mathematical-Olympiad.png" },
    { id: 15, name: "ICT Olympiad", nameBn: "আইসিটি অলিম্পিয়াড", verifyLink: "https://i.postimg.cc/wMwnXdDM/ICT-Olympiad.png", image: "https://i.postimg.cc/wMwnXdDM/ICT-Olympiad.png" },
    { id: 16, name: "GK Olympiad", nameBn: "সাধারণ জ্ঞান অলিম্পিয়াড", verifyLink: "https://i.postimg.cc/tTg8j6x0/GK-olympiad.jpg", image: "https://i.postimg.cc/tTg8j6x0/GK-olympiad.jpg" },
  ],

  // Skills & Tech Stack
  skills: {
    frontend: {
      title: "Frontend",
      titleBn: "ফ্রন্টএন্ড",
      items: ["React (TypeScript)", "TypeScript", "Vite", "Tailwind CSS", "HTML5 & CSS3", "JavaScript", "Modern UI Libraries"],
    },
    backend: {
      title: "Backend",
      titleBn: "ব্যাকএন্ড",
      items: ["Firebase Authentication", "Firebase Backend", "REST APIs"],
    },
    hosting: {
      title: "Hosting & Deployment",
      titleBn: "হোস্টিং ও ডিপ্লয়মেন্ট",
      items: ["Git", "GitHub", "Vercel", "Netlify"],
    },
    services: {
      title: "Services & Solutions",
      titleBn: "সেবা ও সমাধান",
      items: ["Custom Web App Development", "LMS Development", "E-commerce Development", "SEO", "AEO", "GEO"],
    },
    tools: {
      title: "Tools & Software",
      titleBn: "টুলস ও সফটওয়্যার",
      items: ["VS Code", "Git & GitHub", "Chrome Dev Tools", "Figma (Basic)"],
    },
    computer: {
      title: "Computer Skills",
      titleBn: "কম্পিউটার দক্ষতা",
      items: ["MS Word", "MS Excel", "MS PowerPoint", "Internet & Email", "Troubleshooting"],
      typing: {
        bangla: "Bangla: 20 WPM",
        banglaBn: "বাংলা: ২০ WPM",
        english: "English: 30 WPM",
        englishBn: "ইংরেজি: ৩০ WPM",
      },
    },
    language: [
      {
        name: "Bangla",
        nameBn: "বাংলা",
        reading: 80,
        writing: 70,
        speaking: 90,
      },
      {
        name: "English",
        nameBn: "ইংরেজি",
        reading: 70,
        writing: 90,
        speaking: 50,
      },
    ],
  },

  // Family & Personal Info
  family: {
    father: {
      relation: "Father",
      relationBn: "পিতা",
      name: "Md Rokibul Hasan Shekh",
      nameBn: "মোঃ রকিবুল হাসান শেখ",
    },
    mother: {
      relation: "Mother",
      relationBn: "মাতা",
      name: "Mst. Zosna Khatun",
      nameBn: "মোছাঃ জোসনা খাতুন",
    },
    siblings: {
      relation: "Younger Sister",
      relationBn: "ছোট বোন",
      name: "Raisa Jannat",
      nameBn: "রাইসা জান্নাত",
    },
  },

  personal: {
    dob: "31 December 2007",
    dobBn: "৩১ ডিসেম্বর ২০০৭",
    nationality: "Bangladeshi",
    nationalityBn: "বাংলাদেশী",
    religion: "Islam",
    religionBn: "ইসলাম",
    bloodGroup: "B+",
    maritalStatus: "Single",
    maritalStatusBn: "অবিবাহিত",
    hobbies: ["Web Development", "Coding", "Problem Solving", "Reading"],
    hobbiesBn: ["ওয়েব ডেভেলপমেন্ট", "কোডিং", "সমস্যা সমাধান", "পড়া"],
  },

  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/ridoan-zisan",
    github: "https://github.com/RidoanDev",
    facebook: "https://facebook.com/ridoan.zisan",
    google: "https://www.google.com/search?q=Md+Ridoan+Mahmud+Zisan",
    gmail: "mailto:ridoan.zisan@gmail.com",
    whatsapp: "https://wa.me/8801712525910",
  },

  // OnonnoBit Agency Info
  agency: {
    name: "OnonnoBit",
    nameBn: "অনন্যবিট",
    description: "Custom Web App Development Agency",
    descriptionBn: "কাস্টম ওয়েব অ্যাপ ডেভেলপমেন্ট এজেন্সি",
    logo: "https://ononnobit.vercel.app/icon.png",
    email: "ononnobit@gmail.com",
    phone: "+8801763822211",
    whatsapp: "https://wa.me/8801763822211",
    website: "https://ononnobit.vercel.app",
    location: "Bogura, Bangladesh (Remote)",
    locationBn: "বগুড়া, বাংলাদেশ (রিমোট)",
    social: {
      facebook: "https://facebook.com/ononnobit",
      github: "https://github.com/OnonnoBit",
      linkedin: "https://www.linkedin.com/company/ononnobit",
      google: "https://www.google.com/search?q=OnonnoBit",
    },
  },
};
