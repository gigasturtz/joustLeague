import express from 'express'
const app = express()
const port = 3000
import { doIt } from './event'

app.get('/', (req, res) => {
  doIt()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})