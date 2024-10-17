import express from 'express'
import { PORT } from './config/env-config'
import { DatabaseService } from './config/database'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
new DatabaseService()

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
