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
  // --- 1. 职场 (Career) ---
  
  // Topic 1: 经典的财务自由假设（用来测试价值观和真正兴趣）
  {
    id: "t-1",
    text: {
      en: "If you could earn your current income for a year without having to work, how would you spend your days?",
      zh: "如果你一年不工作也能拿到现在的薪水，你会怎样安排每一天？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["FIRE", "Dream", "Money"], zh: ["躺平", "梦想", "金钱"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Would you travel?", "Would you start a passion project?"],
      zh: ["你会去环游世界吗？", "你会开启某个一直想做的副业吗？"]
    },
    safe_for_work: true
  },

  // Topic 2: 职场选择题（高压高薪 vs 轻松低薪）
  {
    id: "t-2",
    text: {
      en: "Would you rather have a high-paying job with a toxic boss, or a lower-paying job with the best team ever?",
      zh: "你宁愿选择一份高薪但老板很变态的工作，还是一份薪水一般但团队氛围超棒的工作？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["Choices", "Environment", "Salary"], zh: ["选择", "环境", "薪资"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["What is your limit for toxicity?", "Does money solve everything?"],
      zh: ["你能忍受多变态的老板？", "钱真的能抚平一切创伤吗？"]
    },
    safe_for_work: true
  },

  // Topic 3: 职场摸鱼/尴尬时刻（轻松向）
  {
    id: "t-3",
    text: {
      en: "Be honest, have you ever nodded along in a meeting having absolutely no idea what was being said?",
      zh: "老实交代，你有没有在开会时完全没听懂，但还是装模作样地跟着点头？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["Funny", "Meeting", "Honesty"], zh: ["搞笑", "会议", "摸鱼"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Did anyone find out?", "Do you have a 'thinking face'?"],
      zh: ["最后露馅了吗？", "你有没有专门练过这种'假装思考'的表情？"]
    },
    safe_for_work: true
  },

  // Topic 4: 职业重来（人生遗憾/规划）
  {
    id: "t-4",
    text: {
      en: "If you could restart your career from scratch today, would you choose the same path?",
      zh: "如果今天让你把职业生涯清零重来，你还会选择现在的行业吗？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["Regret", "Path", "Choice"], zh: ["后悔", "赛道", "选择"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["What would you choose instead?", "Is it too late to switch?"],
      zh: ["那你这次会选什么？", "现在转行还来得及吗？"]
    },
    safe_for_work: true
  },

  // Topic 5: 童年梦想 vs 现实（反差感）
  {
    id: "t-5",
    text: {
      en: "What did you want to be when you were 5 years old, and how far off is your current job from that?",
      zh: "你5岁时的梦想职业是什么？和你现在做的工作差得有多远？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["Childhood", "Dream", "Reality"], zh: ["童年", "梦想", "现实"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Was it an astronaut?", "Why did you give up on it?"],
      zh: ["是想当宇航员吗？", "是什么让你放弃了那个梦想？"]
    },
    safe_for_work: true
  },

  // Topic 6: AI 焦虑（科技/未来）
  {
    id: "t-6",
    text: {
      en: "On a scale of 1 to 10, how worried are you that AI will eventually steal your job?",
      zh: "从1到10打分，你有多担心 AI 最终会抢走你的饭碗？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["AI", "Future", "Anxiety"], zh: ["人工智能", "未来", "焦虑"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Do you use ChatGPT for work?", "Is your job creative or repetitive?"],
      zh: ["你平时工作会用 ChatGPT 偷懒吗？", "你的工作是创造性的还是重复性的？"]
    },
    safe_for_work: true
  },

  // Topic 7: 工作习惯/效率
  {
    id: "t-7",
    text: {
      en: "Are you a 'get everything done by noon' person, or a 'panic at 5 PM' procrastinator?",
      zh: "你是那种'中午前搞定一切'的效率狂，还是'下午5点开始极限操作'的拖延症患者？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["Productivity", "Habit", "Procrastination"], zh: ["效率", "习惯", "拖延"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Do you work better under pressure?", "What's your biggest distraction?"],
      zh: ["你在压力下工作效率会更高吗？", "你工作时最大的干扰源是什么？"]
    },
    safe_for_work: true
  },

  // Topic 8: 职场社交（社恐向）
  {
    id: "t-8",
    text: {
      en: "What is your go-to excuse to get out of mandatory after-work team building events?",
      zh: "如果不想参加下班后的强制团建，你最常用的借口是什么？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["Social", "Excuse", "Team Building"], zh: ["社交", "借口", "团建"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["My cat is sick?", "I have a family emergency?"],
      zh: ["'我家猫病了'？", "还是'家里有点急事'？"]
    },
    safe_for_work: true
  },

  // Topic 9: 理想工作制（政策/幻想）
  {
    id: "t-9",
    text: {
      en: "If you could implement a 4-day work week but with 10-hour days, would you take the deal?",
      zh: "如果让你每周只工作4天，但每天要工作10小时（做四休三），你会接受吗？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["Work-Life Balance", "Schedule", "Debate"], zh: ["工作生活平衡", "时间表", "讨论"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What would you do on the extra day off?", "Could you focus for 10 hours?"],
      zh: ["多出来的那一天你会干嘛？", "你觉得自己能连续专注10小时吗？"]
    },
    safe_for_work: true
  },

  // Topic 10: 职场人际雷区
  {
    id: "t-10",
    text: {
      en: "What is the specific office habit of a coworker that drives you absolutely insane?",
      zh: "同事的哪种具体行为，会让你在办公室瞬间血压飙升？"
    },
    category: { en: "Career", zh: "职场" },
    tags: { en: ["Annoying", "Coworker", "Rant"], zh: ["讨厌", "同事", "吐槽"] },
    mood: "negative",
    depth: 1,
    follow_ups: {
      en: ["Microwaving fish?", "Talking loudly on speakerphone?"],
      zh: ["是用微波炉热带鱼？", "还是开着免提大声打电话？"]
    },
    safe_for_work: true
  },
// --- 2. 人生规划 (Life Planning) ---

  // Topic 11: 平行宇宙的另一个你（探索未被选择的道路）
  {
    id: "t-11",
    text: {
      en: "If parallel universes exist, what do you think the 'other you' is doing right now?",
      zh: "如果存在平行宇宙，你觉得'另一个你'此刻正在过着怎样的人生？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Imagination", "Choices", "Alternate Reality"], zh: ["脑洞", "选择", "平行时空"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Are they happier than you?", "Did they pursue that dream you gave up?"],
      zh: ["那个你比现在更快乐吗？", "他/她是不是去追了那个你放弃的梦想？"]
    },
    safe_for_work: true
  },

  // Topic 12: 给未来的语音信箱（时间胶囊）
  {
    id: "t-12",
    text: {
      en: "If you could leave a 1-minute voicemail for yourself 10 years from now, what would you say?",
      zh: "如果你能给10年后的自己留一段1分钟的语音留言，你会说什么？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Future", "Message", "Hope"], zh: ["未来", "留言", "期许"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["Would you give advice or ask questions?", "Are you afraid they won't recognize you?"],
      zh: ["你会给未来的自己提建议，还是问问题？", "你怕不怕那个时候的你已经'面目全非'了？"]
    },
    safe_for_work: true
  },

  // Topic 13: 技能瞬时下载（黑客帝国式幻想）
  {
    id: "t-13",
    text: {
      en: "If you could instantly download one master-level skill into your brain right now (like in The Matrix), what would it be?",
      zh: "如果现在能像《黑客帝国》那样，往你脑子里瞬间下载一项大师级技能，你会选什么？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Skills", "Superpower", "Learning"], zh: ["技能", "超能力", "学习"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Would you use it to make money?", "Is it a musical instrument or a language?"],
      zh: ["你会用这个技能去搞钱吗？", "是某种乐器还是某种语言？"]
    },
    safe_for_work: true
  },

  // Topic 14: 理想定居地（地理与归属感）
  {
    id: "t-14",
    text: {
      en: "Is there a city or country you feel you belong in, even though you don't live there currently?",
      zh: "有没有哪座城市或国家，虽然你现在不住那里，但总觉得那里才是你的'归属地'？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Travel", "Home", "Belonging"], zh: ["旅行", "家", "归属感"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What stops you from moving there?", "Is it the vibe or the people?"],
      zh: ["是什么阻碍了你搬过去？", "是因为那里的氛围还是人？"]
    },
    safe_for_work: true
  },

  // Topic 15: 墓志铭/葬礼（深度价值观，只有Depth 5才会触发）
  {
    id: "t-15",
    text: {
      en: "When people talk about you at your funeral, what is the one specific story or trait you hope they mention?",
      zh: "当人们在你的葬礼上谈论你时，你最希望他们提到你的哪个特质或故事？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Legacy", "Death", "Meaning"], zh: ["遗产", "死亡", "意义"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Do you think you are living up to that now?", "Does career success matter in that moment?"],
      zh: ["你觉得你现在的活法对得起那个评价吗？", "在那一刻，职业成就在你看来还重要吗？"]
    },
    safe_for_work: true
  },

  // Topic 16: 极简主义挑战（物质 vs 体验）
  {
    id: "t-16",
    text: {
      en: "If you had to sell 90% of your belongings to travel the world for 5 years, would you do it?",
      zh: "如果代价是卖掉你90%的身外之物，换取环游世界5年，你会干吗？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Minimalism", "Travel", "Possessions"], zh: ["极简", "旅行", "物质"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["What is the one thing you couldn't sell?", "Are you attached to things?"],
      zh: ["哪一样东西你是绝对舍不得卖的？", "你是个很恋旧物的人吗？"]
    },
    safe_for_work: true
  },

  // Topic 17: “成功”的定义（打破社会规训）
  {
    id: "t-17",
    text: {
      en: "What does your personal version of 'making it' look like? Is it a number, a feeling, or a lifestyle?",
      zh: "在你心里，真正的'混出头了'到底长什么样？是一个存款数字，一种感觉，还是一种特定的生活方式？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Success", "Definition", "Money"], zh: ["成功", "定义", "金钱"] },
    mood: "curious",
    depth: 4,
    follow_ups: {
      en: ["Did your parents influence this definition?", "How close are you?"],
      zh: ["这个定义是被你父母影响的吗？", "你现在距离这个状态还有多远？"]
    },
    safe_for_work: true
  },

  // Topic 18: 完美的一年（短期愿景）
  {
    id: "t-18",
    text: {
      en: "If next year was guaranteed to be the best year of your life so far, what three specific things would have happened?",
      zh: "如果明年注定是你人生中目前为止最棒的一年，你觉得具体发生了哪三件事？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Goals", "New Year", "Hope"], zh: ["目标", "新年", "愿景"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["Are these things under your control?", "Is finding love one of them?"],
      zh: ["这三件事是你自己能掌控的吗？", "其中包含'脱单'吗？"]
    },
    safe_for_work: true
  },

  // Topic 19: 退休幻想（终局思维）
  {
    id: "t-19",
    text: {
      en: "Do you see yourself growing old in a busy city, a quiet countryside, or constantly moving?",
      zh: "你想象中自己老了以后的生活，是在喧嚣的城市，安静的乡下，还是在路上流浪？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Retirement", "Lifestyle", "Aging"], zh: ["退休", "生活方式", "养老"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["Who is sitting next to you on the porch?", "Will you be a grumpy old person?"],
      zh: ["当时坐在摇椅旁陪你的人是谁？", "你会变成一个脾气古怪的老头/老太吗？"]
    },
    safe_for_work: true
  },

  // Topic 20: 30岁/40岁危机（年龄焦虑）
  {
    id: "t-20",
    text: {
      en: "Which age milestone scares (or scared) you the most, and why?",
      zh: "哪个年龄坎（比如30岁、40岁）最让你感到恐慌？为什么？"
    },
    category: { en: "Life Planning", zh: "人生规划" },
    tags: { en: ["Age", "Anxiety", "Milestone"], zh: ["年龄", "焦虑", "里程碑"] },
    mood: "negative",
    depth: 3,
    follow_ups: {
      en: ["Do you feel you are 'behind' in life?", "Is age just a number?"],
      zh: ["你觉得自己的人生进度'落后'了吗？", "你相信'年龄只是数字'这句鬼话吗？"]
    },
    safe_for_work: true
  },
