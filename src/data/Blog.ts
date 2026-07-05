// Blog Data — Social embeds + written articles (English & Bangla)

// Facebook post/video embed URLs. Each entry can be a 'video' or 'post'.
export type SocialEmbed = {
  type: 'video' | 'post';
  href: string;
  height?: number;
};

export const socialEmbeds: SocialEmbed[] = [
  {
    type: 'video',
    href: 'https://www.facebook.com/FaatihaAayatOfficial/videos/1354348278887913/',
    height: 362,
  },
  {
    type: 'post',
    href: 'https://www.facebook.com/ridoan.zisan/posts/pfbid02rXWMWrxTZzYFwyBqBRP2TFqUyRUVKvMkR3AhK2wRhcFAKvGoDvpB1fSPuh1nP9tzl',
    height: 500,
  },
  {
    type: 'post',
    href: 'https://www.facebook.com/ridoan.zisan/posts/pfbid0d6yiGnJmMhCwT8s1PScQ2C5vXBoUxSF4hLwuBpaJdY3Q2GYE45FbAFEeaEWJoSVSl',
    height: 500,
  },
];

// Written articles — thoughts, comparative religion notes, dev reflections
export type BlogPost = {
  id: number;
  category: 'Thoughts' | 'Religion' | 'Development' | 'Life';
  categoryBn: string;
  date: string;
  title: string;
  titleBn: string;
  excerpt: string;
  excerptBn: string;
  content: string;
  contentBn: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Religion',
    categoryBn: 'ধর্ম',
    date: '2025-05-12',
    title: 'The Common Origin of World Religions',
    titleBn: 'বিশ্বধর্মসমূহের অভিন্ন উৎস',
    excerpt:
      'Across cultures — Vedic, Abrahamic, Buddhist, Zoroastrian — the earliest scriptures repeat the same core themes: one creator, moral order, and life after death.',
    excerptBn:
      'বৈদিক, আব্রাহামিক, বৌদ্ধ, জরাথুস্ত্রীয় — প্রায় সব প্রাচীন ধর্মগ্রন্থেই এক স্রষ্টা, নৈতিক শৃঙ্খলা ও পরকালের ধারণা বারবার এসেছে।',
    content: `Almost every major religion begins with the same three ideas: a single ultimate reality, a moral law binding humans to it, and consequences that outlast this life. The Rig Veda speaks of "Ekam Sat" — one truth called by many names. The Torah opens with a single creator shaping order from chaos. The Qur'an repeats Tawhid — absolute oneness. Even Buddhism, often called non-theistic, insists on a universal moral law (dharma).

The differences appear later, in ritual, law, and community structure. But if you strip the layers away, the earliest human religious impulse looks remarkably uniform: a search for meaning, a moral compass, and hope beyond death. Studying these commonalities has taught me humility. Instead of arguing who is right, I try to understand why every civilization arrived at similar conclusions from opposite ends of the map.`,
    contentBn: `প্রায় প্রতিটি প্রধান ধর্মের সূচনা একই তিনটি ধারণা থেকে — এক পরম সত্তা, নৈতিক আইন এবং পরকালীন ফলাফল। ঋগ্বেদে বলা হয়েছে "একং সৎ" — সত্য এক, ঋষিরা তাঁকে নানা নামে ডাকেন। তোরাহ শুরু হয় এক স্রষ্টার বিশৃঙ্খলা থেকে শৃঙ্খলা সৃষ্টির মাধ্যমে। কোরআনে বারবার এসেছে তাওহিদ — পরম একত্ব। এমনকি বৌদ্ধধর্মও, যাকে অনেক সময় নিরীশ্বরবাদী বলা হয়, সর্বজনীন ধর্ম (dharma)-এ বিশ্বাস করে।

পার্থক্য আসে পরে — আচার, আইন, সম্প্রদায় গঠনে। কিন্তু স্তরগুলো সরিয়ে দেখলে মানুষের প্রাথমিক ধর্মীয় প্রেরণা প্রায় অভিন্ন — অর্থের সন্ধান, নৈতিক দিকনির্দেশনা, মৃত্যুর পরেও আশা। এই মিলগুলো পড়ে আমি নম্রতা শিখেছি — কে সঠিক তা নিয়ে বিতর্ক না করে, বরং কেন ভিন্ন সভ্যতা একই সিদ্ধান্তে পৌঁছেছে তা বোঝার চেষ্টা করি।`,
  },
  {
    id: 2,
    category: 'Religion',
    categoryBn: 'ধর্ম',
    date: '2025-04-02',
    title: 'Similarities and Differences: Islam, Hinduism, Christianity, Buddhism',
    titleBn: 'ইসলাম, হিন্দু, খ্রিস্টান, বৌদ্ধ — মিল ও অমিল',
    excerpt:
      'A side-by-side look at what these four traditions agree on — and where they part ways on God, salvation, and moral duty.',
    excerptBn:
      'চারটি প্রধান ধর্ম ঈশ্বর, মুক্তি ও নৈতিক কর্তব্য নিয়ে কোথায় একমত এবং কোথায় ভিন্ন — একটি তুলনামূলক পাঠ।',
    content: `Similarities:
• All four teach compassion, honesty, charity, and self-discipline as the base of ethics.
• All accept a moral cause-and-effect — Karma in Hinduism/Buddhism, "you reap what you sow" in Christianity, and Amal in Islam.
• All value prayer, meditation, or remembrance as a way to purify the mind.
• Family, community, and helping the poor are sacred duties in each.

Differences:
• Islam and Christianity are strictly monotheistic; Hinduism accepts one reality expressed through many forms; Buddhism generally doesn't focus on a personal creator god.
• Salvation: Islam — submission to Allah; Christianity — faith in Christ; Hinduism — moksha through knowledge/devotion/action; Buddhism — nirvana by ending craving.
• Scripture: Qur'an (revealed once), Bible (compiled over centuries), Vedas + Upanishads (oral tradition), Tripitaka (recorded after the Buddha).

The honest conclusion isn't "one is best" — it's that each tradition answers slightly different questions humans keep asking.`,
    contentBn: `মিল:
• চারটি ধর্মই সহানুভূতি, সততা, দান ও আত্মসংযমকে নৈতিকতার ভিত্তি বলে শিক্ষা দেয়।
• সকলেই কর্মফল স্বীকার করে — হিন্দু/বৌদ্ধ-এ কর্ম, খ্রিস্টানে "যেমন বপন তেমন ফলন", ইসলামে আমল।
• প্রার্থনা, ধ্যান বা জিকির — মন শুদ্ধ করার পথ হিসেবে সকলে গ্রহণ করে।
• পরিবার, সমাজ ও দরিদ্রসেবা প্রত্যেক ধর্মে পবিত্র কর্তব্য।

অমিল:
• ইসলাম ও খ্রিস্টান কঠোরভাবে একেশ্বরবাদী; হিন্দুধর্ম এক সত্তার বহু রূপ মানে; বৌদ্ধধর্ম সাধারণত ব্যক্তিগত সৃষ্টিকর্তার ওপর জোর দেয় না।
• মুক্তি: ইসলাম — আল্লাহর কাছে আত্মসমর্পণ; খ্রিস্টান — যিশুতে বিশ্বাস; হিন্দু — জ্ঞান/ভক্তি/কর্মের মাধ্যমে মোক্ষ; বৌদ্ধ — তৃষ্ণা নিবারণে নির্বাণ।
• গ্রন্থ: কোরআন (একবারে অবতীর্ণ), বাইবেল (শতাব্দী ধরে সংকলিত), বেদ/উপনিষদ (মৌখিক ঐতিহ্য), ত্রিপিটক (বুদ্ধের পরে সংগৃহীত)।

সৎ উপসংহার হলো — "কোনটি শ্রেষ্ঠ" নয়, বরং প্রতিটি ধর্ম মানুষের ভিন্ন ভিন্ন প্রশ্নের ভিন্ন ভিন্ন উত্তর দেয়।`,
  },
  {
    id: 3,
    category: 'Thoughts',
    categoryBn: 'চিন্তা',
    date: '2025-03-10',
    title: 'Why I Build for Bangladesh First',
    titleBn: 'কেন আমি প্রথমে বাংলাদেশের জন্য তৈরি করি',
    excerpt:
      'From BOBDO to Chor Koi — the projects I care about most solve problems my own neighbours face every day.',
    excerptBn:
      'BOBDO থেকে Chor Koi — যে প্রজেক্টগুলো আমার সবচেয়ে প্রিয়, সেগুলো আমার প্রতিবেশীদের প্রতিদিনের সমস্যার সমাধান করে।',
    content: `A blood request at 2 AM. A student in a village who can't afford coaching fees. A citizen who wants to report corruption but is afraid of being identified. These aren't hypothetical user personas from a Silicon Valley pitch deck — they are people I know.

When I sit down to code, I think about them first. Zero-recurring-cost architecture isn't a buzzword; it's the reason a small NGO can actually keep its site online. Bangla-first UI isn't a nice-to-have; it's what makes an app usable for someone who never studied English past class five. Building for Bangladesh first has forced me to become a better engineer — every millisecond of load time, every megabyte of data, every extra tap matters.`,
    contentBn: `রাত ২টায় রক্তের অনুরোধ। গ্রামের একজন শিক্ষার্থী যে কোচিং ফি দিতে পারে না। একজন নাগরিক যে দুর্নীতির অভিযোগ করতে চায় কিন্তু পরিচয় প্রকাশের ভয় পায়। এরা কোনো সিলিকন ভ্যালি পিচ ডেকের ইউজার পার্সোনা নয় — এরা আমার চেনা মানুষ।

কোড লিখতে বসলে আমি প্রথমেই তাদের কথা ভাবি। শূন্য রেকারিং কস্ট আর্কিটেকচার কোনো ফ্যাশন শব্দ নয় — এই কারণেই একটি ছোট এনজিও তাদের সাইট চালু রাখতে পারে। বাংলা-প্রথম UI বিলাসিতা নয় — এটাই এমন একজনকে অ্যাপটি ব্যবহারের সুযোগ দেয় যিনি পঞ্চম শ্রেণির পরে ইংরেজি পড়েননি। বাংলাদেশের জন্য প্রথমে তৈরি করাই আমাকে আরও ভালো ইঞ্জিনিয়ার বানিয়েছে — প্রতিটি মিলিসেকেন্ড, প্রতিটি মেগাবাইট, প্রতিটি অতিরিক্ত ট্যাপ গুরুত্বপূর্ণ।`,
  },
  {
    id: 4,
    category: 'Development',
    categoryBn: 'ডেভেলপমেন্ট',
    date: '2025-02-01',
    title: 'Zero Recurring Cost Architecture, Explained',
    titleBn: 'জিরো রেকারিং কস্ট আর্কিটেকচার',
    excerpt:
      'How I ship full-featured web apps that survive on free tiers — Firebase, Netlify, manual payments and smart UX.',
    excerptBn:
      'কীভাবে আমি ফুল-ফিচার ওয়েব অ্যাপ চালাই ফ্রি-টিয়ারে — Firebase, Netlify, ম্যানুয়াল পেমেন্ট এবং স্মার্ট UX দিয়ে।',
    content: `Most small businesses in Bangladesh can afford a one-time build cost but not a monthly SaaS bill in dollars. The solution isn't cheaper hosting — it's designing the whole stack to fit inside free tiers on purpose.

Static hosting on Netlify. Firestore for data with denormalized reads. Client-side image compression before upload. Manual payment verification instead of paid gateways. Aggressive caching. A PWA install prompt so the "app" runs without repeat downloads. Individually these are boring choices; together they make the difference between a project that lives for years and one that dies the month the founder forgets to pay a bill.`,
    contentBn: `বাংলাদেশের বেশির ভাগ ছোট ব্যবসা এককালীন বিল্ড খরচ দিতে পারে, কিন্তু ডলারে মাসিক SaaS বিল দিতে পারে না। সমাধান সস্তা হোস্টিং নয় — পুরো স্ট্যাকটাই ফ্রি-টিয়ারে ফিট করার জন্য ইচ্ছাকৃতভাবে ডিজাইন করা।

Netlify-এ স্ট্যাটিক হোস্টিং। Firestore-এ ডিনরমালাইজড রিড। আপলোডের আগে ক্লায়েন্ট-সাইড ইমেজ কম্প্রেশন। পেইড গেটওয়ের বদলে ম্যানুয়াল পেমেন্ট ভেরিফিকেশন। আক্রমণাত্মক ক্যাশিং। PWA ইনস্টল প্রম্পট যাতে "অ্যাপ" বারবার ডাউনলোড ছাড়াই চলে। এককভাবে এগুলো সাদামাটা সিদ্ধান্ত; একসাথে এরাই ঠিক করে দেয় প্রজেক্টটি বছরের পর বছর বাঁচবে, নাকি মালিক এক মাস বিল দিতে ভুলে গেলেই মারা যাবে।`,
  },
  {
    id: 5,
    category: 'Life',
    categoryBn: 'জীবন',
    date: '2024-12-18',
    title: 'What HSC 2025 Taught Me About Discipline',
    titleBn: 'HSC ২০২৫ আমাকে যা শিখিয়েছে',
    excerpt:
      'Balancing exam prep, freelance projects, and a portfolio site — and what I would tell my younger self.',
    excerptBn:
      'পরীক্ষার প্রস্তুতি, ফ্রিল্যান্স প্রজেক্ট এবং পোর্টফোলিও সাইট — এক সাথে সামলে যা শিখলাম।',
    content: `The most useful skill from HSC year wasn't calculus. It was learning to protect two or three deep-work hours a day, no matter what else was on fire. When you can't do everything, you must pick the one thing that only you can do — and defend that time ruthlessly.`,
    contentBn: `HSC বছরের সবচেয়ে কাজের দক্ষতা ছিল ক্যালকুলাস নয় — ছিল দিনের দুই-তিন ঘণ্টা গভীর কাজের সময় রক্ষা করা, বাকি সব ঝামেলার মাঝেও। যখন সবকিছু করা সম্ভব নয়, তখন এমন একটি কাজ বেছে নিতে হয় যা কেবল আপনিই করতে পারেন — এবং সেই সময়টুকু কঠোরভাবে পাহারা দিতে হয়।`,
  },
];
