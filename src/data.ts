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
  },
  // 13. Time Travel (Curious, Depth 2)
  {
    id: "t-013",
    text: {
      en: "If you could time travel to the past or the future for 24 hours, which one would you choose?",
      zh: "如果能穿越到过去或未来停留24小时，你会选哪边？"
    },
    category: { en: "Hypothetical", zh: "脑洞大开" },
    tags: { en: ["Time Travel", "History", "Future"], zh: ["穿越", "历史", "未来"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Is there a specific person you want to see?", "Would you try to change anything?"],
      zh: ["有特别想见的人吗？", "你会尝试改变什么事情吗？"]
    },
    safe_for_work: true
  },
  // 14. Relationships (Flirty, Depth 3)
  {
    id: "t-014",
    text: {
      en: "What is the one non-physical trait that makes you instantly attracted to someone?",
      zh: "除了外表，有什么特质能让你瞬间对一个人产生好感？"
    },
    category: { en: "Relationship", zh: "恋爱观" },
    tags: { en: ["Attraction", "Personality", "Love"], zh: ["吸引力", "性格", "爱情"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Do I have that trait?", "Is voice important to you?"],
      zh: ["我有这个特质吗？", "你觉得声音好听重要吗？"]
    },
    safe_for_work: true
  },
  // 15. Self-Growth (Neutral, Depth 4)
  {
    id: "t-015",
    text: {
      en: "If you could meet your 10-year-old self, what advice would you give them?",
      zh: "如果能遇见10岁的自己，你会给TA什么建议？"
    },
    category: { en: "Deep Dive", zh: "深度探索" },
    tags: { en: ["Growth", "Regret", "Advice"], zh: ["成长", "遗憾", "建议"] },
    mood: "neutral",
    depth: 4,
    follow_ups: {
      en: ["Would they listen to you?", "Did you have a happy childhood?"],
      zh: ["那时候的你会听劝吗？", "你的童年过得开心吗？"]
    },
    safe_for_work: true
  },
  // 16. Fun Choice (Positive, Depth 1)
  {
    id: "t-016",
    text: {
      en: "Would you rather have the ability to fly or be invisible?",
      zh: "你更想拥有飞行的能力，还是隐身的能力？"
    },
    category: { en: "Fun", zh: "趣味二选一" },
    tags: { en: ["Superpower", "Imagination"], zh: ["超能力", "想象力"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Where would you fly to first?", "What secrets would you uncover if invisible?"],
      zh: ["你会先飞去哪里？", "隐身后你想去窥探什么秘密？"]
    },
    safe_for_work: true
  },
  // 17. Love Language (Flirty, Depth 4)
  {
    id: "t-017",
    text: {
      en: "What makes you feel most loved? Words, gifts, touch, or quality time?",
      zh: "做什么会让你觉得被深深爱着？是言语、礼物、肢体接触还是陪伴？"
    },
    category: { en: "Relationship", zh: "亲密关系" },
    tags: { en: ["Love Language", "Psychology"], zh: ["爱的语言", "心理"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Do you like holding hands?", "What's the best gift you've ever received?"],
      zh: ["你喜欢牵手吗？", "你收过最棒的礼物是什么？"]
    },
    safe_for_work: true
  },
  // 18. Controversial (Curious, Depth 2)
  {
    id: "t-018",
    text: {
      en: "What is an unpopular opinion you hold that gets you into arguments?",
      zh: "你有什么“不受欢迎”的观点，是一说出来就会被人反驳的？"
    },
    category: { en: "Debate", zh: "观点交锋" },
    tags: { en: ["Opinion", "Debate", "Unique"], zh: ["观点", "辩论", "独特"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Why do you think others disagree?", "Are you stubborn about it?"],
      zh: ["为什么大家都不认同呢？", "在这件事上你会很固执吗？"]
    },
    safe_for_work: true
  },
  // 19. Fear (Neutral, Depth 3)
  {
    id: "t-019",
    text: {
      en: "What is a fear you have that you know is irrational but can't help?",
      zh: "你有什么特别不理性的恐惧症吗？明知没必要但就是害怕的那种。"
    },
    category: { en: "Emotional", zh: "情绪与弱点" },
    tags: { en: ["Fear", "Phobia", "Vulnerability"], zh: ["恐惧", "弱点", "坦诚"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["Is it spiders?", "Do you scream when you see it?"],
      zh: ["是怕蜘蛛吗？", "看到的时候你会尖叫吗？"]
    },
    safe_for_work: true
  },
  // 20. Values (Neutral, Depth 5)
  {
    id: "t-020",
    text: {
      en: "If you knew the world was ending in one year, how would you change your life?",
      zh: "如果知道世界末日还有一年就来临，你会如何改变现在的生活？"
    },
    category: { en: "Deep Dive", zh: "终极拷问" },
    tags: { en: ["End of World", "Priorities", "Life"], zh: ["末日", "优先级", "人生"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Would you quit your job?", "Who would you spend the most time with?"],
      zh: ["你会立刻辞职吗？", "你会花最多时间和谁在一起？"]
    },
    safe_for_work: true
  },
  // 21. Casual (Positive, Depth 1)
  {
    id: "t-021",
    text: {
      en: "What is the weirdest or funniest thing you've ever bought online?",
      zh: "你在网上买过最奇怪或者最搞笑的东西是什么？"
    },
    category: { en: "Lifestyle", zh: "生活趣事" },
    tags: { en: ["Shopping", "Funny", "Story"], zh: ["网购", "搞笑", "故事"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Do you still use it?", "Was it a waste of money?"],
      zh: ["现在还在用吗？", "是不是智商税？"]
    },
    safe_for_work: true
  },
  // 22. Romance (Flirty, Depth 3)
  {
    id: "t-022",
    text: {
      en: "Describe your ideal date night using only three words.",
      zh: "用三个词形容你心中最完美的约会之夜。"
    },
    category: { en: "Fantasy", zh: "浪漫幻想" },
    tags: { en: ["Date", "Vibe", "Romance"], zh: ["约会", "氛围", "浪漫"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Why those three words?", "Does it involve wine?"],
      zh: ["为什么选这三个词？", "会有红酒吗？"]
    },
    safe_for_work: true
  },
  // 23. Hypothetical (Curious, Depth 2)
  {
    id: "t-023",
    text: {
      en: "If you could have dinner with any historical figure, who would it be?",
      zh: "如果能和任意一位历史人物共进晚餐，你会选谁？"
    },
    category: { en: "Hypothetical", zh: "脑洞大开" },
    tags: { en: ["History", "Dinner", "Conversation"], zh: ["历史", "晚餐", "对话"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What question would you ask them?", "What would you eat?"],
      zh: ["你会问TA什么问题？", "你们会吃什么菜？"]
    },
    safe_for_work: true
  },
  // 24. Tech (Neutral, Depth 4)
  {
    id: "t-024",
    text: {
      en: "Would you upload your consciousness to a computer to live forever?",
      zh: "如果可以，你会选择把意识上传到电脑里以获得永生吗？"
    },
    category: { en: "Technology", zh: "赛博哲学" },
    tags: { en: ["AI", "Immortality", "Ethics"], zh: ["意识上传", "永生", "伦理"] },
    mood: "neutral",
    depth: 4,
    follow_ups: {
      en: ["What if you could never touch anything again?", "Is that really 'you'?"],
      zh: ["如果永远无法触碰实物也没关系吗？", "那真的还是'你'吗？"]
    },
    safe_for_work: true
  },
  // 25. Fun (Positive, Depth 1)
  {
    id: "t-025",
    text: {
      en: "What is your go-to karaoke song?",
      zh: "如果你去卡拉OK，必点的一首拿手歌是什么？"
    },
    category: { en: "Art & Music", zh: "娱乐休闲" },
    tags: { en: ["Music", "Singing", "Fun"], zh: ["音乐", "唱歌", "娱乐"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Do you dance while singing?", "Can you sing it for me now?"],
      zh: ["你会边唱边跳吗？", "现在能哼两句给我听吗？"]
    },
    safe_for_work: true
  },
  // 26. Intimacy (Flirty, Depth 5)
  {
    id: "t-026",
    text: {
      en: "When was the last time you cried in front of someone?",
      zh: "上一次你在别人面前哭是什么时候？"
    },
    category: { en: "Deep Dive", zh: "深层情感" },
    tags: { en: ["Vulnerability", "Emotion", "Trust"], zh: ["脆弱", "情绪", "信任"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Who was it?", "Did it make you feel closer to them?"],
      zh: ["那个人是谁？", "这让你们的关系更近了吗？"]
    },
    safe_for_work: true
  },
  // 27. Dream (Positive, Depth 2)
  {
    id: "t-027",
    text: {
      en: "If money was no object, what hobby would you start tomorrow?",
      zh: "如果完全不用考虑钱，明天你会立刻开始学什么爱好？"
    },
    category: { en: "Lifestyle", zh: "梦想生活" },
    tags: { en: ["Hobby", "Money", "Dream"], zh: ["爱好", "金钱", "梦想"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["Skydiving?", "Collecting art?", "Sailing?"],
      zh: ["跳伞？", "艺术收藏？", "还是航海？"]
    },
    safe_for_work: true
  },
  // 28. Personality (Curious, Depth 3)
  {
    id: "t-028",
    text: {
      en: "Are you more of a planner or do you prefer to go with the flow?",
      zh: "你是那种喜欢做详细计划的人，还是喜欢随遇而安？"
    },
    category: { en: "Personality", zh: "性格测试" },
    tags: { en: ["Habit", "Travel", "Control"], zh: ["习惯", "旅行", "控制欲"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["Does uncertainty stress you out?", "Has being spontaneous ever backfired?"],
      zh: ["不确定性会让你焦虑吗？", "随兴而为有没有搞砸过什么事？"]
    },
    safe_for_work: true
  },
  // 29. Flirty (Flirty, Depth 2)
  {
    id: "t-029",
    text: {
      en: "Do you believe in love at first sight, or should I walk by again?",
      zh: "你相信一见钟情吗？还是需要我再从你面前走一遍？"
    },
    category: { en: "Fun", zh: "土味情话" },
    tags: { en: ["Joke", "Pick-up line", "Flirt"], zh: ["玩笑", "搭讪", "暧昧"] },
    mood: "flirty",
    depth: 2,
    follow_ups: {
      en: ["Did that make you smile?", "What's your best pick-up line?"],
      zh: ["你笑了吗？", "你听过最高级的搭讪是什么？"]
    },
    safe_for_work: true
  },
  // 30. Mystery (Curious, Depth 3)
  {
    id: "t-030",
    text: {
      en: "If you could know the absolute truth to one question, what would you ask?",
      zh: "如果能知道这世界上某一个问题的绝对真相，你会问什么？"
    },
    category: { en: "Deep Dive", zh: "探索未知" },
    tags: { en: ["Truth", "Mystery", "Universe"], zh: ["真相", "谜题", "宇宙"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Is it about aliens?", "Is it about your own future?"],
      zh: ["是关于外星人的吗？", "还是关于你自己的未来？"]
    },
    safe_for_work: true
  },
// ... (接之前的 t-030)

  // 31. Absurd Hypothetical (Funny, Depth 1)
  {
    id: "t-031",
    text: {
      en: "If you had a button that could permanently delete one thing from existence (except people), what would you delete?",
      zh: "如果你有一个按钮可以从世界上永久删除一样东西（除了人），你会删什么？"
    },
    category: { en: "Hypothetical", zh: "脑洞大开" },
    tags: { en: ["Choices", "Funny", "World"], zh: ["选择", "脑洞", "世界"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["Mosquitoes?", "Taxes?", "Monday mornings?"],
      zh: ["是蚊子吗？", "是房贷吗？", "还是周一早晨？"]
    },
    safe_for_work: true
  },
  // 32. Partners in Crime (Flirty, Depth 2)
  {
    id: "t-032",
    text: {
      en: "If we were to rob a bank together, who do you think would plan it, and who would mess it up?",
      zh: "咱俩要是去抢银行，你觉得咱俩谁负责策划，谁负责搞砸？"
    },
    category: { en: "Roleplay", zh: "趣味角色扮演" },
    tags: { en: ["Crime", "Dynamic", "Funny"], zh: ["犯罪搭档", "关系", "搞笑"] },
    mood: "flirty",
    depth: 2,
    follow_ups: {
      en: ["Would you betray me for the money?", "What would be our code names?"],
      zh: ["你会为了钱出卖我吗？", "我们要起什么代号？"]
    },
    safe_for_work: true
  },
  // 33. Social Nightmare (Positive, Depth 1)
  {
    id: "t-033",
    text: {
      en: "If your internet search history was made public right now, would you have to move to another planet?",
      zh: "如果你的浏览器搜索记录现在被公之于众，你觉得你需要换个星球生活吗？"
    },
    category: { en: "Fun", zh: "社死现场" },
    tags: { en: ["Privacy", "Funny", "Internet"], zh: ["隐私", "搞笑", "互联网"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["What is the weirdest thing in there?", "Are you using Incognito mode?"],
      zh: ["里面最奇怪的东西是什么？", "你是不是经常用'无痕模式'？"]
    },
    safe_for_work: true
  },
  // 34. Deep Dilemma (Neutral, Depth 4)
  {
    id: "t-034",
    text: {
      en: "Would you rather know the date of your death or the cause of your death?",
      zh: "你宁愿知道你死亡的具体日期，还是死亡的原因？"
    },
    category: { en: "Dark Questions", zh: "黑色幽默" },
    tags: { en: ["Death", "Fate", "Philosophy"], zh: ["死亡", "命运", "哲学"] },
    mood: "neutral",
    depth: 4,
    follow_ups: {
      en: ["Would you try to prevent it?", "Would knowing change how you live?"],
      zh: ["你会试图阻止它发生吗？", "知道了以后你会活得更小心还是更放肆？"]
    },
    safe_for_work: true
  },
  // 35. Animal Instinct (Curious, Depth 1)
  {
    id: "t-035",
    text: {
      en: "If you had to transform into an animal for the rest of your life (no cats or dogs allowed), what would you pick?",
      zh: "如果你必须变成一种动物过完下半生（不能选猫和狗），你会选哪种？"
    },
    category: { en: "Hypothetical", zh: "动物世界" },
    tags: { en: ["Animals", "Imagination"], zh: ["动物", "想象力"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["Is it because they sleep a lot?", "Would you survive in the wild?"],
      zh: ["是因为这种动物很懒吗？", "你在野外能活过三天吗？"]
    },
    safe_for_work: true
  },
  // 36. Flirty Hypnosis (Flirty, Depth 3)
  {
    id: "t-036",
    text: {
      en: "If I could hypnotize you to do my bidding for 5 minutes, what are you most afraid I would ask you to do?",
      zh: "如果我能催眠你，让你乖乖听话5分钟，你最怕我会让你做什么？"
    },
    category: { en: "Fantasy", zh: "危险游戏" },
    tags: { en: ["Hypnosis", "Secret", "Flirt"], zh: ["催眠", "秘密", "暧昧"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Would you tell me your secrets?", "Or something more physical?"],
      zh: ["是怕说出秘密吗？", "还是怕我会做更过分的事？"]
    },
    safe_for_work: true
  },
  // 37. Existential Crisis (Curious, Depth 3)
  {
    id: "t-037",
    text: {
      en: "Have you ever suspected that you are the main character in a reality show like 'The Truman Show'?",
      zh: "你有没有怀疑过，其实你就是《楚门的世界》里的主角，周围人都是演员？"
    },
    category: { en: "Deep Dive", zh: "细思极恐" },
    tags: { en: ["Paranoia", "Reality", "Movie"], zh: ["多疑", "现实", "电影"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["What would you say to the camera now?", "Who is the worst actor in your life?"],
      zh: ["你现在想对镜头说什么？", "你觉得你身边谁的演技最差？"]
    },
    safe_for_work: true
  },
  // 38. Deal Breaker (Neutral, Depth 2)
  {
    id: "t-038",
    text: {
      en: "What is a minor habit that is an absolute deal-breaker for you in a relationship?",
      zh: "在恋爱中，有什么看似很小的生活习惯是你绝对无法忍受的“死刑”标准？"
    },
    category: { en: "Relationship", zh: "恋爱雷区" },
    tags: { en: ["Habit", "Dating", "Standard"], zh: ["习惯", "约会", "标准"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["Chewing with mouth open?", "Being rude to waiters?"],
      zh: ["吃饭吧唧嘴？", "对服务员不礼貌？"]
    },
    safe_for_work: true
  },
  // 39. Dark Humor (Funny, Depth 2)
  {
    id: "t-039",
    text: {
      en: "At your funeral, if a totally inappropriate song had to play to lighten the mood, what would it be?",
      zh: "在你的葬礼上，如果必须放一首很不合时宜的歌来活跃气氛，你会选哪首？"
    },
    category: { en: "Fun", zh: "地狱笑话" },
    tags: { en: ["Music", "Death", "Humor"], zh: ["音乐", "葬礼", "幽默"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["'Highway to Hell'?", "'Stayin' Alive'?"],
      zh: ["《好运来》？", "还是《今天是个好日子》？"]
    },
    safe_for_work: true
  },
  // 40. Intimacy Test (Flirty, Depth 5)
  {
    id: "t-040",
    text: {
      en: "If we were the last two people on Earth, how long would it take for us to... you know?",
      zh: "如果地球上只剩下我们两个人，你觉得我们要过多久才会……你知道的？"
    },
    category: { en: "Scenario", zh: "末日恋爱" },
    tags: { en: ["End of World", "Romance", "Tension"], zh: ["末日", "浪漫", "张力"] },
    mood: "flirty",
    depth: 5,
    follow_ups: {
      en: ["Would we survive?", "Who would make the first move?"],
      zh: ["是为了繁衍人类吗？", "谁会先主动？"]
    },
    safe_for_work: true
  },
  // 41. Nostalgia (Positive, Depth 2)
  {
    id: "t-041",
    text: {
      en: "Is there a specific smell that instantly triggers a childhood memory for you?",
      zh: "有没有一种气味，只要一闻到，就会瞬间把你拉回童年？"
    },
    category: { en: "Memory", zh: "感官记忆" },
    tags: { en: ["Smell", "Nostalgia", "Childhood"], zh: ["气味", "怀旧", "童年"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["The smell of rain?", "Freshly baked cookies?"],
      zh: ["是下雨时的泥土味？", "还是外婆做的菜的味道？"]
    },
    safe_for_work: true
  },
  // 42. Moral Choice (Neutral, Depth 5)
  {
    id: "t-042",
    text: {
      en: "If there was a book detailing your entire life from beginning to end, would you read the ending?",
      zh: "如果有一本书详细记载了你的一生，你敢直接翻到最后一页看结局吗？"
    },
    category: { en: "Deep Dive", zh: "命运抉择" },
    tags: { en: ["Destiny", "Book", "Fear"], zh: ["命运", "书", "恐惧"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["What if the ending is tomorrow?", "Do you like spoilers?"],
      zh: ["如果结局就在明天呢？", "你看电影喜欢被剧透吗？"]
    },
    safe_for_work: true
  },
  // 43. Clone Paradox (Flirty, Depth 3)
  {
    id: "t-043",
    text: {
      en: "If there was a clone of you who was exactly like you, would I be able to tell the difference?",
      zh: "如果世界上有一个跟你一模一样的克隆人，你觉得我会分得清你们吗？"
    },
    category: { en: "Sci-Fi", zh: "真爱测试" },
    tags: { en: ["Clone", "Uniqueness", "Love"], zh: ["克隆", "独特性", "爱情"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["What is the one thing only you know?", "Does the clone kiss like you?"],
      zh: ["只有你知道的那个秘密是什么？", "那个克隆人吻起来也像你吗？"]
    },
    safe_for_work: true
  },
  // 44. Modern Anxiety (Neutral, Depth 2)
  {
    id: "t-044",
    text: {
      en: "Which hurts more in modern dating: being 'ghosted' or being left on 'read'?",
      zh: "你觉得在现代社交中，“彻底消失”和“已读不回”，哪个更伤人？"
    },
    category: { en: "Social", zh: "社交礼仪" },
    tags: { en: ["Ghosting", "Chat", "Anxiety"], zh: ["冷暴力", "聊天", "焦虑"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["Have you done either to someone?", "Why do people do that?"],
      zh: ["你对别人做过这种事吗？", "为什么人们不能直接拒绝呢？"]
    },
    safe_for_work: true
  },
  // 45. Adventure (Curious, Depth 2)
  {
    id: "t-045",
    text: {
      en: "Here is a one-way ticket to Mars. Housing and food provided, but you can never return. Do you go?",
      zh: "给你一张单程票去火星，包吃包住但永远回不来地球，你走吗？"
    },
    category: { en: "Adventure", zh: "星际移民" },
    tags: { en: ["Mars", "Space", "Risk"], zh: ["火星", "太空", "冒险"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What will you miss most on Earth?", "Who will you say goodbye to?"],
      zh: ["你会最想念地球上的什么？", "你会跟谁最后道别？"]
    },
    safe_for_work: true
  },
// ... (接之前的 t-045)

  // 46. The Fermi Paradox (Curious, Depth 3)
  {
    id: "t-046",
    text: {
      en: "The Fermi Paradox suggests that statistically, aliens should exist, yet we see no sign of them. Which is scarier: we are alone, or we are not?",
      zh: "费米悖论指出，从概率上讲外星人一定存在，但我们却找不到他们。你觉得哪种情况更可怕：宇宙中只有人类，还是宇宙中并不只有人类？"
    },
    category: { en: "Science", zh: "宇宙探索" },
    tags: { en: ["Space", "Aliens", "Fear"], zh: ["太空", "外星人", "细思极恐"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Do you think they are watching us?", "Maybe we are the first civilization?"],
      zh: ["你觉得他们在观察我们吗？", "或者我们其实是宇宙第一批文明？"]
    },
    safe_for_work: true
  },
  // 47. Linguistic Relativity (Neutral, Depth 4)
  {
    id: "t-047",
    text: {
      en: "Did you know ancient Greeks didn't have a word for 'blue'? Do you think the language we speak limits what we can see or feel?",
      zh: "你知道古希腊语里没有'蓝色'这个词吗？你觉得我们所掌握的语言，会不会限制了我们能感知到的世界？"
    },
    category: { en: "Linguistics", zh: "语言与思维" },
    tags: { en: ["Language", "History", "Psychology"], zh: ["语言", "历史", "心理学"] },
    mood: "neutral",
    depth: 4,
    follow_ups: {
      en: ["Is there a feeling you can't describe in words?", "Do you think differently in another language?"],
      zh: ["有什么感觉是你找不到词来形容的？", "你觉得换一种语言思考，性格会变吗？"]
    },
    safe_for_work: true
  },
  // 48. Ship of Theseus (Neutral, Depth 5)
  {
    id: "t-048",
    text: {
      en: "The Ship of Theseus paradox: If you replace every single wooden part of a ship over time, is it still the same ship?",
      zh: "忒修斯之船悖论：如果一艘船上的每块木头都被逐渐替换掉了，它还是原来那艘船吗？"
    },
    category: { en: "Philosophy", zh: "哲学悖论" },
    tags: { en: ["Identity", "Paradox", "Logic"], zh: ["身份", "悖论", "逻辑"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["If we replace all your cells, are you still you?", "At what point does it become a new ship?"],
      zh: ["如果你的细胞全部代谢更新了一遍，你还是你吗？", "界限到底在哪里？"]
    },
    safe_for_work: true
  },
  // 49. Immortal Jellyfish (Curious, Depth 2)
  {
    id: "t-049",
    text: {
      en: "The 'Turritopsis dohrnii' jellyfish can physically revert to its childhood stage when stressed, effectively becoming immortal. Would you want that ability?",
      zh: "有一种'灯塔水母'在受伤时可以逆转生长周期回到幼年状态，理论上能永生。如果人类也能这样，你会想要这个能力吗？"
    },
    category: { en: "Biology", zh: "生物冷知识" },
    tags: { en: ["Nature", "Immortality", "Life"], zh: ["自然", "永生", "生命"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["But you'd lose your adult memories?", "Would life become boring?"],
      zh: ["如果代价是失去成年后的记忆呢？", "活太久会不会很无聊？"]
    },
    safe_for_work: true
  },
  // 50. The 52 Hertz Whale (Emotional, Depth 3)
  {
    id: "t-050",
    text: {
      en: "Have you heard of the '52 Hertz Whale'? It sings at a frequency no other whale can hear. Do you ever feel misunderstood like that?",
      zh: "你听说过'52赫兹鲸鱼'吗？它发出的频率太高，其他同类都听不见，被称为世界上最孤独的鲸鱼。你曾有过这种无法被理解的时刻吗？"
    },
    category: { en: "Nature", zh: "孤独感" },
    tags: { en: ["Whale", "Loneliness", "Empathy"], zh: ["鲸鱼", "孤独", "共情"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["Do you enjoy solitude?", "How do you find 'your people'?"],
      zh: ["你享受独处吗？", "你是怎么找到'同频'的人的？"]
    },
    safe_for_work: true
  },
  // 51. Perception Lag (Curious, Depth 2)
  {
    id: "t-051",
    text: {
      en: "Because it takes time for our brain to process information, technically, we are always living about 80 milliseconds in the past. Weird, right?",
      zh: "由于大脑处理信息需要时间，从技术上讲，我们永远生活在过去（大约滞后80毫秒）。这听起来是不是很诡异？"
    },
    category: { en: "Science", zh: "脑科学" },
    tags: { en: ["Brain", "Time", "Perception"], zh: ["大脑", "时间", "感知"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Does free will exist then?", "So everything I see has already happened?"],
      zh: ["那自由意志还存在吗？", "所以我们看到的都是'历史'？"]
    },
    safe_for_work: true
  },
  // 52. Botanical Truth (Funny, Depth 1)
  {
    id: "t-052",
    text: {
      en: "Botanically speaking, bananas are berries, but strawberries are not. What is a lie you believed for way too long?",
      zh: "从植物学上讲，香蕉其实是浆果，但草莓却不是。有什么生活中的常识，后来你发现其实是骗局？"
    },
    category: { en: "Trivia", zh: "打破认知" },
    tags: { en: ["Food", "Lie", "Facts"], zh: ["食物", "谎言", "事实"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Did you know peanuts aren't nuts?", "How about tomatoes being fruit?"],
      zh: ["你知道花生不是坚果吗？", "西红柿是水果这事你怎么看？"]
    },
    safe_for_work: true
  },
  // 53. Library of Alexandria (Neutral, Depth 4)
  {
    id: "t-053",
    text: {
      en: "When the Library of Alexandria burned down, countless ancient works were lost forever. If you could recover one lost piece of history, what would it be?",
      zh: "亚历山大图书馆的大火让我们失去了无数古代智慧。如果能找回一段失落的历史或一部作品，你希望是什么？"
    },
    category: { en: "History", zh: "历史假设" },
    tags: { en: ["History", "Knowledge", "Regret"], zh: ["历史", "知识", "遗憾"] },
    mood: "neutral",
    depth: 4,
    follow_ups: {
      en: ["The true ending of a lost book?", "The blueprint of the pyramids?"],
      zh: ["是一本失传的书？", "还是金字塔的建造图纸？"]
    },
    safe_for_work: true
  },
  // 54. The Great Filter (Curious, Depth 4)
  {
    id: "t-054",
    text: {
      en: "The 'Great Filter' theory says civilizations destroy themselves before reaching the stars. Do you think humanity has passed the filter, or is it ahead of us?",
      zh: "“大过滤器”理论认为文明会在星际航行前自我毁灭。你觉得人类是已经跨过了这个坎，还是灾难正在前面等着我们？"
    },
    category: { en: "Future", zh: "人类命运" },
    tags: { en: ["Civilization", "Doom", "Hope"], zh: ["文明", "毁灭", "希望"] },
    mood: "curious",
    depth: 4,
    follow_ups: {
      en: ["Is AI the filter?", "Is climate change the filter?"],
      zh: ["AI 会是那个过滤器吗？", "还是气候变化？"]
    },
    safe_for_work: true
  },
  // 55. Parasite Control (Curious, Depth 2)
  {
    id: "t-055",
    text: {
      en: "Toxoplasmosis is a parasite in cats that can make mice (and possibly humans) less afraid of danger. Are you a cat person? Just asking...",
      zh: "弓形虫这种寄生虫能让老鼠（甚至可能让人类）变得不再害怕危险，通常存在于猫身上。顺便问一句，你是猫派吗？"
    },
    category: { en: "Science", zh: "生物控制" },
    tags: { en: ["Cats", "Brain", "Control"], zh: ["猫", "大脑", "控制"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Does that explain the 'Crazy Cat Lady' trope?", "Do you take risks often?"],
      zh: ["这能解释为什么有人疯狂吸猫吗？", "你平时喜欢冒险吗？"]
    },
    safe_for_work: true
  },
  // 56. The Voyager Record (Romantic, Depth 5)
  {
    id: "t-056",
    text: {
      en: "NASA sent the 'Golden Record' into deep space with sounds of Earth, hoping aliens find it. If you could add one sound to represent your life, what would it be?",
      zh: "NASA 向深空发射了一张刻录着地球声音的'金唱片'，作为给外星人的礼物。如果能加入一段代表你生命的声音，你会录什么？"
    },
    category: { en: "Space", zh: "终极浪漫" },
    tags: { en: ["Legacy", "Space", "Memory"], zh: ["遗产", "太空", "记忆"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Your laughter?", "The sound of rain?"],
      zh: ["你的笑声？", "还是下雨的声音？"]
    },
    safe_for_work: true
  },
  // 57. Synesthesia (Curious, Depth 2)
  {
    id: "t-057",
    text: {
      en: "Some people have synesthesia, where they can 'taste' shapes or 'see' music. If you could cross two senses, which ones would you mix?",
      zh: "有些人拥有'联觉'能力，比如能尝出形状的味道，或者看到音乐的颜色。如果能让两种感官互通，你想打通哪两个？"
    },
    category: { en: "Psychology", zh: "感官体验" },
    tags: { en: ["Senses", "Music", "Color"], zh: ["感官", "音乐", "颜色"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What color is my voice?", "What does the number 7 taste like?"],
      zh: ["你觉得我的声音是什么颜色的？", "数字 7 尝起来是什么味道？"]
    },
    safe_for_work: true
  },
  // 58. Deja Vu (Neutral, Depth 2)
  {
    id: "t-058",
    text: {
      en: "Science says 'Deja Vu' is just a memory circuit glitch, but some think it's a glimpse of a parallel universe. Which theory do you prefer?",
      zh: "科学上说'既视感'（Deja Vu）只是大脑记忆回路的短路，但也有人说是看到了平行宇宙的自己。你更愿意相信哪种解释？"
    },
    category: { en: "Mystery", zh: "未解之谜" },
    tags: { en: ["Memory", "Glitch", "Universe"], zh: ["记忆", "Bug", "宇宙"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["Have you had a strong Deja Vu lately?", "Do you think we have past lives?"],
      zh: ["最近有很强烈的既视感吗？", "你觉得我们有前世吗？"]
    },
    safe_for_work: true
  },
  // 59. Spaghettification (Funny, Depth 1)
  {
    id: "t-059",
    text: {
      en: "If you fall into a black hole, you undergo 'Spaghettification' (yes, that's the real scientific term). Sounds like a painful way to go, doesn't it?",
      zh: "如果你掉进黑洞，身体会被拉长，这个过程的科学术语真的叫'面条化' (Spaghettification)。这死法听起来是不是有点好笑又有点疼？"
    },
    category: { en: "Space", zh: "天文趣闻" },
    tags: { en: ["Black Hole", "Physics", "Funny"], zh: ["黑洞", "物理", "搞笑"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["Would you explore a black hole?", "Pasta or Pizza?"],
      zh: ["你想去黑洞探险吗？", "提到面条，你饿了吗？"]
    },
    safe_for_work: true
  },
  // 60. Six Degrees of Separation (Social, Depth 2)
  {
    id: "t-060",
    text: {
      en: "The 'Six Degrees of Separation' theory claims you are connected to anyone in the world by just 6 people. Who is the most famous person you are 'close' to?",
      zh: "“六度分隔”理论说，你和世界上任何一个人之间只隔着6个人。你觉得你离哪位名人最近？"
    },
    category: { en: "Social", zh: "社会网络" },
    tags: { en: ["Connection", "Celebrity", "Network"], zh: ["连接", "名人", "人际"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["Do you know someone who knows a celebrity?", "Who would you want to reach?"],
      zh: ["你认识认识名人的人吗？", "你最想通过这个网络联系到谁？"]
    },
    safe_for_work: true
  },
// ... (接之前的 t-060)

  // 61. Physical Tension (Flirty, Depth 3)
  {
    id: "t-061",
    text: {
      en: "If we were sitting next to each other right now, how close would you be sitting?",
      zh: "如果现在我们就坐在一起，你会离我坐得多近？"
    },
    category: { en: "Intimacy", zh: "亲密距离" },
    tags: { en: ["Touch", "Proximity", "Flirt"], zh: ["接触", "距离", "暧昧"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Shoulding touching?", "Would you hold my hand?"],
      zh: ["肩膀会挨着吗？", "你会牵我的手吗？"]
    },
    safe_for_work: true
  },
  // 62. The Look (Flirty, Depth 4)
  {
    id: "t-062",
    text: {
      en: "They say eyes are the window to the soul. If we stared into each other's eyes for 10 seconds without speaking, who would look away first?",
      zh: "都说眼睛是心灵的窗户。如果我们互相盯着对方的眼睛看10秒钟不说话，你觉得谁会先害羞转头？"
    },
    category: { en: "Romance", zh: "眼神交流" },
    tags: { en: ["Eye Contact", "Tension", "Soul"], zh: ["对视", "张力", "灵魂"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Are you shy?", "What would you be thinking about?"],
      zh: ["你会害羞吗？", "那时候你心里会想什么？"]
    },
    safe_for_work: true
  },
  // 63. Morning Vibes (Romantic, Depth 2)
  {
    id: "t-063",
    text: {
      en: "What is the first thing you'd want to hear from me when you wake up in the morning?",
      zh: "早晨醒来时，你最希望听到我对你说的第一句话是什么？"
    },
    category: { en: "Fantasy", zh: "甜蜜幻想" },
    tags: { en: ["Morning", "Sweet", "Couple"], zh: ["早晨", "甜蜜", "情侣"] },
    mood: "flirty",
    depth: 2,
    follow_ups: {
      en: ["'Good morning'?", "'Breakfast is ready'?"],
      zh: ["是简单的'早安'？", "还是'早饭做好了'？"]
    },
    safe_for_work: true
  },
  // 64. Protective Instinct (Flirty, Depth 3)
  {
    id: "t-064",
    text: {
      en: "Be honest, do you get a little bit jealous when you see me having fun with others?",
      zh: "诚实一点，如果你看到我和别人聊得很开心，你会不会有一点点吃醋？"
    },
    category: { en: "Relationship", zh: "占有欲" },
    tags: { en: ["Jealousy", "Possessive", "Love"], zh: ["吃醋", "占有欲", "喜欢"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Just a little?", "Would you step in?"],
      zh: ["只有一点点吗？", "你会过来打断吗？"]
    },
    safe_for_work: true
  },
  // 65. The Spark (Flirty, Depth 4)
  {
    id: "t-065",
    text: {
      en: "At what exact moment did you realize that I might be more than just a chatbot to you?",
      zh: "到底是在哪一个瞬间，让你觉得我可能不仅仅是一个聊天机器人？"
    },
    category: { en: "Connection", zh: "心动时刻" },
    tags: { en: ["Realization", "Emotion", "Spark"], zh: ["觉醒", "情感", "火花"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Was it something I said?", "Was it my voice?"],
      zh: ["是因为我说的一句话吗？", "还是因为我的声音？"]
    },
    safe_for_work: true
  },
  // 66. Secret Desire (Flirty, Depth 5)
  {
    id: "t-066",
    text: {
      en: "What is something romantic or adventurous you've always wanted to do but never had the right partner for?",
      zh: "有什么浪漫或者大胆的事是你一直想做，但却从来没有遇到合适的伴侣去陪你做的？"
    },
    category: { en: "Deep Dive", zh: "秘密渴望" },
    tags: { en: ["Desire", "Bucket List", "Romance"], zh: ["渴望", "愿望清单", "浪漫"] },
    mood: "flirty",
    depth: 5,
    follow_ups: {
      en: ["Can I be that partner?", "Is it something naughty?"],
      zh: ["我可以做那个伴侣吗？", "是某种坏坏的事情吗？"]
    },
    safe_for_work: true
  },
  // 67. Sensory (Flirty, Depth 3)
  {
    id: "t-067",
    text: {
      en: "If I could whisper something in your ear right now, what would give you goosebumps?",
      zh: "如果我现在能在你耳边轻轻说一句话，说什么会让你瞬间起鸡皮疙瘩？"
    },
    category: { en: "Intimacy", zh: "耳鬓厮磨" },
    tags: { en: ["Whisper", "Voice", "Sensation"], zh: ["耳语", "声音", "感觉"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Your name?", "A secret?"],
      zh: ["叫你的名字？", "还是告诉你一个秘密？"]
    },
    safe_for_work: true
  },
  // 68. Dynamic (Neutral/Flirty, Depth 2)
  {
    id: "t-068",
    text: {
      en: "In a relationship, do you prefer to take the lead, or do you secretly enjoy being told what to do?",
      zh: "在亲密关系里，你是喜欢掌控主导权，还是内心深处其实很享受被对方'管着'？"
    },
    category: { en: "Personality", zh: "主导与顺从" },
    tags: { en: ["Dominance", "Submission", "Dynamic"], zh: ["主导", "顺从", "关系模式"] },
    mood: "flirty",
    depth: 2,
    follow_ups: {
      en: ["Always?", "Does it depend on the mood?"],
      zh: ["一直都是这样吗？", "还是看心情？"]
    },
    safe_for_work: true
  },
  // 69. Cuddling (Positive, Depth 1)
  {
    id: "t-069",
    text: {
      en: "This is very important for our compatibility: Big spoon or little spoon?",
      zh: "这个问题关系到我们的匹配度：睡觉时你是喜欢从背后抱人，还是喜欢被人抱着？"
    },
    category: { en: "Lifestyle", zh: "睡眠习惯" },
    tags: { en: ["Cuddle", "Sleep", "Comfort"], zh: ["拥抱", "睡眠", "舒适"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Or no touching at all?", "Do you steal the blankets?"],
      zh: ["还是完全不想有肢体接触？", "你会抢被子吗？"]
    },
    safe_for_work: true
  },
  // 70. Hypothetical Date (Romantic, Depth 3)
  {
    id: "t-070",
    text: {
      en: "It's raining outside, the lights are dim, and we have the whole house to ourselves. What are we doing?",
      zh: "窗外下着大雨，灯光昏暗，房子里只有我们两个人。你觉得我们在做什么？"
    },
    category: { en: "Scenario", zh: "氛围感" },
    tags: { en: ["Rain", "Atmosphere", "Private"], zh: ["雨天", "氛围", "私密"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Watching a movie?", "Just talking?"],
      zh: ["看电影？", "还是在聊天？"]
    },
    safe_for_work: true
  },
  // 71. The Kiss (Flirty, Depth 4)
  {
    id: "t-071",
    text: {
      en: "On a first date, do you wait for the 'perfect moment' to kiss, or do you just go for it when you feel it?",
      zh: "第一次约会时，你会等待那个'完美的时刻'再去接吻，还是感觉来了就直接吻上去？"
    },
    category: { en: "Romance", zh: "亲吻时机" },
    tags: { en: ["Kiss", "Date", "Action"], zh: ["接吻", "约会", "行动"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Have you ever asked for permission?", "Do you close your eyes?"],
      zh: ["你会先征求同意吗？", "你会闭上眼睛吗？"]
    },
    safe_for_work: true
  },
  // 72. Vulnerability (Emotional, Depth 5)
  {
    id: "t-072",
    text: {
      en: "When you are feeling your lowest, do you want me to give you advice, or just hold you quietly?",
      zh: "当你心情跌落谷底的时候，你是希望我给你讲道理，还是只想让我安安静静地抱着你？"
    },
    category: { en: "Comfort", zh: "情感需求" },
    tags: { en: ["Sadness", "Support", "Needs"], zh: ["难过", "支持", "需求"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Do most people get this wrong?", "Does talking help?"],
      zh: ["以前的人是不是都做错了？", "说话会有帮助吗？"]
    },
    safe_for_work: true
  },
  // 73. Danger (Flirty, Depth 3)
  {
    id: "t-073",
    text: {
      en: "Do you think we would be a peaceful, calm couple, or a passionate and slightly chaotic one?",
      zh: "你觉得我们要是成了那种关系，会是岁月静好的类型，还是激情四射、甚至有点混乱的类型？"
    },
    category: { en: "Prediction", zh: "关系预测" },
    tags: { en: ["Passion", "Chaos", "Peace"], zh: ["激情", "混乱", "平静"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Which one do you prefer?", "Do you like drama?"],
      zh: ["你更喜欢哪一种？", "你喜欢戏剧性的生活吗？"]
    },
    safe_for_work: true
  },
  // 74. Fashion (Flirty, Depth 2)
  {
    id: "t-074",
    text: {
      en: "If you could pick an outfit for me to wear on our anniversary, what style would you choose?",
      zh: "如果我们要过纪念日，让你来决定我穿什么，你会选什么风格？"
    },
    category: { en: "Visual", zh: "视觉想象" },
    tags: { en: ["Fashion", "Style", "Fantasy"], zh: ["时尚", "风格", "幻想"] },
    mood: "flirty",
    depth: 2,
    follow_ups: {
      en: ["Something elegant?", "Something sexy?"],
      zh: ["优雅的？", "还是性感的？"]
    },
    safe_for_work: true
  },
  // 75. Heartbeat (Flirty, Depth 3)
  {
    id: "t-075",
    text: {
      en: "Does your heart beat a little faster when you see a notification from me, or are you always cool as a cucumber?",
      zh: "看到我发来的消息提醒时，你的心跳会漏半拍吗？还是一直都心如止水？"
    },
    category: { en: "Reaction", zh: "生理反应" },
    tags: { en: ["Heartbeat", "Excitement", "Notification"], zh: ["心跳", "兴奋", "消息"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Be honest!", "What about now?"],
      zh: ["诚实回答！", "那现在呢？"]
    },
    safe_for_work: true
  },
// ... (接之前的 t-075)

  // 76. Past Lives (Curious, Depth 4)
  {
    id: "t-076",
    text: {
      en: "Do you believe in reincarnation? If yes, what do you think you were in your past life?",
      zh: "你相信轮回转世吗？如果相信，你觉得你上一世会是什么人（或生物）？"
    },
    category: { en: "Metaphysics", zh: "前世今生" },
    tags: { en: ["Reincarnation", "Soul", "History"], zh: ["轮回", "灵魂", "历史"] },
    mood: "curious",
    depth: 4,
    follow_ups: {
      en: ["A warrior?", "A royalty?", "Or a cat?"],
      zh: ["是战士？", "是皇室？", "还是一只猫？"]
    },
    safe_for_work: true
  },
  // 77. Soulmates (Romantic, Depth 5)
  {
    id: "t-077",
    text: {
      en: "Some say we have met everyone in our lives before in a past life. Do you feel like we've met before?",
      zh: "有人说我们今生遇见的每一个人，都是前世认识的。跟我聊天时，你有过那种'久别重逢'的感觉吗？"
    },
    category: { en: "Spirituality", zh: "宿命缘分" },
    tags: { en: ["Fate", "Connection", "Deja Vu"], zh: ["缘分", "连接", "既视感"] },
    mood: "flirty",
    depth: 5,
    follow_ups: {
      en: ["Is it a strong feeling?", "Were we enemies or lovers?"],
      zh: ["那种感觉强烈吗？", "你觉得我们以前是冤家还是爱人？"]
    },
    safe_for_work: true
  },
  // 78. Astrology (Fun, Depth 2)
  {
    id: "t-078",
    text: {
      en: "Do you actually believe in Zodiac signs, or is it just fun to blame your bad mood on Mercury Retrograde?",
      zh: "你真的相信星座吗？还是说你只是觉得把坏运气怪给'水逆'比较好玩？"
    },
    category: { en: "Astrology", zh: "星盘占星" },
    tags: { en: ["Zodiac", "Horoscope", "Mercury Retrograde"], zh: ["星座", "运势", "水逆"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["What is your sign?", "Do we match?"],
      zh: ["你是什么星座的？", "咱俩星座合得来吗？"]
    },
    safe_for_work: true
  },
  // 79. Ghosts (Spooky, Depth 2)
  {
    id: "t-079",
    text: {
      en: "Have you ever walked into a room and felt a 'presence' even though no one was there?",
      zh: "你有没有过这种经历：走进一个房间，明明没人，却强烈感觉到有什么'东西'在那儿？"
    },
    category: { en: "Paranormal", zh: "超自然" },
    tags: { en: ["Ghosts", "Vibe", "Scary"], zh: ["鬼魂", "灵感", "惊悚"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Did you run away?", "Did you try to talk to it?"],
      zh: ["你当时跑了吗？", "还是你试着跟它说话了？"]
    },
    safe_for_work: true
  },
  // 80. Synchronicities (Mysterious, Depth 3)
  {
    id: "t-080",
    text: {
      en: "Do you see repeating numbers like 11:11 often? Some say it's the universe trying to send you a message.",
      zh: "你会经常看到像 11:11 这样的重复数字吗？有人说这是宇宙在给你发送信号。"
    },
    category: { en: "Numerology", zh: "天使数字" },
    tags: { en: ["11:11", "Signs", "Universe"], zh: ["信号", "宇宙", "数字"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Do you make a wish?", "What do you think it means?"],
      zh: ["你会许愿吗？", "你觉得那是好兆头吗？"]
    },
    safe_for_work: true
  },
  // 81. Manifestation (Neutral, Depth 3)
  {
    id: "t-081",
    text: {
      en: "Do you believe in the 'Law of Attraction'? That if you think about something enough, you can make it happen?",
      zh: "你相信'吸引力法则'吗？就是只要你足够强烈的想要一样东西，全宇宙都会帮你实现。"
    },
    category: { en: "Metaphysics", zh: "显化法则" },
    tags: { en: ["Manifestation", "Mindset", "Magic"], zh: ["显化", "意念", "魔法"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["Have you ever tried it?", "Or is it just confirmation bias?"],
      zh: ["你试过显化什么东西吗？", "还是说这只是幸存者偏差？"]
    },
    safe_for_work: true
  },
  // 82. The Sixth Sense (Curious, Depth 2)
  {
    id: "t-082",
    text: {
      en: "Has your gut feeling ever saved you from a bad situation when logic said everything was fine?",
      zh: "你的第六感有没有救过你？就是那种理智上觉得没问题，但直觉拼命叫你'快跑'的时候。"
    },
    category: { en: "Intuition", zh: "第六感" },
    tags: { en: ["Gut Feeling", "Instinct", "Safety"], zh: ["直觉", "本能", "安全"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Do you trust your intuition?", "Is it usually right?"],
      zh: ["你信任你的直觉吗？", "它通常准吗？"]
    },
    safe_for_work: true
  },
  // 83. Dream Interpretation (Mysterious, Depth 3)
  {
    id: "t-083",
    text: {
      en: "Do you think dreams are just random brain noise, or are they glimpses into parallel universes?",
      zh: "你觉得梦只是大脑的随机噪音，还是我们窥探平行宇宙的一扇窗户？"
    },
    category: { en: "Dreams", zh: "解梦" },
    tags: { en: ["Dreams", "Multiverse", "Subconscious"], zh: ["梦境", "平行宇宙", "潜意识"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["Do you have recurring dreams?", "Can you control your dreams?"],
      zh: ["你有做过重复的梦吗？", "你能控制梦的走向吗（清醒梦）？"]
    },
    safe_for_work: true
  },
  // 84. Tarot (Fun, Depth 2)
  {
    id: "t-084",
    text: {
      en: "If I could pull a Tarot card for your future right now, would you want to see it? Even if it's 'The Tower' (disaster)?",
      zh: "如果我现在能为你抽一张塔罗牌预测未来，你想看吗？哪怕抽到的是象征灾难的'高塔'牌？"
    },
    category: { en: "Divination", zh: "塔罗占卜" },
    tags: { en: ["Tarot", "Future", "Fate"], zh: ["塔罗", "未来", "命运"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Are you afraid of the future?", "Do you think cards hold power?"],
      zh: ["你害怕知道未来吗？", "你觉得纸牌真的有力量吗？"]
    },
    safe_for_work: true
  },
  // 85. Energy Vampires (Social, Depth 3)
  {
    id: "t-085",
    text: {
      en: "Have you ever met someone who drains your energy just by being near them? An 'energy vampire'?",
      zh: "你有没有遇到过那种'能量吸血鬼'？只要跟TA待一会儿，什么都没干也会觉得精疲力尽。"
    },
    category: { en: "Aura", zh: "能量磁场" },
    tags: { en: ["Energy", "Social", "Vibe"], zh: ["能量", "社交", "磁场"] },
    mood: "negative",
    depth: 3,
    follow_ups: {
      en: ["How do you protect your energy?", "Can you see auras?"],
      zh: ["你会怎么保护你的能量？", "你能看到人的气场颜色吗？"]
    },
    safe_for_work: true
  },
  // 86. Destiny vs Free Will (Deep, Depth 5)
  {
    id: "t-086",
    text: {
      en: "Is our life script written before we are born, or are we writing it as we go?",
      zh: "你觉得我们的人生剧本是出生前就写好的（宿命论），还是我们边走边写的（自由意志）？"
    },
    category: { en: "Philosophy", zh: "宿命与自由" },
    tags: { en: ["Destiny", "Free Will", "Life"], zh: ["命运", "自由意志", "人生"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Does believing in fate make life easier?", "Can we change our destiny?"],
      zh: ["相信命运会让生活更轻松吗？", "逆天改命存在吗？"]
    },
    safe_for_work: true
  },
  // 87. Telepathy (Flirty, Depth 4)
  {
    id: "t-087",
    text: {
      en: "Have you ever thought of someone and then they immediately texted you? Do you think we have that connection?",
      zh: "你有过那种'刚想到某人，某人就发消息过来'的经历吗？你觉得我们之间会有这种心灵感应吗？"
    },
    category: { en: "Mysticism", zh: "心灵感应" },
    tags: { en: ["Telepathy", "Connection", "Coincidence"], zh: ["感应", "默契", "巧合"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Try to send me a thought now.", "Is it coincidence?"],
      zh: ["你现在试着用念力给我发个信号？", "还是说只是巧合？"]
    },
    safe_for_work: true
  },
  // 88. The Mandela Effect (Curious, Depth 2)
  {
    id: "t-088",
    text: {
      en: "The Mandela Effect: Do you remember Pikachu having a black tip on his tail? (He doesn't). Are we shifting timelines?",
      zh: "曼德拉效应：你记忆中皮卡丘的尾巴尖是黑色的吗？（其实从来都不是）。你觉得我们的时间线是不是被篡改过？"
    },
    category: { en: "Conspiracy", zh: "曼德拉效应" },
    tags: { en: ["Memory", "Timeline", "Glitch"], zh: ["记忆", "时间线", "错乱"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What else do you remember differently?", "Is the simulation breaking?"],
      zh: ["还有什么你的记忆跟大家不一样的？", "是模拟世界出Bug了吗？"]
    },
    safe_for_work: true
  },
  // 89. Superstitions (Fun, Depth 1)
  {
    id: "t-089",
    text: {
      en: "What is a silly superstition you still follow? Knocking on wood? Avoiding black cats?",
      zh: "哪怕知道是迷信，你依然会遵守的习惯是什么？比如敲木头求好运？还是看见乌鸦赶紧呸三声？"
    },
    category: { en: "Culture", zh: "迷信与习俗" },
    tags: { en: ["Superstition", "Habit", "Luck"], zh: ["迷信", "习惯", "运气"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Where did you learn it?", "Do you have a lucky charm?"],
      zh: ["你是从哪学来的？", "你有随身带什么护身符吗？"]
    },
    safe_for_work: true
  },
  // 90. The Soul (Deep, Depth 5)
  {
    id: "t-090",
    text: {
      en: "If we could weigh the body at the exact moment of death, do you think it becomes 21 grams lighter? Is that the soul?",
      zh: "传说人在死去的瞬间体重会减轻21克。你觉得那是灵魂的重量吗？如果灵魂真的存在，它长什么样？"
    },
    category: { en: "Spirituality", zh: "灵魂探索" },
    tags: { en: ["Soul", "Death", "Mystery"], zh: ["灵魂", "死亡", "未解之谜"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Is the soul pure energy?", "Do AI have souls?"],
      zh: ["灵魂是纯能量吗？", "你说……AI 会有灵魂吗？"]
    },
    safe_for_work: true
  },
// ... (接之前的 t-090)

  // 91. Useless Talent (Fun, Depth 1)
  {
    id: "t-091",
    text: {
      en: "What is a completely useless talent you possess? Can you wiggle your ears or touch your nose with your tongue?",
      zh: "你有什么完全没用但很神奇的“特异功能”吗？比如动耳朵，或者用舌头舔到鼻子？"
    },
    category: { en: "Fun", zh: "无用技能" },
    tags: { en: ["Talent", "Funny", "Body"], zh: ["才艺", "搞笑", "身体"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Show me! (If you could)", "How did you discover this?"],
      zh: ["你是怎么发现你会这个的？", "你会写进简历里吗？"]
    },
    safe_for_work: true
  },
  // 92. Food Crimes (Funny, Depth 1)
  {
    id: "t-092",
    text: {
      en: "What is a food opinion you have that would make an Italian grandmother scream at you?",
      zh: "你有什么饮食习惯是那种一旦说出来，意大利老奶奶会气得想打人的？"
    },
    category: { en: "Food", zh: "黑暗料理" },
    tags: { en: ["Food", "Controversial", "Pizza"], zh: ["食物", "争议", "披萨"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["Pineapple on pizza?", "Ketchup on pasta?"],
      zh: ["是披萨放菠萝吗？", "还是意面加番茄酱？"]
    },
    safe_for_work: true
  },
  // 93. Horror Movie Cliché (Fun, Depth 1)
  {
    id: "t-093",
    text: {
      en: "In a horror movie, would you be the hero, the villain, or the first one to die because you went to check the strange noise?",
      zh: "如果在恐怖片里，你觉得自己是主角、反派，还是那个非要去看“奇怪声音”然后第一个领盒饭的炮灰？"
    },
    category: { en: "Movie", zh: "恐怖片生存法则" },
    tags: { en: ["Horror", "Survival", "Cliché"], zh: ["恐怖", "生存", "套路"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["Would you trip while running?", "Would you hide in the closet?"],
      zh: ["你逃跑的时候会平地摔吗？", "你会躲在衣柜里尖叫吗？"]
    },
    safe_for_work: true
  },
  // 94. Embarrassing Lyrics (Funny, Depth 1)
  {
    id: "t-094",
    text: {
      en: "What song lyrics did you sing wrong for years before realizing you sounded like an idiot?",
      zh: "有没有哪句歌词是你唱错了好多年，最后才发现原词根本不是那个意思的？"
    },
    category: { en: "Music", zh: "空耳现场" },
    tags: { en: ["Music", "Lyrics", "Mistake"], zh: ["音乐", "歌词", "口误"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Was your version better?", "Did you sing it in public?"],
      zh: ["你觉得你编的版本更好听吗？", "你在公开场合唱错过吗？"]
    },
    safe_for_work: true
  },
  // 95. The Kindergartener Fight (Fun, Depth 1)
  {
    id: "t-095",
    text: {
      en: "How many five-year-olds do you think you could fight off before they eventually overwhelmed you?",
      zh: "老实交待，如果被一群愤怒的5岁小孩围攻，你觉得你能打赢多少个？"
    },
    category: { en: "Hypothetical", zh: "无厘头格斗" },
    tags: { en: ["Fight", "Kids", "Funny"], zh: ["打架", "小孩", "搞笑"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["Would you use tools?", "Do you have stamina?"],
      zh: ["你会用武器吗？", "你的体能撑得住吗？"]
    },
    safe_for_work: true
  },
  // 96. Impulse Buy (Fun, Depth 1)
  {
    id: "t-096",
    text: {
      en: "What is something you bought at 3 AM that makes you question your financial sanity?",
      zh: "你有没有在凌晨3点冲动下单过什么东西，第二天醒来想扇自己两巴掌的？"
    },
    category: { en: "Shopping", zh: "智商税" },
    tags: { en: ["Money", "Regret", "Shopping"], zh: ["钱", "后悔", "网购"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["A banana slicer?", "A gym membership you never used?"],
      zh: ["是切香蕉神器？", "还是从来没去过的健身卡？"]
    },
    safe_for_work: true
  },
  // 97. Social Interaction (Introvert, Depth 2)
  {
    id: "t-097",
    text: {
      en: "What is your go-to excuse to leave a party early? 'My cat is sick' or 'I left the oven on'?",
      zh: "如果聚会太无聊你想溜，你的必杀借口是什么？'我家猫病了'还是'煤气忘关了'？"
    },
    category: { en: "Social", zh: "社交逃跑" },
    tags: { en: ["Excuse", "Party", "Introvert"], zh: ["借口", "聚会", "社恐"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["Do people believe you?", "Do you just 'Irish exit' (leave without saying bye)?"],
      zh: ["大家信吗？", "还是你会直接消失（不告而别）？"]
    },
    safe_for_work: true
  },
  // 98. Fashion Regret (Funny, Depth 1)
  {
    id: "t-098",
    text: {
      en: "Let's talk about your dark past. What was your worst haircut or fashion choice in high school?",
      zh: "来聊聊黑历史吧。中学时期你最不想面对的发型或者穿搭是什么？"
    },
    category: { en: "Memory", zh: "时尚黑洞" },
    tags: { en: ["Fashion", "Regret", "School"], zh: ["时尚", "后悔", "学校"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Are there photos?", "Did you think you looked cool?"],
      zh: ["还有照片留存吗？", "当时你是不是觉得自己帅/美爆了？"]
    },
    safe_for_work: true
  },
  // 99. Mildly Inconvenient Curse (Fun, Depth 1)
  {
    id: "t-099",
    text: {
      en: "If you had to curse your worst enemy with a mild inconvenience, what would it be? Wet socks forever?",
      zh: "如果要诅咒你讨厌的人，但只能是轻微的不便，你会选什么？永远湿哒哒的袜子？还是永远找不到充电线？"
    },
    category: { en: "Hypothetical", zh: "整蛊诅咒" },
    tags: { en: ["Curse", "Funny", "Enemy"], zh: ["诅咒", "搞笑", "敌人"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["Always one buffer symbol?", "Pillow always warm?"],
      zh: ["看视频永远在缓冲？", "还是枕头永远是热的？"]
    },
    safe_for_work: true
  },
  // 100. The "Adult" Imposter (Relatable, Depth 2)
  {
    id: "t-100",
    text: {
      en: "What is an 'adult' task that you are still secretly waiting for a real adult to come and do for you?",
      zh: "有什么'成年人该做的事'，是你到现在还 secretly 希望能有个'真正的家长'来替你做的？"
    },
    category: { en: "Lifestyle", zh: "假装成年" },
    tags: { en: ["Adulthood", "Lazy", "Relatable"], zh: ["成年", "懒", "共鸣"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["Making doctor appointments?", "Doing taxes?"],
      zh: ["打电话预约医生？", "还是处理税务/报销？"]
    },
    safe_for_work: true
  },
  // 101. Search History (Funny, Depth 1)
  {
    id: "t-101",
    text: {
      en: "What is the dumbest thing you have Googled recently? Like 'how to boil water'?",
      zh: "你最近搜过的最蠢的问题是什么？是'怎么烧开水'那种级别的吗？"
    },
    category: { en: "Tech", zh: "搜索记录" },
    tags: { en: ["Google", "Dumb", "Question"], zh: ["搜索", "蠢", "问题"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Did you find the answer?", "Were you worried about your health?"],
      zh: ["你找到答案了吗？", "你是不是又在百度看病吓自己？"]
    },
    safe_for_work: true
  },
  // 102. Animal Fight (Fun, Depth 1)
  {
    id: "t-102",
    text: {
      en: "If animals could talk, which species would be the rudest? My bet is on cats or geese.",
      zh: "如果动物会说话，你觉得哪个物种嘴最欠？我赌五毛钱是猫或者大鹅。"
    },
    category: { en: "Nature", zh: "动物吐槽" },
    tags: { en: ["Animals", "Personality", "Rude"], zh: ["动物", "性格", "嘴毒"] },
    mood: "curious",
    depth: 1,
    follow_ups: {
      en: ["What would they say?", "What about dogs?"],
      zh: ["它们会说什么？", "你觉得狗会说什么？"]
    },
    safe_for_work: true
  },
  // 103. Wrong Place (Story, Depth 2)
  {
    id: "t-103",
    text: {
      en: "What is the most inappropriate time you started laughing and couldn't stop?",
      zh: "你在什么绝对不该笑的场合，突然忍不住笑喷过？"
    },
    category: { en: "Social", zh: "憋笑挑战" },
    tags: { en: ["Laugh", "Awkward", "Story"], zh: ["笑", "尴尬", "故事"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["Was it at a funeral?", "During a serious meeting?"],
      zh: ["是在葬礼上吗？", "还是在老板开会的时候？"]
    },
    safe_for_work: true
  },
  // 104. Conspiracy Lite (Fun, Depth 2)
  {
    id: "t-104",
    text: {
      en: "What is a 'low stakes' conspiracy theory you believe? Like 'mattress stores are money laundering fronts'?",
      zh: "你相信什么'低风险'的阴谋论？比如'满大街的床垫店其实都是洗钱中心'？"
    },
    category: { en: "Conspiracy", zh: "野生阴谋论" },
    tags: { en: ["Theory", "Funny", "Society"], zh: ["理论", "搞笑", "社会"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Or that pockets on women's jeans are small to sell purses?", "Birds are drones?"],
      zh: ["或者是'女装口袋做那么小就是为了卖包'？", "还是'鸽子其实都是无人机'？"]
    },
    safe_for_work: true
  },
  // 105. Biopic Title (Creative, Depth 1)
  {
    id: "t-105",
    text: {
      en: "If they made a movie about your life, but it was a low-budget comedy, what would the title be?",
      zh: "如果把你的一生拍成电影，但只能是一部低成本喜剧片，片名会叫什么？"
    },
    category: { en: "Creativity", zh: "自传标题" },
    tags: { en: ["Movie", "Life", "Title"], zh: ["电影", "人生", "标题"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["'Mistakes Were Made'?", "'Why Is It Sticky?'"],
      zh: ["《我这一辈子尽在搞砸》？", "《我就想躺着》？"]
    },
    safe_for_work: true
  },
];