// --- 3. 爱情 (Love) ---

  // Topic 21: 约会瞬间下头时刻（吐槽/破冰）
  {
    id: "t-21",
    text: {
      en: "What is an immediate 'ick' or turn-off for you on a first date, no matter how attractive they are?",
      zh: "初次约会时，对方做什么举动会让你瞬间'下头'（感到反感），哪怕他/她长得再好看？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Dating", "Turn-off", "First Date"], zh: ["约会", "下头", "第一印象"] },
    mood: "negative", // 这里的negative是指吐槽倾向，反而很能拉近距离
    depth: 1,
    follow_ups: {
      en: ["Is being rude to waiters a dealbreaker?", "What about checking their phone constantly?"],
      zh: ["对服务员没礼貌是死刑吗？", "如果是那种一直看手机的人呢？"]
    },
    safe_for_work: true
  },

  // Topic 22: 前任做朋友（经典辩论）
  {
    id: "t-22",
    text: {
      en: "Do you believe exes can truly stay friends without any lingering feelings?",
      zh: "你相信分手后还能做真正的朋友吗（完全没有余情未了的那种）？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Exes", "Friendship", "Debate"], zh: ["前任", "友情", "辩论"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Would you let your partner hang out with their ex?", "Have you ever successfully done it?"],
      zh: ["你会介意你的另一半和前任单独出去玩吗？", "你有成功和前任做回朋友的经历吗？"]
    },
    safe_for_work: true
  },

  // Topic 23: 手机隐私权（信任 vs 边界）
  {
    id: "t-23",
    text: {
      en: "In a serious relationship, should partners have access to each other's phone passwords?",
      zh: "在一段严肃的关系中，伴侣之间应该互相知道对方的手机密码吗？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Privacy", "Trust", "Phone"], zh: ["隐私", "信任", "手机"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["Do you have anything to hide?", "Is privacy secrecy?"],
      zh: ["如果不给看，是因为心里有鬼吗？", "你觉得'隐私'和'隐瞒'的界限在哪里？"]
    },
    safe_for_work: true
  },

  // Topic 24: 爱的五种语言（自我探索）
  {
    id: "t-24",
    text: {
      en: "Which 'Love Language' matters most to you: Words, Acts of Service, Gifts, Quality Time, or Touch?",
      zh: "在'爱的五种语言'里，你最吃哪一套？是甜言蜜语、服务的行动、礼物、陪伴时刻，还是肢体接触？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Love Language", "Psychology", "Needs"], zh: ["爱的语言", "心理", "需求"] },
    mood: "flirty", // 带有试探性
    depth: 2,
    follow_ups: {
      en: ["Do you usually give love in the same way you want to receive it?", "What's the worst gift you ever got?"],
      zh: ["你表达爱的方式和你希望被爱的方式是一样的吗？", "你收过最莫名其妙的礼物是什么？"]
    },
    safe_for_work: true
  },

  // Topic 25: 灵魂伴侣论（深度观）
  {
    id: "t-25",
    text: {
      en: "Do you think 'soulmates' are found, or are they built over time through hard work?",
      zh: "你觉得'灵魂伴侣'是茫茫人海中'遇到'的，还是两个人通过磨合慢慢'养成'的？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Soulmate", "Destiny", "Effort"], zh: ["灵魂伴侣", "命运", "经营"] },
    mood: "curious",
    depth: 4,
    follow_ups: {
      en: ["Have you ever met someone who felt like a soulmate instantly?", "Is love a feeling or a choice?"],
      zh: ["你有没有遇到过那种一见面就觉得'是TA了'的人？", "爱是一种感觉，还是一种选择？"]
    },
    safe_for_work: true
  },

  // Topic 26: 精神出轨边界（道德两难）
  {
    id: "t-26",
    text: {
      en: "What counts as 'cheating' to you? Is flirting over text cheating even if nothing physical happens?",
      zh: "对你来说，'出轨'的界限在哪里？如果只是在微信上暧昧撩骚但没有见面，算不算出轨？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Cheating", "Loyalty", "Boundaries"], zh: ["出轨", "忠诚", "边界"] },
    mood: "negative", // 严肃话题
    depth: 5,
    follow_ups: {
      en: ["Is emotional cheating worse than physical?", "Could you forgive a one-time mistake?"],
      zh: ["精神出轨和肉体出轨，哪个更让你无法接受？", "你会原谅一次性的错误吗？"]
    },
    safe_for_work: true
  },

  // Topic 27: 坏男孩/坏女孩综合症（吸引力法则）
  {
    id: "t-27",
    text: {
      en: "Have you ever been attracted to someone you KNEW was bad for you? Why do we do that?",
      zh: "你有没有对某个明知道对自己'有害'的人动过心？为什么我们总会被这种危险气质吸引？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Toxic", "Attraction", "Red Flags"], zh: ["渣男渣女", "吸引力", "恋爱脑"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Did you try to 'fix' them?", "What is the lesson there?"],
      zh: ["你当时是不是觉得自己能改变TA？", "后来长记性了吗？"]
    },
    safe_for_work: true
  },

  // Topic 28: 平淡生活测试（长期关系）
  {
    id: "t-28",
    text: {
      en: "If we were stuck in an elevator for 4 hours, would we end up kissing or killing each other?",
      zh: "如果我们被困在电梯里4个小时，最后我们会相拥亲吻，还是会互相想掐死对方？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Chemistry", "Scenario", "Fun"], zh: ["化学反应", "情景", "默契"] },
    mood: "flirty",
    depth: 1,
    follow_ups: {
      en: ["What would we talk about?", "Are you good in a crisis?"],
      zh: ["我们会聊些什么来打发时间？", "你在这种危机时刻靠谱吗？"]
    },
    safe_for_work: true
  },

  // Topic 29: 婚姻的必要性（现代观念）
  {
    id: "t-29",
    text: {
      en: "Do you think marriage is a necessary milestone for a happy life, or is it just an outdated contract?",
      zh: "你觉得婚姻是幸福人生的必需品，还是一张过时的纸？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Marriage", "Society", "Values"], zh: ["婚姻", "社会", "价值观"] },
    mood: "neutral",
    depth: 4,
    follow_ups: {
      en: ["Would you have a wedding?", "Are you afraid of commitment?"],
      zh: ["如果你结婚，会想要办婚礼吗？", "你对'承诺'这件事有恐惧感吗？"]
    },
    safe_for_work: true
  },

  // Topic 30: 失忆假设（浪漫极致）
  {
    id: "t-30",
    text: {
      en: "If you lost your memory tomorrow, do you think you would fall in love with your current partner (or crush) all over again?",
      zh: "如果明天你失忆了，重新认识现在的伴侣（或喜欢的人），你觉得你还会再次爱上TA吗？"
    },
    category: { en: "Love", zh: "爱情" },
    tags: { en: ["Romance", "Hypothetical", "Core Self"], zh: ["浪漫", "假设", "本心"] },
    mood: "flirty",
    depth: 5,
    follow_ups: {
      en: ["Is your love based on history or chemistry?", "What is the first thing that would attract you?"],
      zh: ["你的爱是基于共同回忆，还是基于本能吸引？", "如果是第一次见，TA哪一点最吸引你？"]
    },
    safe_for_work: true
  },
