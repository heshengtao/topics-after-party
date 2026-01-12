// src/index.ts
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import apiApp from './app'

// 创建一个根 App
const app = new Hono()

// 1. 挂载 API (它自己带有 basePath '/api')
// 当请求 /api/topic 时，会被路由到 apiApp
app.route('/', apiApp)

// 2. 挂载静态网页 (到根路径)
// 只有在非 /api 开头时，才会去 public 找文件
app.use('/*', serveStatic({ root: './public' }))

// 启动服务
const port = Number(process.env.PORT) || 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
  hostname: '0.0.0.0'
})