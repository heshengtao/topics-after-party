<div align="center">

  # 💬 Topics After Party

</div>

<div align="center">
  <a href="./README_ZH.md">
    <img src="https://img.shields.io/badge/简体中文-自述文档-00B4AB?style=for-the-badge&logo=markdown"/>
  </a>
  <a href="./README.md">
    <img src="https://img.shields.io/badge/English-Readme-0057D2?style=for-the-badge&logo=markdown"/>
  </a>
</div>

**为 AI 伴侣、虚拟女友/男友项目设计的实时随机话题生成 API**

让你的 AI 聊天不再冷场，拥有无限的对话灵感。

[在线演示 (Zeabur)](https://topics-after-party.zeabur.app/) | [备用镜像 (Netlify)](https://topics-after-party.netlify.app/)

![License](https://img.shields.io/badge/license-Apache--2.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Hono](https://img.shields.io/badge/Hono-Fast-orange)

</div>

---

## 📖 简介 (Introduction)

**Topics After Party** 是一个轻量级、高性能的随机话题 API。它专为 LLM（大语言模型）、AI 伴侣应用和聊天机器人设计。

当你的 AI 不知道该聊什么，或者用户陷入沉默时，调用此 API 可以瞬间获得一个高质量的“破冰话题”。支持按**亲密度（深度）**、**情绪**和**分类**进行精细化过滤，完美适配从陌生人破冰到灵魂伴侣的各种场景。

### ✨ 特性
*   **双语支持**：原生支持 `zh-CN` (中文) 和 `en-US` (英文)。
*   **多维过滤**：支持按情绪 (Mood)、深度 (Depth 1-5)、分类 (Category) 筛选。
*   **零依赖**：基于 Hono 框架，极速响应，无冷启动焦虑。
*   **双端部署**：同时适配 Node.js (Zeabur) 和 Serverless (Netlify)。
*   **交互式 Playground**：自带精美的 MacOS 风格测试页面，支持代码生成。

---

## 🚀 在线演示 (Live Demo)

我们提供了可视化的 Playground，你可以直接在网页上调整参数并测试 API 响应：

*   **主节点 (推荐，国内访问快)**: [https://topics-after-party.zeabur.app/](https://topics-after-party.zeabur.app/)
*   **备用节点**: [https://topics-after-party.netlify.app/](https://topics-after-party.netlify.app/)

---

## 🛠 API 文档 (API Reference)

### 基础接口 (Base Endpoint)

```http
GET /api/topic
```

### 请求参数 (Query Parameters)

| 参数 | 类型 | 必填 | 默认值 | 说明 | 示例 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `locale` | string | 否 | `en-US` | 返回语言。可选 `zh-CN` 或 `en-US` | `zh-CN` |
| `limit` | number | 否 | `1` | 返回的话题数量 | `3` |
| `mood` | string | 否 | Random | 情感基调过滤 | `flirty` |
| `depth` | number | 否 | Random | 话题深度 (1-5) | `4` |
| `category` | string | 否 | Any | 话题分类过滤 | `Life Planning` |
| `exclude` | string | 否 | - | 排除的 ID (逗号分隔)，用于客户端去重 | `t-001,t-003` |

#### 参数详解：
*   **mood (情绪)**: `positive` (积极), `neutral` (中性), `curious` (好奇), `flirty` (暧昧/调情)
*   **depth (深度)**:
    *   `1`: Icebreaker (破冰/生存)
    *   `2`: Light (闲聊/生活)
    *   `3`: Deep (走心/观点)
    *   `4`: Love (暧昧/恋爱)
    *   `5`: Soul (灵魂/哲学)

### 响应示例 (Response Example)

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

## 💻 代码集成示例 (Integration)

### JavaScript / TypeScript

```javascript
const res = await fetch('https://topics-after-party.zeabur.app/api/topic?locale=zh-CN&mood=flirty');
const json = await res.json();
console.log(json.data[0].text); 
// 输出: "如果不考虑现实因素，你最想和我一起去哪里约会？"
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

## 📦 本地开发 (Local Development)

如果你想自己部署或修改数据：

1.  **克隆仓库**
    ```bash
    git clone https://github.com/heshengtao/topics-after-party.git
    cd topics-after-party
    ```

2.  **安装依赖**
    ```bash
    npm install
    ```

3.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    访问 `http://localhost:3000` 即可看到演示页面。