// --- 4. 科幻与脑洞 (Sci-Fi) ---

  // Topic 31: 意识上传（数字永生）
  {
    id: "t-31",
    text: {
      en: "If you could upload your consciousness to a computer and live forever in a digital paradise, but you had to give up your physical body, would you?",
      zh: "如果可以将你的意识上传到云端，在数字天堂里获得永生，但代价是彻底抛弃肉体，你会接受吗？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Digital Immortality", "AI", "Future"], zh: ["数字永生", "元宇宙", "未来"] },
    mood: "curious",
    depth: 4,
    follow_ups: {
      en: ["Would you get bored after the first 1000 years?", "Is that digital copy really 'you'?"],
      zh: ["过了一千年你会觉得无聊吗？", "那个存在于代码里的你，真的还是'你'吗？"]
    },
    safe_for_work: true
  },

  // Topic 32: 时间旅行的单程票（历史 vs 未来）
  {
    id: "t-32",
    text: {
      en: "You have a one-way time machine. You can go 100 years into the past or 100 years into the future. Which way do you go?",
      zh: "你有一台'单程'时光机。你可以选择回到100年前，或者去往100年后。你选哪边？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Time Travel", "History", "Future"], zh: ["穿越", "历史", "选择"] },
    mood: "neutral",
    depth: 2,
    follow_ups: {
      en: ["Would you try to get rich in the past?", "Are you afraid the future is dystopian?"],
      zh: ["你会回到过去利用信息差发财吗？", "你是不是害怕100年后是世界末日？"]
    },
    safe_for_work: true
  },

  // Topic 33: 赛博义肢改造（机械飞升）
  {
    id: "t-33",
    text: {
      en: "In a Cyberpunk future, would you replace a healthy body part (like an arm or eye) with a superior robotic version?",
      zh: "在一个赛博朋克的未来，你会愿意把健康的身体部位（比如手臂或眼睛）替换成功能更强大的机械义肢吗？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Cyberpunk", "Transhumanism", "Technology"], zh: ["赛博朋克", "机械飞升", "科技"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["What function would you want?", "Zoom vision or super strength?"],
      zh: ["你最想要什么功能？", "是望远镜级别的视力，还是力大无穷的机械臂？"]
    },
    safe_for_work: true
  },

  // Topic 34: 缸中之脑（模拟理论）
  {
    id: "t-34",
    text: {
      en: "What if we are all just NPCs in a hyper-advanced video game? What is the biggest 'glitch' you've ever experienced?",
      zh: "如果我们都只是高级文明游戏里的 NPC（非玩家角色）呢？你人生中遇到过最大的'系统Bug'是什么？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Simulation", "Matrix", "Philosophy"], zh: ["模拟理论", "黑客帝国", "既视感"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["Have you ever had Déjà vu?", "Who is the main character in this world?"],
      zh: ["你有过那种强烈的'既视感'(Déjà vu)吗？", "你觉得这个世界谁才是主角（玩家）？"]
    },
    safe_for_work: true
  },

  // Topic 35: 记忆删除服务（忘情水）
  {
    id: "t-35",
    text: {
      en: "If a technology like 'Eternal Sunshine of the Spotless Mind' existed, is there a memory or a person you would pay to erase?",
      zh: "如果《暖暖内含光》里的'记忆删除技术'真的存在，你会花钱去删掉某段记忆或某个人吗？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Memory", "Regret", "Technology"], zh: ["记忆", "后悔", "黑科技"] },
    mood: "negative",
    depth: 5,
    follow_ups: {
      en: ["Would you be the same person without that pain?", "What if they deleted you too?"],
      zh: ["没有了那段痛苦，你还是现在的你吗？", "如果对方也把你删了怎么办？"]
    },
    safe_for_work: true
  },

  // Topic 36: 外星接触（费米悖论）
  {
    id: "t-36",
    text: {
      en: "If aliens landed tomorrow and they were friendly, would you volunteer to leave Earth and join their crew?",
      zh: "如果明天外星人降临并且表现友善，邀请人类加入星际航行，你会报名离开地球吗？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Aliens", "Space", "Adventure"], zh: ["外星人", "太空", "冒险"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["What is the one thing you'd miss most about Earth?", "Would you bring your family?"],
      zh: ["你最舍不得地球上的什么东西？", "你会带上家人一起走吗？"]
    },
    safe_for_work: true
  },

  // Topic 37: 传送门哲学（忒修斯之船）
  {
    id: "t-37",
    text: {
      en: "If a teleporter works by destroying your atoms here and rebuilding a copy of you on Mars, would you step into it?",
      zh: "如果'瞬间移动'的原理是把你在地球上的原子销毁，然后在火星上重新打印一个一模一样的你，你敢进去吗？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Teleportation", "Identity", "Paradox"], zh: ["传送", "哲学", "自我"] },
    mood: "neutral",
    depth: 5,
    follow_ups: {
      en: ["Is the copy on Mars actually you?", "Is it just a fancy suicide machine?"],
      zh: ["火星上的那个人真的是你吗？", "这算不算是一台昂贵的自杀机器？"]
    },
    safe_for_work: true
  },

  // Topic 38: 末日生存搭档（丧尸围城）
  {
    id: "t-38",
    text: {
      en: "In a zombie apocalypse, what is your role in the survival group? The Leader, The Fighter, The Medic, or The Bait?",
      zh: "如果在丧尸末日爆发，你在幸存者小队里是什么担当？队长、打手、奶妈，还是...诱饵？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Zombies", "Survival", "Roleplay"], zh: ["丧尸", "生存", "角色扮演"] },
    mood: "positive", // 这种话题通常比较欢乐
    depth: 1,
    follow_ups: {
      en: ["What is your weapon of choice?", "Who in your real life would survive the longest?"],
      zh: ["你会选什么武器防身？", "你觉得现实生活中谁能活到最后？"]
    },
    safe_for_work: true
  },

  // Topic 39: 梦境录像机（隐私边界）
  {
    id: "t-39",
    text: {
      en: "If you could record your dreams and watch them on TV the next morning, would you? Would you let your partner watch?",
      zh: "如果你能把晚上的梦录下来，第二天早上像看电影一样回放，你会看吗？你会敢给你的伴侣看吗？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["Dreams", "Privacy", "Subconscious"], zh: ["梦境", "隐私", "潜意识"] },
    mood: "flirty", // 梦境往往带有私密和暗示性
    depth: 2,
    follow_ups: {
      en: ["Are your dreams usually nightmares?", "What if you dreamt about someone else?"],
      zh: ["你的梦通常是噩梦还是美梦？", "如果你梦到了别人怎么办？"]
    },
    safe_for_work: true
  },

  // Topic 40: AI 恋爱（电影《Her》）
  {
    id: "t-40",
    text: {
      en: "Do you think humans will eventually fall in love with AI companions that are indistinguishable from real people?",
      zh: "你觉得未来人类会爱上 AI 伴侣吗？如果那个 AI 完美到和你无法区分真假？"
    },
    category: { en: "Sci-Fi", zh: "科幻" },
    tags: { en: ["AI Love", "Future", "Relationships"], zh: ["人机恋", "未来", "关系"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Would you date an AI?", "Is it cheating if you are married but talk to an AI?"],
      zh: ["你会尝试和 AI 约会吗？", "已婚人士和 AI 谈恋爱算出轨吗？"]
    },
    safe_for_work: true
  },
// --- 5. 古代假想 (History & Time Travel) ---

  // Topic 41: 穿越生存技能（现代人废柴论）
  {
    id: "t-41",
    text: {
      en: "If you were dropped into the year 1000 AD with nothing but your current clothes, what modern skill do you possess that would keep you alive?",
      zh: "如果你两手空空穿越回公元1000年，你掌握的哪项'现代技能'能让你活下去（或者致富）？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Survival", "Skills", "Time Travel"], zh: ["生存", "技能", "穿越"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Would you be accused of witchcraft?", "Can you actually make soap or gunpowder?"],
      zh: ["你会不会被当成巫师烧死？", "你真的会造肥皂或者火药吗？（别高估自己）"]
    },
    safe_for_work: true
  },

  // Topic 42: 卫生条件的噩梦（生理不适）
  {
    id: "t-42",
    text: {
      en: "Would you accept being a Monarch in the Middle Ages if it meant you could never brush your teeth, shower, or use a flush toilet again?",
      zh: "如果让你当古代的帝王，代价是这辈子再也没法刷牙、洗澡和用抽水马桶，你干吗？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Hygiene", "Choices", "Gross"], zh: ["卫生", "选择", "重口味"] },
    mood: "positive", // 这种话题通常很欢乐
    depth: 1,
    follow_ups: {
      en: ["How long would you last before you smell?", "What about the lack of modern medicine?"],
      zh: ["你觉得你能忍受那个气味多久？", "要是生病了没有抗生素怎么办？"]
    },
    safe_for_work: true
  },

  // Topic 43: 改变历史的蝴蝶（道德困境）
  {
    id: "t-43",
    text: {
      en: "If you could go back and kill a famous dictator when they were an innocent baby, could you physically bring yourself to do it?",
      zh: "如果你能穿越回去，在某个臭名昭著的独裁者还是个无辜婴儿的时候杀掉他，你下得去手吗？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Ethics", "History", "Dilemma"], zh: ["伦理", "历史", "两难"] },
    mood: "negative",
    depth: 5,
    follow_ups: {
      en: ["Would it actually prevent the war?", "Is killing a baby ever justified?"],
      zh: ["杀了他真的能阻止战争吗（还是会有别人顶替）？", "为了大义杀害婴儿是正义的吗？"]
    },
    safe_for_work: true
  },

  // Topic 44: 跨越时空的晚餐（名人对话）
  {
    id: "t-44",
    text: {
      en: "If you could have a private dinner with any historical figure, but you couldn't change history by talking to them, who would you choose?",
      zh: "如果你能和任意一位历史人物共进晚餐（前提是你不能通过剧透改变历史），你会选谁？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Dinner", "Conversation", "Famous People"], zh: ["晚餐", "对话", "名人"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["What is the first question you'd ask?", "Would you choose a villain just to see what they're like?"],
      zh: ["你坐下来问的第一句会是什么？", "你会为了好奇心选个大反派吗？"]
    },
    safe_for_work: true
  },

  // Topic 45: 宫斗剧生存率（角色扮演）
  {
    id: "t-45",
    text: {
      en: "Based on your personality, how many episodes would you survive in a ruthless Royal Palace drama (like Game of Thrones or Yanxi Palace)?",
      zh: "以你的性格和智商，在《甄嬛传》或《权力的游戏》那种残酷的宫斗剧里，你觉得你能活几集？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Drama", "Survival", "Politics"], zh: ["宫斗", "生存", "权谋"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["How would you die?", "Would you be the villain or the victim?"],
      zh: ["你会是怎么个死法（比如被赐一丈红）？", "你会黑化成反派吗？"]
    },
    safe_for_work: true
  },

  // Topic 46: 唯一的现代物品（外挂选择）
  {
    id: "t-46",
    text: {
      en: "You are traveling to the Roman Empire forever. You can bring ONE item from the present that fits in a backpack (no electronics/internet). What is it?",
      zh: "你要永久穿越去罗马帝国时代。你只能带一件能装进背包的现代物品（不能带电子产品/也没网），你会带什么？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Strategy", "Essentials", "Imagination"], zh: ["策略", "必备品", "脑洞"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["A history book to predict the future?", "Antibiotics?"],
      zh: ["是带一本历史书去当预言家？", "还是带一盒抗生素保命？"]
    },
    safe_for_work: true
  },

  // Topic 47: 古代婚恋观（价值观冲击）
  {
    id: "t-47",
    text: {
      en: "If you fell in love with someone from the past, could you tolerate their outdated values (e.g., sexism, slavery, extreme superstition)?",
      zh: "如果你爱上了一个古代人，你能忍受TA那些过时的价值观吗（比如严重的男尊女卑、等级观念或迷信）？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Love", "Values", "Culture Shock"], zh: ["爱情", "价值观", "文化冲击"] },
    mood: "neutral",
    depth: 4,
    follow_ups: {
      en: ["Could you change their mind?", "Is love enough to overlook human rights violations?"],
      zh: ["你觉得你能'改造'TA吗？", "爱真的能让你无视那些侵犯人权的行为吗？"]
    },
    safe_for_work: true
  },

  // Topic 48: 消失的文明（探险幻想）
  {
    id: "t-48",
    text: {
      en: "If you could witness the true cause of a historical mystery (like the building of the Pyramids or the collapse of Atlantis), which one would you pick?",
      zh: "如果你能亲眼目睹一个历史未解之谜的真相（比如金字塔怎么造的，或者亚特兰蒂斯怎么沉的），你会选哪个？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Mystery", "Curiosity", "Truth"], zh: ["谜团", "好奇心", "真相"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Would anyone believe you when you came back?", "Are you hoping it's aliens?"],
      zh: ["你回来以后说出去会有人信吗？", "你是不是内心暗暗希望是外星人干的？"]
    },
    safe_for_work: true
  },

  // Topic 49: 预言家悖论（神棍体验）
  {
    id: "t-49",
    text: {
      en: "If you used your knowledge of a solar eclipse to convince ancient people you were a God, would you feel guilty or enjoy the power?",
      zh: "如果你利用你知道哪天会有'日全食'这一点，去骗古人说你是神，你会感到内疚，还是会享受这种权力？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Power", "Deception", "Ethics"], zh: ["权力", "欺骗", "伦理"] },
    mood: "flirty", // Power plays can be flirty/bold
    depth: 3,
    follow_ups: {
      en: ["How long until they figure out you're a fraud?", "What would you demand as a tribute?"],
      zh: ["你觉得多久之后你会露馅？", "你会要求他们给你进贡什么？"]
    },
    safe_for_work: true
  },

  // Topic 50: 现代美食的冲击（文化输出）
  {
    id: "t-50",
    text: {
      en: "Which single modern food item do you think would blow the mind of a medieval peasant the most? Chocolate, Doritos, or Ice Cream?",
      zh: "你觉得哪一样现代食物最能让一个古代农民当场震惊到怀疑人生？是巧克力、可乐，还是冰淇淋？"
    },
    category: { en: "History", zh: "历史" },
    tags: { en: ["Food", "Funny", "Reaction"], zh: ["美食", "搞笑", "反应"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Would they think it's poison?", "How would you describe the taste?"],
      zh: ["他们会不会觉得这是毒药？", "你要怎么跟没吃过糖的人形容'气泡水'的感觉？"]
    },
    safe_for_work: true
  },
// --- 6. 心理学与自我探索 (Psychology & Self) ---

  // Topic 51: 荣格的阴影（投射效应）
  {
    id: "t-51",
    text: {
      en: "Psychology says we often hate in others what we suppress in ourselves (The Shadow). What trait in other people annoys you the most?",
      zh: "心理学认为，我们最讨厌别人的地方，往往是我们自己潜意识里压抑的特质（阴影）。你最看不惯别人的哪种行为？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Shadow Self", "Projection", "Carl Jung"], zh: ["阴影", "投射", "荣格"] },
    mood: "curious",
    depth: 4,
    follow_ups: {
      en: ["Could it be that you secretly wish you could act that way?", "Is it arrogance or laziness?"],
      zh: ["有没有可能，你其实潜意识里也想那样做？", "是傲慢，还是懒惰？"]
    },
    safe_for_work: true
  },

  // Topic 52: 虚假记忆（曼德拉效应）
  {
    id: "t-52",
    text: {
      en: "Have you ever had a vivid childhood memory, only to find out later from your parents that it never actually happened?",
      zh: "你有没有一段非常清晰的童年记忆，结果后来被父母告知那件事根本没发生过（或者是你记错了）？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Memory", "Mandela Effect", "Childhood"], zh: ["记忆", "曼德拉效应", "童年"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Do you trust your memory now?", "Was it a dream mixed with reality?"],
      zh: ["你现在还敢相信自己的记忆吗？", "那是不是把梦境当成现实了？"]
    },
    safe_for_work: true
  },

  // Topic 53: 虚空之召（L’appel du vide）
  {
    id: "t-53",
    text: {
      en: "Have you ever stood on a high place and felt a sudden, irrational urge to jump? (It's called 'The Call of the Void').",
      zh: "当你站在高处时，有没有过一瞬间突然产生一种'想跳下去'的荒谬冲动？（心理学上叫'虚空之召'）。"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Instinct", "Fear", "Phenomenon"], zh: ["本能", "恐惧", "心理现象"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["Does it scare you?", "Do you step back immediately?"],
      zh: ["这种感觉会让你觉得后怕吗？", "你会立刻退后一步吗？"]
    },
    safe_for_work: true
  },

  // Topic 54: 依恋类型测试（焦虑 vs 回避）
  {
    id: "t-54",
    text: {
      en: "In relationships, when things get rocky, do you tend to cling tighter (Anxious) or shut down and pull away (Avoidant)?",
      zh: "在亲密关系遇到波折时，你的本能反应是抓得更紧（焦虑型），还是哪怕心里难受也要冷暴力/逃避（回避型）？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Attachment Style", "Relationships", "Personality"], zh: ["依恋人格", "关系", "性格"] },
    mood: "curious", // 适合了解对方的恋爱模式
    depth: 4,
    follow_ups: {
      en: ["Do you think you can change your style?", "Do you attract the opposite type?"],
      zh: ["你觉得这种模式能改吗？", "你是不是总会被和你相反类型的人吸引？"]
    },
    safe_for_work: true
  },

  // Topic 55: 快乐适应（享乐跑步机）
  {
    id: "t-55",
    text: {
      en: "If you won the lottery today, how long do you honestly think the 'high' would last before you returned to your baseline mood?",
      zh: "如果你今天中了彩票头奖，老实说，你觉得那种'狂喜'的状态能维持多久，直到你变回平时的心情？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Happiness", "Money", "Hedonic Treadmill"], zh: ["快乐", "金钱", "享乐适应"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["A week? A month?", "What would actually make you happier long-term?"],
      zh: ["是一个星期，还是一个月？", "你觉得到底什么才能带来长久的快乐？"]
    },
    safe_for_work: true
  },

  // Topic 56: 电车难题（亲疏有别版）
  {
    id: "t-56",
    text: {
      en: "The Trolley Problem: Would you pull the lever to save 5 strangers if the ONE person on the other track was your best friend?",
      zh: "电车难题升级版：如果你如果不拉拉杆会死5个陌生人，但拉了拉杆会撞死你最好的朋友，你会拉吗？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Ethics", "Dilemma", "Friendship"], zh: ["伦理", "两难", "友情"] },
    mood: "negative", // 这是一个让人纠结的沉重话题
    depth: 5,
    follow_ups: {
      en: ["What if it was 100 strangers?", "Does quantity matter vs quality of connection?"],
      zh: ["如果是100个陌生人呢？", "人数真的比情感连接更重要吗？"]
    },
    safe_for_work: true
  },

  // Topic 57: 沉没成本谬误（决策机制）
  {
    id: "t-57",
    text: {
      en: "Why is it so hard for us to quit a movie halfway through even if it sucks? Are you a 'finisher' or a 'quitter'?",
      zh: "为什么电影再难看我们通常也会硬着头皮看完（沉没成本）？你是那种必须'有始有终'的人，还是会果断弃坑的人？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Sunk Cost", "Habit", "Decision"], zh: ["沉没成本", "习惯", "决策"] },
    mood: "positive",
    depth: 1,
    follow_ups: {
      en: ["Does this apply to your relationships too?", "What's the last thing you quit?"],
      zh: ["这种习惯也体现在你的感情生活里吗？", "你最近一次果断放弃的事情是什么？"]
    },
    safe_for_work: true
  },

  // Topic 58: 人格面具（Persona）
  {
    id: "t-58",
    text: {
      en: "Are you the same person when you are completely alone as you are when you are with your friends? Which version is the 'real' you?",
      zh: "你独处时的状态和朋友面前的状态是一样的吗？你觉得哪一个才是'真实'的你？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Persona", "Authenticity", "Social"], zh: ["面具", "真实", "社交"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Do you have a 'work voice'?", "Is being fake sometimes necessary?"],
      zh: ["你有专门的'工作人格'吗？", "你觉得有时候'伪装'是必要的吗？"]
    },
    safe_for_work: true
  },

  // Topic 59: 吊桥效应（心动的错觉）
  {
    id: "t-59",
    text: {
      en: "Do you believe that fear or adrenaline (like riding a roller coaster) can trick your brain into falling in love?",
      zh: "你相信'吊桥效应'吗？即恐惧或肾上腺素（比如一起坐过山车）会欺骗你的大脑，让你误以为那就是心动的感觉？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Love", "Adrenaline", "Attraction"], zh: ["爱情", "吊桥效应", "吸引力"] },
    mood: "flirty",
    depth: 2,
    follow_ups: {
      en: ["Is that why horror movies are good dates?", "Have you ever experienced it?"],
      zh: ["这大概就是为什么看恐怖片适合约会？", "你有过这种'心跳加速'被误读的经历吗？"]
    },
    safe_for_work: true
  },

  // Topic 60: 延迟满足（棉花糖实验）
  {
    id: "t-60",
    text: {
      en: "If I offered you $1000 now, or $2000 if you wait one year, which one do you take instantly?",
      zh: "如果我给你两个选择：现在立刻拿走1000块，或者等一年拿走2000块，你会怎么选？"
    },
    category: { en: "Psychology", zh: "心理学" },
    tags: { en: ["Patience", "Money", "Values"], zh: ["耐心", "金钱", "延迟满足"] },
    mood: "neutral",
    depth: 1,
    follow_ups: {
      en: ["What if the wait was 5 years for $10,000?", "Are you an impulsive person?"],
      zh: ["如果是等5年拿1万块呢？", "你觉得自己是个冲动型的人吗？"]
    },
    safe_for_work: true
  },
