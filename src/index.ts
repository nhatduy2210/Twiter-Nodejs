const express = require('express')
const app = express()
const port = 3000
import databaseService from './services/database.services'
// respond with "hello world" when a GET request is made to the homepage
import usersRouter from './routes/users.routes'
app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()
//khai báo microware
//mã lỗi sẽ nhảy vào đây
app.use((error, req, res, next) => {
  console.log('Lỗi là',error.message)
  res.status(404).json({
    error: error.message
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
