// src/index.ts
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import apiApp from './app'

const app = new Hono()

// 1. 挂载 API
// apiApp 内部处理 /api/topic，所以我们挂载在 /
app.route('/', apiApp)

// 2. 挂载静态网页
// 放在 API 路由之后。如果上面的 /api/topic 没匹配到，才会往下走这里
app.use('/*', serveStatic({ root: './public' }))

// 启动服务
const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
  hostname: '0.0.0.0'
})