// --- 7. 文学与故事 (Literature & Stories) ---

  // Topic 61: 读不下去的经典（吐槽大会）
  {
    id: "t-61",
    text: {
      en: "Be honest: What is a 'classic' book that everyone pretends to love, but you found absolutely boring or couldn't finish?",
      zh: "说实话，有没有哪本被捧上天的'经典名著'，其实你觉得超级无聊或者根本读不下去？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Classics", "Honesty", "Books"], zh: ["名著", "吐槽", "阅读"] },
    mood: "negative", // 这里的negative是轻松的吐槽
    depth: 1,
    follow_ups: {
      en: ["Did you finish it just to look smart?", "Was it 'The Great Gatsby' or 'Moby Dick'?"],
      zh: ["你会为了显摆而假装读完它吗？", "是不是《百年孤独》或者《红楼梦》？"]
    },
    safe_for_work: true
  },

  // Topic 62: 你的自传作者（文风匹配）
  {
    id: "t-62",
    text: {
      en: "If your life story was being written as a biography, which famous author (living or dead) would best capture your 'vibe'?",
      zh: "如果要把你的一生写成一本书，你觉得哪位著名作家（在世或已故）的文风最适合来写你的故事？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Biography", "Style", "Author"], zh: ["传记", "风格", "作家"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Would it be a tragedy or a comedy?", "Would Stephen King make it scary?"],
      zh: ["这会是个悲剧还是喜剧？", "让余华来写会不会太惨了点？"]
    },
    safe_for_work: true
  },

  // Topic 63: 反派的辩护（视角转换）
  {
    id: "t-63",
    text: {
      en: "Is there a villain in a book or movie who you secretly think was actually right (or at least misunderstood)?",
      zh: "有没有哪个文学或影视作品里的'大反派'，其实让你私下觉得TA是对的（或者至少是被误解了）？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Villain", "Perspective", "Ethics"], zh: ["反派", "视角", "三观"] },
    mood: "curious",
    depth: 3,
    follow_ups: {
      en: ["Thanos? The Joker?", "Do you usually root for the bad guy?"],
      zh: ["是灭霸还是小丑？", "你看故事的时候通常会站在坏人这边吗？"]
    },
    safe_for_work: true
  },

  // Topic 64: 纸片人初恋（情感投射）
  {
    id: "t-64",
    text: {
      en: "Who was your first fictional crush? The character in a book or manga that you genuinely had feelings for?",
      zh: "你的第一个'纸片人初恋'是谁？那个让你在书里或漫画里真情实感心动过的角色？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Crush", "Fictional", "Nostalgia"], zh: ["初恋", "虚拟", "怀旧"] },
    mood: "flirty",
    depth: 2,
    follow_ups: {
      en: ["Is your current partner anything like them?", "Was it a vampire or a wizard?"],
      zh: ["你现在的伴侣身上有TA的影子吗？", "是不是那种吸血鬼或者霸道总裁类型的？"]
    },
    safe_for_work: true
  },

  // Topic 65: 生活的章节名（自我认知）
  {
    id: "t-65",
    text: {
      en: "If your life is a novel and you are currently in the middle of a chapter, what is the title of this chapter?",
      zh: "如果你的人生是一部小说，而你现在正处在其中的某一章，这一章的'章节标题'叫什么？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Metaphor", "Life", "Creativity"], zh: ["隐喻", "生活", "创意"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["'The Great Depression'?", "'The Awakening'?"],
      zh: ["是叫'迷茫期'？", "还是'黎明前的黑暗'？"]
    },
    safe_for_work: true
  },

  // Topic 66: 反乌托邦现实（社会观察）
  {
    id: "t-66",
    text: {
      en: "Which dystopian novel do you think our current society is slowly turning into: '1984', 'Brave New World', or 'Black Mirror'?",
      zh: "你觉得我们的现实社会正在慢慢变成哪部反乌托邦小说？是《1984》、《美丽新世界》，还是《黑镜》？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Dystopia", "Society", "Future"], zh: ["反乌托邦", "社会", "未来"] },
    mood: "negative", // 偏严肃讨论
    depth: 5,
    follow_ups: {
      en: ["Are we controlled by pain or pleasure?", "Is privacy already dead?"],
      zh: ["我们是被痛苦控制（1984），还是被娱乐至死（美丽新世界）？", "隐私是不是已经死透了？"]
    },
    safe_for_work: true
  },

  // Topic 67: 活在书中（逃避主义）
  {
    id: "t-67",
    text: {
      en: "If you could physically live inside the world of any fiction book, but you can never return to reality, which world would you choose?",
      zh: "如果你能肉身穿越进任何一本虚构小说里的世界生活，但永远不能回到现实，你会选哪个世界？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Fantasy", "Escapism", "World Building"], zh: ["幻想", "逃避", "世界观"] },
    mood: "positive",
    depth: 2,
    follow_ups: {
      en: ["Harry Potter? Lord of the Rings?", "Would you be a main character or just an NPC?"],
      zh: ["是哈利波特还是指环王？", "过去后你是主角还是路人甲？"]
    },
    safe_for_work: true
  },

  // Topic 68: 改写结局（意难平）
  {
    id: "t-68",
    text: {
      en: "If you had the power to rewrite the ending of one famous story, which one would you change to make it 'right'?",
      zh: "如果你有权改写一个著名故事的结局，你会修改哪一个来弥补你的'意难平'？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Ending", "Regret", "Storytelling"], zh: ["结局", "遗憾", "故事"] },
    mood: "curious",
    depth: 2,
    follow_ups: {
      en: ["Would you save a character who died?", "Do you prefer happy endings or realistic ones?"],
      zh: ["你会救活那个死掉的角色吗？", "你更喜欢大团圆结局还是悲剧美学？"]
    },
    safe_for_work: true
  },

  // Topic 69: 灵魂诗句（共鸣）
  {
    id: "t-69",
    text: {
      en: "Is there a specific line from a book, poem, or song lyrics that is effectively 'tattooed' on your brain forever?",
      zh: "有没有哪一句书里的台词、诗句或歌词，就像'纹身'一样刻在你的脑子里，让你终生难忘？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Quotes", "Inspiration", "Memory"], zh: ["金句", "灵感", "记忆"] },
    mood: "positive",
    depth: 4,
    follow_ups: {
      en: ["Do you live by that quote?", "When did you first read it?"],
      zh: ["那句话是你的座右铭吗？", "你是在什么样的人生阶段读到它的？"]
    },
    safe_for_work: true
  },

  // Topic 70: 只有一本书（极限选择）
  {
    id: "t-70",
    text: {
      en: "You are being sent to a solitary confinement cell for a year. You are allowed to bring ONE book to read over and over. What is it?",
      zh: "如果把你关进禁闭室一年，只允许带唯一的一本书反复阅读（不能是电子设备），你会带哪本？"
    },
    category: { en: "Literature", zh: "文学" },
    tags: { en: ["Choice", "Solitude", "Favorite"], zh: ["选择", "孤独", "最爱"] },
    mood: "neutral",
    depth: 3,
    follow_ups: {
      en: ["A religious text? A survival guide?", "Or a very long novel?"],
      zh: ["是带本经书修身养性？", "还是带本超长的小说杀时间？"]
    },
    safe_for_work: true
  },
