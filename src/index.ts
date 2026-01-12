// src/index.ts
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import app from './app' // 导入刚才拆出来的核心逻辑

// 1. 专门为 Node 环境 (Zeabur) 增加静态文件托管
// Netlify 不需要这行，因为它有自己的 CDN
app.use('/*', serveStatic({ root: './public' }))

// 2. 启动服务
const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})