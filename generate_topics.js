import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

// ---------------------------------------------------------
// ESM 环境下模拟 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ---------------------------------------------------------

// ================= 🛠️ 配置区域 =================

// 1. 配置你的 LLM 服务商
const openai = new OpenAI({
  apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxx', // 【替换你的 API Key】
  baseURL: 'http://127.0.0.1:11434/v1',   // 【替换你的 Base URL】
});

// 2. 模型名称
const MODEL_NAME = 'kimi-k2:1t-cloud'; // 【替换你的模型名称】

// 3. 生成设置
const START_ID_NUM = 106; // 起始 ID (t-106)
const BATCH_SIZE = 15;    // 每批生成多少条
const TARGET_BATCHES = 10; // 循环多少次 (10次 * 15条 = 150条)
const OUTPUT_FILE = 'generated_topics.ts.txt'; // 输出文件名

// ===========================================
// ===== 1. 所有可选标签 =====
const ALL_CATEGORIES = [
  '搞笑', '深度', '哲学', '暧昧',
  '玄学', '脑洞', '知识性', '恋爱', '人生规划',
  '梦想', '旅行', '美食', '娱乐', '电影', '音乐','历史',
  '科技','职场','文学', '游戏','二次元','运动', '宠物', '星座', '心理学',
  '未来', '命运','死亡','宇宙','潮流','诗词','睡眠','审美','友谊','梦境'
];

// ===== 2. 从数组里随机抽 n 个（不重复）=====
const sample = (arr, n) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
};

// ===== 3. 构建动态 SYSTEM_PROMPT =====
const buildSystemPrompt = (batchSize = 10) => {
  const picked = sample(ALL_CATEGORIES, 15);          // 每次 15 个
  return `
你是一个专业的创意对话数据生成器。请生成 ${batchSize} 个用于 AI 伴侣引导用户聊天的创意话题。

要求：
1. **多样性**：话题可以从以下话题作为参考，但是也不限于这些，可以发散，尽量有趣，大胆，深刻，有话题性，适合让用户愿意进一步交流的话题：
   ${picked.map(c => `- ${c}`).join('\n   ')}
2. **格式**：必须严格返回一个 JSON 数组。
3. **语言**：所有文本字段必须同时包含中文 (zh) 和英文 (en)。
4. **结构**：
*   **mood (情绪)**: positive (积极), neutral (中性), curious (好奇), flirty (调情)
*   **depth (深度)**: 为1到5的整数，1为最浅，5为最深
    *   1: Icebreaker (破冰)
    *   2: Light (闲聊)
    *   3: Deep (走心)
    *   4: Love (暧昧)
    *   5: Soul (灵魂)
   - safe_for_work (是否适合工作环境): true (适合), false (不适合)

返回的 JSON 格式示例 (纯JSON，不要Markdown标记):
[
  {
    "text": { "en": "...", "zh": "..." },
    "category": { "en": "...", "zh": "..." },
    "tags": { "en": ["Tag1"], "zh": ["标签1"] },
    "mood": "curious",
    "depth": 2,
    "follow_ups": { "en": ["Q1", "Q2"], "zh": ["追问1", "追问2"] },
    "safe_for_work": true
  }
]

以下是已有的一些示例：
  // 1. Life Planning (Curious, Depth 2)
  {
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
`;
};

// ===== 4. 使用示例 =====
const SYSTEM_PROMPT = buildSystemPrompt(BATCH_SIZE);   // 每次调用都换 15 个标签


/**
 * 将单个 Topic 对象转换为 TypeScript 源码字符串
 */