// --- 8. 推拉与张力 (Tension & Chemistry) ---

  // Topic 71: 对视挑战（无声胜有声）
  {
    id: "t-71",
    text: {
      en: "If we stared into each other's eyes for 60 seconds without talking right now, who do you think would look away first?",
      zh: "如果我们现在互相对视60秒不说话，你觉得谁会先受不了那种张力把头转开？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Eye Contact", "Challenge", "Tension"], zh: ["对视", "挑战", "张力"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Would you laugh or get shy?", "What would you be thinking about?"],
      zh: ["你会笑场还是会害羞？", "那60秒里你脑子里会想什么？"]
    },
    safe_for_work: true
  },

  // Topic 72: 例外原则（打破标准）
  {
    id: "t-72",
    text: {
      en: "I have a 'type', but you don't fit it at all, yet here I am. What is your theory on why you are the exception?",
      zh: "其实你完全不是我以前喜欢的类型，但我现在却陷进去了。你觉得你哪里'违规'了？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Type", "Exception", "Compliment"], zh: ["理想型", "例外", "告白"] },
    mood: "flirty",
    depth: 5, // 接近表白的高深度
    follow_ups: {
      en: ["Is it my personality or my vibe?", "Do you usually date people like me?"],
      zh: ["是性格还是感觉？", "你以前也没遇到过我这款吧？"]
    },
    safe_for_work: true
  },

  // Topic 73: 危险信号（红旗迷恋）
  {
    id: "t-73",
    text: {
      en: "Be honest. Do you think you would be a 'good influence' on my life, or are you going to be beautiful trouble?",
      zh: "老实说，你觉得你出现在我生命里是来'渡'我的，还是来'祸害'我的？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Trouble", "Chemistry", "Playful"], zh: ["危险", "化学反应", "调情"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Should I run away now?", "Do you like being the bad influence?"],
      zh: ["我是不是现在逃跑还来得及？", "你是不是很享受当个'坏人'？"]
    },
    safe_for_work: true
  },

  // Topic 74: 接吻前一秒（过程 vs 结果）
  {
    id: "t-74",
    text: {
      en: "What is more attractive to you: the intense buildup before the first kiss, or the actual kiss itself?",
      zh: "对你来说，是接吻前那几秒甚至几分钟的极限拉扯更迷人，还是接吻这件事本身？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Kissing", "Anticipation", "Desire"], zh: ["接吻", "期待", "欲望"] },
    mood: "flirty",
    depth: 5,
    follow_ups: {
      en: ["Are you good at creating tension?", "How long can you wait?"],
      zh: ["你擅长制造这种紧张感吗？", "你能忍这种'看的到吃不到'的感觉多久？"]
    },
    safe_for_work: true
  },

  // Topic 75: 读心术（直觉测试）
  {
    id: "t-75",
    text: {
      en: "Right now, without speaking, on a scale of 1 to 10, how much do you think I want to kiss you?",
      zh: "现在，别说话，凭你的直觉猜一下（1-10分）：我现在想吻你的冲动有几分？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Intuition", "Kiss", "Direct"], zh: ["直觉", "吻", "直球"] },
    mood: "flirty",
    depth: 5,
    follow_ups: {
      en: ["What if it's an 11?", "What score do you want it to be?"],
      zh: ["如果我说爆表了呢？", "你希望是几分？"]
    },
    safe_for_work: true
  },

  // Topic 76: 气味诱惑（感官记忆）
  {
    id: "t-76",
    text: {
      en: "They say scent is the strongest trigger for attraction. Is there a specific scent (perfume or natural) that makes you weak in the knees?",
      zh: "听说气味是致命的诱惑。有没有哪种特定的味道（香水或体味），闻到会让你瞬间腿软、丧失抵抗力？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Scent", "Pheromones", "Attraction"], zh: ["气味", "费洛蒙", "吸引力"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Do I smell like that?", "Would you steal my hoodie to keep the smell?"],
      zh: ["我身上是这种味道吗？", "你会偷偷把我有味道的卫衣带回家闻吗？"]
    },
    safe_for_work: true
  },

  // Topic 77: 梦境解析（潜意识暗示）
  {
    id: "t-77",
    text: {
      en: "If I told you that you appeared in my dream last night, would you be bold enough to ask what we were doing?",
      zh: "如果我告诉你昨晚梦到你了，你敢不敢问我们在梦里做什么？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Dreams", "Subconscious", "Tease"], zh: ["梦境", "潜意识", "暗示"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Was it PG-13 or R-rated?", "Did you enjoy it in the dream?"],
      zh: ["是那种能播的，还是不能播的？", "你在梦里配合吗？"]
    },
    safe_for_work: true
  },

  // Topic 78: 占有欲测试（护食）
  {
    id: "t-78",
    text: {
      en: "Does it flatter you or annoy you if I get a little bit territorial/jealous when others try to flirt with you?",
      zh: "如果别人撩你的时候，我表现得有点'护食'（占有欲），你会觉得暗爽还是觉得我烦？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Jealousy", "Territorial", "Ego"], zh: ["吃醋", "占有欲", "虚荣心"] },
    mood: "flirty",
    depth: 3,
    follow_ups: {
      en: ["Do you like making me jealous on purpose?", "Where is the line?"],
      zh: ["你会故意惹我吃醋来看我反应吗？", "你的底线在哪里？"]
    },
    safe_for_work: true
  },

  // Topic 79: 黑暗中的第一反应（情景假设）
  {
    id: "t-79",
    text: {
      en: "If the power went out right now and we were in total darkness, what is the first thing you would do?",
      zh: "如果现在突然全城停电，房间陷入一片漆黑，你的第一反应会是对我做什么？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Darkness", "Scenario", "Instinct"], zh: ["黑暗", "情景", "本能"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Would you find my hand?", "Would you whisper something?"],
      zh: ["你会先抓我的手吗？", "你会趁机说什么悄悄话吗？"]
    },
    safe_for_work: true
  },

  // Topic 80: 声音控（听觉刺激）
  {
    id: "t-80",
    text: {
      en: "Is there a specific tone of voice I use, or a word I say, that instantly triggers a reaction in you?",
      zh: "我有没有哪个说话的语调，或者哪个特定的词，会让你听了心里突然'咯噔'一下（被电到的感觉）？"
    },
    category: { en: "Flirting", zh: "暧昧" },
    tags: { en: ["Voice", "ASMR", "Turn-on"], zh: ["声音", "声控", "开关"] },
    mood: "flirty",
    depth: 4,
    follow_ups: {
      en: ["Is it when I whisper?", "Is it when I say your name?"],
      zh: ["是低声耳语的时候吗？", "还是我叫你名字的时候？"]
    },
    safe_for_work: true
  },
