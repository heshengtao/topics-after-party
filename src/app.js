// src/app.js
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { topics } from './data.js' // 注意这里要有 .js 后缀

const app = new Hono()

app.use('/*', cors())

app.get('/categories', (c) => {
  const query = c.req.query()
  const reqLocale = query.locale === 'zh-CN' ? 'zh' : 'en'

  const allCategories = topics.map(t => t.category[reqLocale])
  const uniqueCategories = [...new Set(allCategories)]

  uniqueCategories.sort((a, b) => a.localeCompare(b, reqLocale === 'zh' ? 'zh-Hans-CN' : 'en'))

  return c.json({
    code: 200,
    locale: query.locale || 'en-US',
    count: uniqueCategories.length,
    data: uniqueCategories
  })
})

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

  // Fisher-Yates Shuffle
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  const sliced = filtered.slice(0, limit)
  
  const responseData = sliced.map(t => ({
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