// src/app.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { topics, ResponseTopic } from './data'

// 关键修改 1: 使用 basePath('/api')，这样 Hono 会自动处理前缀
const app = new Hono().basePath('/api')

app.use('/*', cors())

// 关键修改 2: 这里的路径只写 '/topic'，不要写 '/api/topic'
// 因为 basePath 已经包含了 '/api'
app.get('/topic', (c) => {
  const query = c.req.query()
  const reqLocale = query.locale === 'zh-CN' ? 'zh' : 'en' 
  const limit = parseInt(query.limit || '1')
  const mood = query.mood
  const category = query.category
  const depth = query.depth ? parseInt(query.depth) : undefined
  const excludeIds = query.exclude ? query.exclude.split(',') : []

  let filtered = topics.filter(t => {
    if (excludeIds.includes(t.id)) return false
    if (mood && t.mood !== mood) return false
    if (depth !== undefined && t.depth !== depth) return false
    if (category) {
        const catEn = t.category.en.toLowerCase()
        const catZh = t.category.zh
        const search = category.toLowerCase()
        if (catEn !== search && catZh !== search) return false
    }
    return true
  })

  if (filtered.length === 0) {
    filtered = topics.filter(t => !excludeIds.includes(t.id))
  }

  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  const sliced = filtered.slice(0, limit)
  const responseData: ResponseTopic[] = sliced.map(t => ({
    id: t.id,
    text: t.text[reqLocale],
    category: t.category[reqLocale],
    tags: t.tags[reqLocale],
    follow_ups: t.follow_ups[reqLocale],
    mood: t.mood,
    depth: t.depth,
    safe_for_work: t.safe_for_work
  }))

  return c.json({
    code: 200,
    locale: query.locale || 'en-US',
    count: responseData.length,
    data: responseData
  })
})

export default app