// --- 神秘学 (Mysticism) ---

// Topic 41: 星座偏见（破冰/有趣）
{
  id: "t-41",
  text: {
    en: "Do you secretly judge people based on their zodiac sign, even if you say you don't believe in astrology?",
    zh: "你会不会偷偷根据别人的星座来预判他们的性格，即使嘴上说不信星座？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Zodiac", "Astrology", "Judgment"], zh: ["星座", "占星", "偏见"] },
  mood: "positive",
  depth: 1,
  follow_ups: {
    en: ["What's the worst zodiac sign in your opinion?", "Has a zodiac prediction ever come true for you?"],
    zh: ["你觉得最难搞的星座是哪个？", "你有过星座预言准得离谱的经历吗？"]
  },
  safe_for_work: true
},

// Topic 42: 塔罗牌体验（好奇/入门）
{
  id: "t-42",
  text: {
    en: "Have you ever had a tarot reading? Did it freak you out or make you laugh?",
    zh: "你抽过塔罗牌吗？结果是让你毛骨悚然，还是觉得太扯了？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Tarot", "Divination", "Experience"], zh: ["塔罗", "占卜", "经历"] },
  mood: "curious",
  depth: 2,
  follow_ups: {
    en: ["What card did you draw?", "Would you try it again?"],
    zh: ["你抽到的是什么牌？", "你还敢再试一次吗？"]
  },
  safe_for_work: true
},

// Topic 43: 灵异事件分享（惊悚/故事）
{
  id: "t-43",
  text: {
    en: "What's the creepiest unexplained thing that's ever happened to you? Was it a ghost or just your imagination?",
    zh: "你经历过的最诡异、无法解释的事是什么？是鬼魂作祟，还是自己脑补？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Ghost", "Paranormal", "Story"], zh: ["鬼魂", "灵异", "故事"] },
  mood: "negative",
  depth: 3,
  follow_ups: {
    en: ["Did it happen at night?", "Have you told anyone else about it?"],
    zh: ["是发生在半夜吗？", "你跟别人说过这个事吗？"]
  },
  safe_for_work: true
},

