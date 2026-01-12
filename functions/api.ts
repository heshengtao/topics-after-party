// functions/api.ts
import { handle } from 'hono/netlify'
import app from '../src/app' // 导入同一个核心逻辑

// Netlify 只需要这一行，把 App 转换成 Serverless Function
export const handler = handle(app)