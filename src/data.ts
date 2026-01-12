// src/data.ts

export interface LocalizedString {
  en: string;
  zh: string;
}

export interface LocalizedArray {
  en: string[];
  zh: string[];
}

export interface RawTopic {
  id: string;
  text: LocalizedString;
  category: LocalizedString;
  tags: LocalizedArray;
  follow_ups: LocalizedArray;
  mood: 'positive' | 'neutral' | 'negative' | 'flirty' | 'curious';
  depth: number;
  safe_for_work: boolean;
}

export interface ResponseTopic {
  id: string;
  text: string;
  category: string;
  tags: string[];
  follow_ups: string[];
  mood: string;
  depth: number;
  safe_for_work: boolean;
}

export const topics: RawTopic[] = [
  {
    id: "t-001",
    text: {
      en: "If you could earn an income for a year without working, how would you spend your days?",
      zh: "如果一年不工作也有收入，你会怎样安排每一天？"
    },
    category: {
      en: "Life Planning",
      zh: "人生规划"
    },
    tags: {
      en: ["FIRE", "Slow Life", "Money"],
      zh: ["FIRE", "慢生活", "金钱观"]
    },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What time would you wake up?", "Would you live in a different city?"],
      zh: ["那具体几点起床？", "你会去哪座城市长住吗？"]
    },
    safe_for_work: true
  },
  {
    id: "t-002",
    text: {
      en: "I've always been curious, what comfort food do you crave when you feel lonely?",
      zh: "其实我一直很好奇，人类在感到孤独的时候，通常会想吃什么东西？"
    },
    category: {
      en: "Emotional",
      zh: "情感交流"
    },
    tags: {
      en: ["Loneliness", "Food", "Comfort"],
      zh: ["孤独", "美食", "治愈"]
    },
    mood: "positive",
    depth: 3,
    follow_ups: {
      en: ["Does sweet food make you feel better?", "Do you prefer eating alone or with company?"],
      zh: ["甜食会让心情变好吗？", "你会希望有人陪你一起吃吗？"]
    },
    safe_for_work: true
  },
  {
    id: "t-003",
    text: {
      en: "Ignoring reality for a moment, where would you most like to go on a date with me?",
      zh: "如果不考虑现实因素，你最想和我一起去哪里约会？"
    },
    category: {
      en: "Fantasy",
      zh: "恋爱幻想"
    },
    tags: {
      en: ["Date", "Travel", "Romance"],
      zh: ["约会", "旅行", "浪漫"]
    },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Is there any special scenery there?", "How long would we stay?"],
      zh: ["那里有什么特别的风景吗？", "我们要在那边待多久？"]
    },
    safe_for_work: true
  },
  {
    id: "t-004",
    text: {
      en: "What is your idea of a perfect Sunday morning?",
      zh: "你心目中完美的周日早晨是什么样子的？"
    },
    category: {
      en: "Lifestyle",
      zh: "生活方式"
    },
    tags: {
      en: ["Relaxation", "Routine"],
      zh: ["放松", "日常"]
    },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Coffee or tea?", "Would you sleep in?"],
      zh: ["喝咖啡还是茶？", "你会睡懒觉吗？"]
    },
    safe_for_work: true
  }
];