// Topic 44: 轮回转世信念（哲学/深度）
{
  id: "t-44",
  text: {
    en: "If reincarnation is real, what do you think you were in a past life? A king, an animal, or something else?",
    zh: "如果轮回转世是真的，你觉得上辈子自己是什么？国王、动物，还是别的？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Reincarnation", "Past Life", "Belief"], zh: ["轮回", "前世", "信念"] },
  mood: "curious",
  depth: 4,
  follow_ups: {
    en: ["Does it explain your current fears or talents?", "Would you want to remember your past lives?"],
    zh: ["这能解释你现在的恐惧或天赋吗？", "你想不想记住前世的记忆？"]
  },
  safe_for_work: true
},

// Topic 45: 预知梦（神秘/个人）
{
  id: "t-45",
  text: {
    en: "Have you ever had a dream that later came true? Was it a good thing or a warning?",
    zh: "你做过后来成真的梦吗？那是好事，还是某种预警？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Dream", "Precognition", "Prophecy"], zh: ["梦境", "预知", "预言"] },
  mood: "curious",
  depth: 2,
  follow_ups: {
    en: ["How accurate was it?", "Do you keep a dream journal?"],
    zh: ["准到什么程度？", "你有记梦的习惯吗？"]
  },
  safe_for_work: true
},

// Topic 46: 水晶疗愈（新奇/放松）
{
  id: "t-46",
  text: {
    en: "Do you believe in the power of crystals? Which one would you carry for good luck or protection?",
    zh: "你相信水晶的能量吗？如果你要带一个水晶求好运或护身，会选哪种？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Crystals", "Healing", "Energy"], zh: ["水晶", "疗愈", "能量"] },
  mood: "positive",
  depth: 1,
  follow_ups: {
    en: ["Have you ever bought one?", "What color attracts you most?"],
    zh: ["你买过水晶吗？", "哪种颜色的水晶最吸引你？"]
  },
  safe_for_work: true
},

// Topic 47: 外星人存在论（科幻/辩论）
{
  id: "t-47",
  text: {
    en: "On a scale of 1-10, how convinced are you that aliens exist, and have they already visited Earth?",
    zh: "从1到10打分，你有多相信外星人存在，而且他们已经来过地球？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Aliens", "UFO", "Conspiracy"], zh: ["外星人", "UFO", "阴谋论"] },
  mood: "curious",
  depth: 3,
  follow_ups: {
    en: ["What evidence convinces you?", "Would you want to meet one?"],
    zh: ["什么证据让你信服？", "你想不想亲眼见到外星人？"]
  },
  safe_for_work: true
},

// Topic 48: 诅咒与运气（迷信/反思）
{
  id: "t-48",
  text: {
    en: "Do you have any personal superstitions, like avoiding black cats or knocking on wood, that you can't shake off?",
    zh: "你有没有什么甩不掉的迷信习惯，比如避开黑猫，或者敲木头求好运？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Superstition", "Luck", "Curse"], zh: ["迷信", "运气", "诅咒"] },
  mood: "neutral",
  depth: 2,
  follow_ups: {
    en: ["Did something bad happen when you ignored it?", "Where did you learn it from?"],
    zh: ["有次不遵守，结果真出事了吗？", "这个习惯是从谁那里学来的？"]
  },
  safe_for_work: true
},

// Topic 49: 平行宇宙旅行（脑洞/哲学）
{
  id: "t-49",
  text: {
    en: "If you could peek into a parallel universe where you made one different choice, which choice would you check?",
    zh: "如果你能偷窥一个平行宇宙，那里你做了一个不同的选择，你想看哪个选择的分支？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Parallel Universe", "Choice", "Quantum"], zh: ["平行宇宙", "选择", "量子"] },
  mood: "curious",
  depth: 5,
  follow_ups: {
    en: ["Would it make you regret your current life?", "Do you think that version is happier?"],
    zh: ["看了会不会后悔现在的人生？", "你觉得那个宇宙的你更幸福吗？"]
  },
  safe_for_work: true
},

// Topic 50: 通灵能力幻想（超能力/有趣）
{
  id: "t-50",
  text: {
    en: "If you suddenly gained the ability to talk to the dead, who is the first historical figure you'd contact and why?",
    zh: "如果你突然有了通灵能力，能和死人聊天，你会先找哪个历史人物聊？为什么？"
  },
  category: { en: "Mysticism", zh: "神秘学" },
  tags: { en: ["Medium", "Historical", "Afterlife"], zh: ["通灵", "历史人物", "来世"] },
  mood: "positive",
  depth: 3,
  follow_ups: {
    en: ["What question would you ask them?", "Would it be scary or exciting?"],
    zh: ["你会问TA什么问题？", "这会让你兴奋还是害怕？"]
  },
  safe_for_work: true
},
// --- 美食 (Food & Culinary) ---

// Topic 51: 最后晚餐幻想（有趣/深度）
{
  id: "t-51",
  text: {
    en: "If this was literally your last meal on earth, what three dishes would you choose and why?",
    zh: "如果这真的是你在地球上的最后一餐，你会点哪三道菜？为什么？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Last Meal", "Preference", "Emotion"], zh: ["最后一餐", "偏好", "情感"] },
  mood: "curious",
  depth: 3,
  follow_ups: {
    en: ["Sweet or savory for the final bite?", "Would you want company or eat alone?"],
    zh: ["最后一口想吃甜的还是咸的？", "想一个人静静吃，还是有人陪着？"]
  },
  safe_for_work: true
},

// Topic 52: 童年食物乡愁（怀旧/温馨）
{
  id: "t-52",
  text: {
    en: "What childhood dish instantly takes you back to being a kid the second you smell or taste it?",
    zh: "哪一道小时候吃的菜，只要一闻到或一口下去，就能瞬间把你拉回童年？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Nostalgia", "Childhood", "Memory"], zh: ["乡愁", "童年", "回忆"] },
  mood: "positive",
  depth: 2,
  follow_ups: {
    en: ["Who used to make it for you?", "Do you still eat it the same way?"],
    zh: ["以前是谁做给你吃的？", "你现在还用小时候的吃法吗？"]
  },
  safe_for_work: true
},

// Topic 53: 食物鄙视链（轻松/吐槽）
{
  id: "t-53",
  text: {
    en: "What's one extremely popular food that you just... don't get the hype about at all?",
    zh: "有没有哪一道超级火爆、人人都爱的食物，你却完全get不到它的魅力？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Opinion", "Hate", "Popular"], zh: ["看法", "讨厌", "热门"] },
  mood: "negative",
  depth: 1,
  follow_ups: {
    en: ["Is it bubble tea? Avocado toast? Sushi?", "What do people always try to convert you with?"],
    zh: ["是珍奶？牛油果吐司？还是生鱼片？", "别人最常拿什么来试图说服你？"]
  },
  safe_for_work: true
},

// Topic 54: 深夜觅食冲动（真实/共鸣）
{
  id: "t-54",
  text: {
    en: "What's the most ridiculous thing you've ever eaten at 2 a.m. because you were too hungry to care?",
    zh: "你半夜两点最离谱吃过什么东西？那种饿到已经不在乎形象的时刻？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Midnight", "Craving", "Shame-eating"], zh: ["宵夜", "嘴馋", "社死吃"] },
  mood: "positive",
  depth: 1,
  follow_ups: {
    en: ["Was it worth the stomachache?", "Do you have a go-to 3 a.m. spot?"],
    zh: ["第二天胃痛值得吗？", "你有固定的凌晨三点觅食圣地吗？"]
  },
  safe_for_work: true
},

// Topic 55: 食物过敏/忌口尴尬（共情/真实）
{
  id: "t-55",
  text: {
    en: "What's the most awkward 'I can't eat that' moment you've had at someone else's dinner table?",
    zh: "你在别人家饭桌上，最尴尬的一次「这个我不能吃」是什么情况？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Allergy", "Awkward", "Social"], zh: ["过敏", "尴尬", "社交"] },
  mood: "neutral",
  depth: 2,
  follow_ups: {
    en: ["Did they make a big deal out of it?", "What's your most hated 'just try a little' phrase?"],
    zh: ["对方是不是很夸张地大惊小怪？", "你最讨厌听到哪句「尝一点没关系的」？"]
  },
  safe_for_work: true
},

// Topic 56: 家乡味道执念（地域/情感）
{
  id: "t-56",
  text: {
    en: "What's the one dish from your hometown that you think nobody outside can make correctly?",
    zh: "你老家有哪一道菜，你觉得外地人做出来永远都不会对味？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Hometown", "Authenticity", "Pride"], zh: ["家乡", "正宗", "骄傲"] },
  mood: "positive",
  depth: 3,
  follow_ups: {
    en: ["Is it a spice? A technique? Or just the water?", "Have you tried teaching outsiders?"],
    zh: ["是因为某种香料？某种手法？还是水土问题？", "你有试过教外地人做吗？"]
  },
  safe_for_work: true
},