function formatTopicToTS(topic) {
  // 安全处理，防止双引号破坏 JSON 字符串结构
  const safeStr = (str) => str ? str.replace(/\\/g, '\\\\').replace(/"/g, '\\"') : "";
  const safeArr = (arr) => JSON.stringify(arr || []);

  return `  {
    id: "${topic.id}",
    text: {
      en: "${safeStr(topic.text?.en)}",
      zh: "${safeStr(topic.text?.zh)}"
    },
    category: { en: "${safeStr(topic.category?.en || 'General')}", zh: "${safeStr(topic.category?.zh || '通用')}" },
    tags: { en: ${safeArr(topic.tags?.en)}, zh: ${safeArr(topic.tags?.zh)} },
    mood: "${topic.mood || 'neutral'}",
    depth: ${typeof topic.depth === 'number' ? topic.depth : 1},
    follow_ups: {
      en: ${safeArr(topic.follow_ups?.en)},
      zh: ${safeArr(topic.follow_ups?.zh)}
    },
    safe_for_work: true
  },`;
}

/**
 * 核心生成函数：流式请求 AI
 */
async function generateBatch(batchIndex) {
  console.log(`\n🔵 [Batch ${batchIndex + 1}/${TARGET_BATCHES}] 请求 AI 生成中...`);
  console.log('--------------------------------------------------');

  try {
    const stream = await openai.chat.completions.create({
      messages: [{ role: "system", content: SYSTEM_PROMPT }],
      model: MODEL_NAME,
      temperature: 0.85, 
      stream: true,      // 开启流式传输
      seed: Date.now(),  // 随机种子，确保每次请求不同
      response_format: { type: "json_object" },
    });

    let fullContent = '';

    // 实时打印 AI 的输出
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      process.stdout.write(content); // 不换行输出，看起来很酷
      fullContent += content;
    }

    console.log('\n--------------------------------------------------');

    // 简单的清洗逻辑
    let cleanContent = fullContent.replace(/```json/g, '').replace(/```/g, '').trim();

    // 解析 JSON
    const parsed = JSON.parse(cleanContent);
    
    // 智能提取数组（兼容 AI 可能包裹在 { data: [...] } 或 { topics: [...] } 中的情况）
    let dataArr = [];
    if (Array.isArray(parsed)) {
      dataArr = parsed;
    } else {
      // 遍历对象的键，寻找第一个是数组的值
      for (const key in parsed) {
        if (Array.isArray(parsed[key])) {
          dataArr = parsed[key];
          break;
        }
      }
    }

    if (dataArr.length === 0) {
      throw new Error("解析结果不是数组或数组为空");
    }

    return dataArr;

  } catch (error) {
    // 捕获所有错误（网络、解析等），抛出给主循环处理，防止 crash
    throw error;
  }
}

async function main() {
  const filePath = path.join(__dirname, OUTPUT_FILE);
  
  // 1. 初始化文件（如果文件不存在则创建，存在则追加）
  // 可以在这里写一个文件头，但因为你是追加到 data.ts，我们直接写内容更方便
  console.log(`🚀 任务开始！`);
  console.log(`📝 结果将实时流式写入: ${OUTPUT_FILE}`);
  console.log(`🔢 起始 ID: t-${START_ID_NUM}`);

  let currentIdCounter = START_ID_NUM;
  let successCount = 0;

  for (let i = 0; i < TARGET_BATCHES; i++) {
    try {
      // 获取原始数据
      const rawTopics = await generateBatch(i);
      
      let batchTSString = "";
      
      // 处理 ID 并转换为 TS 格式
      for (const topic of rawTopics) {
        const idString = `t-${String(currentIdCounter).padStart(3, '0')}`;
        
        // 构造完整的对象
        const processedTopic = {
          ...topic,
          id: idString
        };

        // 转换为字符串
        batchTSString += formatTopicToTS(processedTopic) + "\n";
        currentIdCounter++;
      }

      // 💾 关键步骤：立即写入文件（追加模式）
      fs.appendFileSync(filePath, batchTSString, 'utf8');

      successCount += rawTopics.length;
      console.log(`✅ [Batch ${i + 1}] 成功保存 ${rawTopics.length} 条数据。总计: ${successCount} 条`);

    } catch (err) {
      // 🛡️ 错误处理：打印红色错误，但继续循环
      console.error(`\n❌ [Batch ${i + 1}] 失败，跳过此批次。原因: ${err.message}`);
      // 可以在这里加一个 sleep，防止 API 速率限制导致的连续报错
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log(`\n🎉 任务结束！`);
  console.log(`📊 共成功生成并保存: ${successCount} 条`);
  console.log(`📂 文件路径: ${filePath}`);
}

main();