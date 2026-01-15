// src/index.js
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import topicApp from './app.js'

const app = new Hono()

// 1. 挂载 API
app.route('/api', topicApp)

// 2. 挂载静态网页 (确保 public 文件夹里有 index.html)
app.use('/*', serveStatic({ root: './public' }))

// 3. 启动服务 - 关键修改点
// Zeabur 会把端口通过环境变量 PORT 传进来，必须优先使用它
const port = parseInt(process.env.PORT) || 3000

console.log(`Starting server on port ${port}...`)

serve({
  fetch: app.fetch,
  port: port,
  hostname: '0.0.0.0'
}, (info) => {
  console.log(`✅ Server running at http://${info.address}:${info.port}`)
})