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

### 1. Get Random Topic

Retrieve one or more filtered random topics.

```http
GET /api/topic
```

**Query Parameters**

| Parameter | Type | Required | Default | Description | Example |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `locale` | string | No | `en-US` | Response language. Options: `zh-CN` or `en-US` | `zh-CN` |
| `limit` | number | No | `1` | Number of topics to return | `3` |
| `mood` | string | No | Random | Filter by emotional tone | `flirty` |
| `depth` | number | No | Random | Topic depth (1-5) | `4` |
| `category` | string | No | Any | Filter by category (supports Chinese and English) | `Life Planning` |
| `exclude` | string | No | - | IDs to exclude (comma-separated), used for client-side deduplication | `t-001,t-003` |

**Parameter Details:**
*   **mood**: `positive`, `neutral`, `curious`, `flirty`
*   **depth**:
    *   `1`: Icebreaker (Survival)
    *   `2`: Light (Chat/Life)
    *   `3`: Deep (Heartfelt/Opinion)
    *   `4`: Love (Flirty/Romance)
    *   `5`: Soul (Philosophical)
*   **category**: Use the `/api/categories` endpoint to get the latest list.

**Response Example**

```json
{
  "code": 200,
  "locale": "zh-CN",
  "count": 1,
  "data": [
    {
      "id": "t-003",
      "text": "If you didn't have to consider reality, where would you most want to go on a date with me?",
      "category": "Romantic Fantasy",
      "tags": ["Date", "Travel", "Romantic"],
      "follow_ups": [
        "Is there any special scenery there?",
        "How long would we stay there?"
      ],
      "mood": "flirty",
      "depth": 4,
      "safe_for_work": true
    }
  ]
}
```

### 2. Get Category List

Retrieve all currently available topic categories for frontend filter menu display. The system automatically deduplicates based on topic data.

```http
GET /api/categories
```

**Query Parameters**

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `locale` | string | No | `en-US` | Language for returned category names. Options: `zh-CN` or `en-US` |

**Response Example**

```json
{
  "code": 200,
  "locale": "zh-CN",
  "count": 11,
  "data": [
    "Workplace",
    "Life Planning",
    "Love",
    "Sci-Fi",
    "History",
    "Psychology",
    "Literature",
    "Flirty",
    "Mysticism",
    "Food",
    "Travel"
  ]
}
```

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