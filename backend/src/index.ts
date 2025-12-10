import express from 'express'
import cors from 'cors'
import todoRoutes from './routes/todos.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/todos', todoRoutes)

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})

