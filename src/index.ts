// src/index.ts
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { topics, ResponseTopic } from './data'

const app = new Hono()

app.use('/*', cors())
app.use('/*', serveStatic({ root: './public' }))

app.get('/api/topic', (c) => {
  const query = c.req.query()
  
  // 核心改动：默认 en，如果是 zh-CN 则返回 zh
  const reqLocale = query.locale === 'zh-CN' ? 'zh' : 'en' 
  
  const limit = parseInt(query.limit || '1')
  const mood = query.mood
  const category = query.category
  const depth = query.depth ? parseInt(query.depth) : undefined
  const excludeIds = query.exclude ? query.exclude.split(',') : []

  // 1. 筛选
  let filtered = topics.filter(t => {
    if (excludeIds.includes(t.id)) return false
    if (mood && t.mood !== mood) return false
    if (depth !== undefined && t.depth !== depth) return false
    
    // 分类匹配：稍微放宽，匹配中文或英文名均可
    if (category) {
        const catEn = t.category.en.toLowerCase()
        const catZh = t.category.zh
        const search = category.toLowerCase()
        if (catEn !== search && catZh !== search) return false
    }

    return true
  })

  // 2. 防空：如果条件太苛刻没找到，就放宽条件只保留“去重”逻辑
  if (filtered.length === 0) {
    filtered = topics.filter(t => !excludeIds.includes(t.id))
  }

  // 3. 随机打乱
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  // 4. 截取并转换语言
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

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})