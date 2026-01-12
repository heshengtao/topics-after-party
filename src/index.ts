// src/index.ts
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import topicApp from './app' // 引入上面的逻辑

const app = new Hono()

// 1. 挂载 API
// 访问 /api/topic 时，会进入 topicApp 处理
app.route('/api', topicApp)

// 2. 挂载静态网页
app.use('/*', serveStatic({ root: './public' }))

// 3. 启动服务
const port = 3000
console.log(`Starting server on port ${port}...`)

serve({
  fetch: app.fetch,
  port: port,
  hostname: '0.0.0.0'
}, (info) => {
  console.log(`✅ Server running at http://${info.address}:${info.port}`)
})