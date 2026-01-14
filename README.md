<div align="center">

  # 💬 Topics After Party

</div>

<div align="center">

<div align="center">
  <a href="./README_ZH.md">
    <img src="https://img.shields.io/badge/简体中文-自述文档-00B4AB?style=for-the-badge&logo=markdown"/>
  </a>
  <a href="./README.md">
    <img src="https://img.shields.io/badge/English-Readme-0057D2?style=for-the-badge&logo=markdown"/>
  </a>
</div>

**Real-time random topic generation API designed for AI companions, virtual girlfriend/boyfriend projects**

Keep your AI chats alive with unlimited conversation inspiration.

[![Zeabur](https://img.shields.io/badge/Zeabur-在线演示-6332f6?logo=zeabur&logoColor=white)](https://topics-after-party.zeabur.app/)
![License](https://img.shields.io/badge/license-Apache--2.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Hono](https://img.shields.io/badge/Hono-Fast-orange)

</div>

---

## 📖 Introduction

**Topics After Party** is a lightweight, high-performance random topic API. It is tailor-made for LLMs (large language models), AI companion apps, and chatbots.

When your AI runs out of things to say or the user falls silent, a single call to this API instantly returns a high-quality “ice-breaker” topic. Fine-grained filters for **intimacy (depth)**, **mood**, and **category** make it perfect for every scenario—from stranger ice-breakers to soulmate conversations.

### ✨ Features
*   **Bilingual support**: Native `zh-CN` (Chinese) and `en-US` (English).
*   **Multi-dimensional filtering**: Filter by Mood, Depth (1-5), and Category.
*   **Zero dependencies**: Built on the Hono framework for lightning-fast responses—no cold-start anxiety.
*   **Dual deployment**: Works on both Node.js (Zeabur) and Serverless (Netlify).
*   **Interactive Playground**: Beautiful macOS-style test page with code generation.

---

## 🚀 Live Demo

We provide a visual Playground where you can tweak parameters and test API responses right in the browser:

*   **Primary node (recommended, fast in China)**: [https://topics-after-party.zeabur.app/](https://topics-after-party.zeabur.app/)
*   **Backup node**: [https://topics-after-party.netlify.app/](https://topics-after-party.netlify.app/)

---

## 🛠 API Reference

### Base Endpoint

```http
GET /api/topic
```

### Query Parameters

| Parameter | Type | Required | Default | Description | Example |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `locale` | string | No | `en-US` | Response language. Options: `zh-CN` or `en-US` | `zh-CN` |
| `limit` | number | No | `1` | Number of topics to return | `3` |
| `mood` | string | No | Random | Emotional tone filter | `flirty` |
| `depth` | number | No | Random | Topic depth (1-5) | `4` |
| `category` | string | No | Any | Topic category filter | `Life Planning` |
| `exclude` | string | No | - | IDs to exclude (comma-separated), for client-side deduplication | `t-001,t-003` |

#### Parameter Details:
*   **mood**: `positive`, `neutral`, `curious`, `flirty`
*   **depth**:
    *   `1`: Icebreaker
    *   `2`: Light
    *   `3`: Deep
    *   `4`: Love
    *   `5`: Soul
*   **Category**
    *   `Life Planning`
    *   `Career`
    *   `Love`
    *   ...To be continued

### Response Example

```json
{
  "code": 200,
  "locale": "zh-CN",
  "count": 1,
  "data": [
    {
      "id": "t-003",
      "text": "如果不考虑现实因素，你最想和我一起去哪里约会？",
      "category": "恋爱幻想",
      "tags": ["约会", "旅行", "浪漫"],
      "follow_ups": [
        "那里有什么特别的风景吗？",
        "我们要在那边待多久？"
      ],
      "mood": "flirty",
      "depth": 4,
      "safe_for_work": true
    }
  ]
}
```

---

## 💻 Integration Examples

### JavaScript / TypeScript

```javascript
const res = await fetch('https://topics-after-party.zeabur.app/api/topic?locale=zh-CN&mood=flirty');
const json = await res.json();
console.log(json.data[0].text); 
// Output: "如果不考虑现实因素，你最想和我一起去哪里约会？"
```

### Python

```python
import requests

url = "https://topics-after-party.zeabur.app/api/topic"
params = {
    "locale": "zh-CN",
    "depth": 5
}

response = requests.get(url, params=params)
data = response.json()
print(data['data'][0]['text'])
```

---

## 📦 Local Development

To deploy or modify the data yourself:

1.  **Clone the repo**
    ```bash
    git clone https://github.com/heshengtao/topics-after-party.git
    cd topics-after-party
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the dev server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` to see the demo page.

---

## 🤖 Generate New Topics

You can use the `generate_topics.js` script to generate new topic data and update `new_topics.ts.txt` into the `src/data.ts` file.

```bash
npm install
node generate_topics.js
```

---

## 🤝 Contributing

Pull Requests and Issues are welcome to improve this project together.

You can submit your topics in the `topics` array on the [topic data page](https://github.com/heshengtao/topics-after-party/blob/main/src/data.ts) to help enrich this API.

```typescript
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
  // More topics...
];
```

---

## 📝 License

This project is licensed under [Apache-2.0](./LICENSE).

---