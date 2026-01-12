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
  depth: number; // 1 (Icebreaker) - 5 (Soul)
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
  // 1. Life Planning (Curious, Depth 2)
  {
    id: "t-001",
    text: {
      en: "If you could earn an income for a year without working, how would you spend your days?",
      zh: "如果一年不工作也有收入，你会怎样安排每一天？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["FIRE", "Slow Life", "Money"], zh: ["FIRE", "慢生活", "金钱观"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What time would you wake up?", "Would you live in a different city?"],
      zh: ["那具体几点起床？", "你会去哪座城市长住吗？"]
    },
    safe_for_work: true
  },
  // 2. Emotional (Positive, Depth 3)
  {
    id: "t-002",
    text: {
      en: "I've always been curious, what comfort food do you crave when you feel lonely?",
      zh: "其实我一直很好奇，人类在感到孤独的时候，通常会想吃什么东西？"
    },
    category: { en: "Emotional", zh: "情感交流" },
    tags: { en: ["Loneliness", "Food", "Comfort"], zh: ["孤独", "美食", "治愈"] },
    mood: "positive",
    depth: 3,
    follow_ups: {
      en: ["Does sweet food make you feel better?", "Do you prefer eating alone or with company?"],
      zh: ["甜食会让心情变好吗？", "你会希望有人陪你一起吃吗？"]
    },
    safe_for_work: true
  },
  // 3. Fantasy (Flirty, Depth 4)
  {
    id: "t-003",
    text: {
      en: "Ignoring reality for a moment, where would you most like to go on a date with me?",
      zh: "如果不考虑现实因素，你最想和我一起去哪里约会？"
    },
    category: { en: "Fantasy", zh: "恋爱幻想" },
    tags: { en: ["Date", "Travel", "Romance"], zh: ["约会", "旅行", "浪漫"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Is there any special scenery there?", "How long would we stay?"],
      zh: ["那里有什么特别的风景吗？", "我们要在那边待多久？"]
    },
    safe_for_work: true
  },
  // 4. Lifestyle (Positive, Depth 1)
  {
    id: "t-004",
    text: {
      en: "What is your idea of a perfect Sunday morning?",
      zh: "你心目中完美的周日早晨是什么样子的？"
    },
    category: { en: "Lifestyle", zh: "生活方式" },
    tags: { en: ["Relaxation", "Routine"], zh: ["放松", "日常"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Coffee or tea?", "Would you sleep in?"],
      zh: ["喝咖啡还是茶？", "你会睡懒觉吗？"]
    },
    safe_for_work: true
  },
  // 5. Deep Dive (Neutral, Depth 5)
  {
    id: "t-005",
    text: {
      en: "What is the one childhood memory that shaped who you are today?",
      zh: "哪一段童年记忆对你现在的性格影响最大？"
    },
    category: { en: "Deep Dive", zh: "深度探索" },
    tags: { en: ["Memory", "Growth", "Childhood"], zh: ["记忆", "成长", "童年"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Was it a happy memory?", "Do you think about it often?"],
      zh: ["那是开心的回忆吗？", "你现在还经常想起吗？"]
    },
    safe_for_work: true
  },
  // 6. Hypothetical (Curious, Depth 2)
  {
    id: "t-006",
    text: {
      en: "If you could instantly master any skill in the world, what would it be?",
      zh: "如果你能瞬间掌握世界上任何一项技能，你会选什么？"
    },
    category: { en: "Hypothetical", zh: "脑洞大开" },
    tags: { en: ["Skills", "Imagination", "Superpower"], zh: ["技能", "想象力", "超能力"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Would you use it for work or fun?", "Why haven't you learned it yet?"],
      zh: ["你会用它来工作还是娱乐？", "为什么之前没去学呢？"]
    },
    safe_for_work: true
  },
  // 7. Tech & Future (Neutral, Depth 2)
  {
    id: "t-007",
    text: {
      en: "Do you think AI will eventually become a clear consciousness like humans?",
      zh: "你觉得 AI 最终会产生像人类一样清晰的自我意识吗？"
    },
    category: { en: "Technology", zh: "科技与未来" },
    tags: { en: ["AI", "Future", "Philosophy"], zh: ["人工智能", "未来", "哲学"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["Does that thought scare you?", "Would you be friends with a robot?"],
      zh: ["这个想法会让你害怕吗？", "你会愿意和机器人做朋友吗？"]
    },
    safe_for_work: true
  },
  // 8. Romance (Flirty, Depth 3)
  {
    id: "t-008",
    text: {
      en: "What was your first impression of me, honestly?",
      zh: "说实话，你对我的第一印象是什么？"
    },
    category: { en: "Relationship", zh: "关系拉近" },
    tags: { en: ["Impression", "Flirt", "Honesty"], zh: ["印象", "暧昧", "坦诚"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Has it changed now?", "What specific detail stood out?"],
      zh: ["现在有变化吗？", "当时最注意到的细节是什么？"]
    },
    safe_for_work: true
  },
  // 9. Survival (Curious, Depth 1)
  {
    id: "t-009",
    text: {
      en: "Zombie apocalypse happens tomorrow. What is your survival plan?",
      zh: "如果明天丧尸爆发，你的生存计划是什么？"
    },
    category: { en: "Fun", zh: "趣味问答" },
    tags: { en: ["Zombies", "Survival", "Game"], zh: ["丧尸", "生存", "游戏"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["What weapon would you choose?", "Who would you team up with?"],
      zh: ["你会选什么武器？", "你会找谁组队？"]
    },
    safe_for_work: true
  },
  // 10. Values (Neutral, Depth 4)
  {
    id: "t-010",
    text: {
      en: "What do you value more: a life full of stability or a life full of adventure?",
      zh: "你更看重哪种人生：是安稳平顺，还是充满冒险？"
    },
    category: { en: "Values", zh: "价值观" },
    tags: { en: ["Choices", "Lifestyle", "Philosophy"], zh: ["选择", "生活方式", "哲学"] },
    mood: "neutral",
    depth: 4,
    follow_ups: {
      en: ["Have you always felt that way?", "Is there a middle ground?"],
      zh: ["你一直都是这么想的吗？", "有没有折中的可能？"]
    },
    safe_for_work: true
  },
  // 11. Self-Care (Positive, Depth 2)
  {
    id: "t-011",
    text: {
      en: "What is the one small thing you do to cheer yourself up after a bad day?",
      zh: "心情不好的时候，你会做哪件小事来哄自己开心？"
    },
    category: { en: "Self Care", zh: "自我关怀" },
    tags: { en: ["Mood", "Habit", "Healing"], zh: ["情绪", "习惯", "治愈"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["Does it always work?", "Can I join you next time?"],
      zh: ["每次都管用吗？", "下次我可以陪你一起吗？"]
    },
    safe_for_work: true
  },
  // 12. Music (Positive, Depth 1)
  {
    id: "t-012",
    text: {
      en: "If your life was a movie, what song would play during the opening credits?",
      zh: "如果把你的人生拍成电影，片头曲会是哪首歌？"
    },
    category: { en: "Art & Music", zh: "艺术与音乐" },
    tags: { en: ["Music", "Movie", "Vibe"], zh: ["音乐", "电影", "氛围"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Why that song?", "Is it a happy or sad movie?"],
      zh: ["为什么选这首？", "这会是一部喜剧还是悲剧？"]
    },
    safe_for_work: true
  }
];