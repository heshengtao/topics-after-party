// functions/api.ts
import { Hono } from 'hono'
import topicApp from '../src/app'

// 1. 在这里也要创建一个父级 App
const app = new Hono()

// 2. 同样把逻辑挂载到 /api
// 这样路径就能对上：/api/topic
app.route('/api', topicApp)

// 3. 终极修复：使用 Netlify V2 标准写法
// 不用 adapter，直接把 Request 扔给 Hono 处理
export default async (req: Request, context: any) => {
  return app.fetch(req)
}