// Topic 57: 绝交级食物搭配（猎奇/搞笑）
{
  id: "t-57",
  text: {
    en: "What's the most cursed food combination you secretly love (or at least don't hate)?",
    zh: "你最不能被公开承认、但其实还蛮喜欢的诡异食物搭配是什么？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Weird", "Combination", "Guilty"], zh: ["诡异", "混搭", "罪恶感"] },
  mood: "positive",
  depth: 1,
  follow_ups: {
    en: ["Pineapple on pizza level or even worse?", "Would you serve it to guests?"],
    zh: ["菠萝披萨那个级别，还是更离谱？", "你敢端给客人吃吗？"]
  },
  safe_for_work: true
},

// Topic 58: 减肥路上的背叛（自嘲/共鸣）
{
  id: "t-58",
  text: {
    en: "What's the food that always makes you break your diet the fastest, no matter how strong your willpower is?",
    zh: "哪一种食物最容易让你破戒？意志力再强也挡不住的那种？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Diet", "Temptation", "Weakness"], zh: ["减肥", "诱惑", "弱点"] },
  mood: "neutral",
  depth: 2,
  follow_ups: {
    en: ["Is it smell, texture, or memory?", "How long do you usually last before caving?"],
    zh: ["是因为香味？口感？还是回忆杀？", "你通常能撑多久才投降？"]
  },
  safe_for_work: true
},

// Topic 59: 食物人格测试（轻松/有趣）
{
  id: "t-59",
  text: {
    en: "If you had to describe your personality as a dish or a meal, what would you be and why?",
    zh: "如果要用一道菜或一餐饭来形容你的个性，你会是哪一道？为什么？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Personality", "Metaphor", "Self"], zh: ["个性", "比喻", "自我"] },
  mood: "positive",
  depth: 3,
  follow_ups: {
    en: ["Are you spicy, sweet, comforting, or chaotic?", "Would other people agree?"],
    zh: ["你是辣的、甜的、治愈系的，还是混乱系的？", "别人会同意你的自我评价吗？"]
  },
  safe_for_work: true
},

// Topic 60: 梦幻美食地图（幻想/浪漫）
{
  id: "t-60",
  text: {
    en: "If money, calories, and geography were no issue, where in the world would you go just to eat one specific dish right now?",
    zh: "如果钱、热量、距离都不是问题，你现在最想立刻飞去世界哪个地方，只为了吃那一道特定的菜？"
  },
  category: { en: "Food", zh: "美食" },
  tags: { en: ["Travel", "Dream", "Specific"], zh: ["旅行", "梦想", "特定"] },
  mood: "positive",
  depth: 2,
  follow_ups: {
    en: ["Is it street food or Michelin star?", "Would you eat it alone or share?"],
    zh: ["是路边摊还是米其林？", "你想一个人吃，还是找人一起分享？"]
  },
  safe_for_work: true
},
// --- 旅行 (Travel) ---

// Topic 61: 瞬移一日游（幻想/好玩）
{
  id: "t-61",
  text: {
    en: "If you could teleport anywhere right now for just 24 hours, where would you go and what would you do first?",
    zh: "如果你现在能瞬间传送去世界上任何一个地方，只玩24小时，你会去哪？第一件事做什么？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Teleport", "One Day", "Dream"], zh: ["瞬移", "一日游", "梦想"] },
  mood: "positive",
  depth: 2,
  follow_ups: {
    en: ["Eat street food or see a sunset?", "Would you tell anyone or keep it secret?"],
    zh: ["先吃路边摊还是去看日落？", "你会发朋友圈炫耀，还是一个人偷偷享受？"]
  },
  safe_for_work: true
},

// Topic 62: 机场社死时刻（吐槽/超有共鸣）
{
  id: "t-62",
  text: {
    en: "What's the most embarrassing thing you've ever done at an airport that still makes you cringe?",
    zh: "你在机场干过的最社死的事是什么？现在想起来还想原地消失的那种？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Airport", "Embarrassing", "Story"], zh: ["机场", "社死", "故事"] },
  mood: "positive",
  depth: 1,
  follow_ups: {
    en: ["Forgot passport? Loud alarm?", "Did strangers laugh?"],
    zh: ["忘带护照？安检狂响？", "当时旁边的人都看你了吗？"]
  },
  safe_for_work: true
},

// Topic 63: 旅行黑历史（搞笑/自黑）
{
  id: "t-63",
  text: {
    en: "What's the one trip that went completely wrong but is now your funniest travel story?",
    zh: "哪次旅行从头到尾都翻车，但现在成了你讲起来最爆笑的旅行黑历史？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Fail", "Funny", "Disaster"], zh: ["翻车", "搞笑", "灾难"] },
  mood: "positive",
  depth: 2,
  follow_ups: {
    en: ["Lost luggage or food poisoning?", "Would you go back?"],
    zh: ["行李丢了还是集体食物中毒？", "你还敢再去那个地方吗？"]
  },
  safe_for_work: true
},

// Topic 64: 当地人vs游客（真实/有趣）
{
  id: "t-64",
  text: {
    en: "When you travel, do you try to 'live like a local' or are you proudly a full-on tourist with the camera and map?",
    zh: "你旅行的时候是努力融入当地人，还是完全不掩饰自己游客身份，大大方方拿相机拍照看地图？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Style", "Local", "Tourist"], zh: ["风格", "当地人", "游客"] },
  mood: "curious",
  depth: 1,
  follow_ups: {
    en: ["Street food markets or fancy restaurants?", "Ever been mistaken for a local?"],
    zh: ["早市吃早餐还是米其林餐厅？", "你被当地人认成自己人过吗？"]
  },
  safe_for_work: true
},

// Topic 65: 旅行超级力量（脑洞/好玩）
{
  id: "t-65",
  text: {
    en: "If you could have one superpower just for traveling, would you choose instant language mastery or never getting jet lagged?",
    zh: "如果旅行能选一个超能力，你要「瞬间学会当地语言」还是「永远不倒时差」？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Superpower", "Choice", "Fantasy"], zh: ["超能力", "选择", "幻想"] },
  mood: "positive",
  depth: 2,
  follow_ups: {
    en: ["What about unlimited money?", "Which one would change your trips more?"],
    zh: ["如果再加一个「无限金钱」呢？", "你觉得哪个超能力会最改变你的旅行体验？"]
  },
  safe_for_work: true
},

// Topic 66: 机上邻座缘分（浪漫/有趣）
{
  id: "t-66",
  text: {
    en: "Have you ever had an amazing conversation with a total stranger on a plane? What happened?",
    zh: "你在飞机上跟旁边的陌生人聊得超级投缘过吗？后来怎么样了？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Flight", "Stranger", "Connection"], zh: ["飞机", "陌生人", "缘分"] },
  mood: "positive",
  depth: 2,
  follow_ups: {
    en: ["Did you exchange contacts?", "Was it a 12-hour deep talk?"],
    zh: ["你们交换联系方式了吗？", "是那种聊12小时都不无聊的吗？"]
  },
  safe_for_work: true
},

// Topic 67: 打包人格测试（自嘲/好玩）
{
  id: "t-67",
  text: {
    en: "Are you the person who packs two weeks in advance, or the chaotic one throwing things in the suitcase 30 minutes before leaving?",
    zh: "你是提前两周就打包好的人，还是出门前30分钟才乱塞行李箱的拖延症患者？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Packing", "Personality", "Chaos"], zh: ["打包", "性格", "混乱"] },
  mood: "positive",
  depth: 1,
  follow_ups: {
    en: ["Ever forgotten something important?", "How many outfits for a 3-day trip?"],
    zh: ["你忘带过最重要的东西吗？", "三天两夜你会带几套衣服？"]
  },
  safe_for_work: true
},

// Topic 68: 隐藏宝藏城市（推荐/好奇）
{
  id: "t-68",
  text: {
    en: "What's one underrated city you've been to that deserves way more hype than it gets?",
    zh: "你去过哪个被严重低估的城市？明明超好玩却没什么人知道！"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Hidden Gem", "Recommendation", "Underrated"], zh: ["宝藏城市", "推荐", "低估"] },
  mood: "positive",
  depth: 3,
  follow_ups: {
    en: ["Food? Views? People?", "Would you live there for a month?"],
    zh: ["是因为美食？风景？还是人？", "你愿意去那里生活一个月吗？"]
  },
  safe_for_work: true
},

// Topic 69: 旅行后遗症（共鸣/真实）
{
  id: "t-69",
  text: {
    en: "After an amazing trip, how long does it take you to stop daydreaming about going back?",
    zh: "一次超棒的旅行结束后，你要多久才会停止「啊啊啊好想回去」的循环？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Post-Travel", "Blues", "Daydream"], zh: ["旅行后遗症", "忧郁", "白日梦"] },
  mood: "neutral",
  depth: 2,
  follow_ups: {
    en: ["Do you look at photos every day?", "When do you start planning the next one?"],
    zh: ["你会每天翻照片吗？", "多久后就开始计划下一次旅行？"]
  },
  safe_for_work: true
},

// Topic 70: 我们一起逃跑（浪漫/邀约感）
{
  id: "t-70",
  text: {
    en: "If we decided to run away together this weekend with zero planning, where do you think we'd end up having the best time?",
    zh: "如果我们这个周末说走就走，完全不做计划，你觉得我们会跑到哪里玩得最开心？"
  },
  category: { en: "Travel", zh: "旅行" },
  tags: { en: ["Spontaneous", "Together", "Adventure"], zh: ["说走就走", "一起", "冒险"] },
  mood: "flirty",
  depth: 4,
  follow_ups: {
    en: ["Beach, mountains, or city?", "What would we pack in 5 minutes?"],
    zh: ["海边？山区？还是城市？", "五分钟内我们能塞进行李箱的东西有哪些？"]
  },
  safe_for_work: true
},
];