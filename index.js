import express from 'express'

const app = express()
app.use(express.json())

const logger = (req, res, next) => {
  console.log(req.method, req.url)
  next()
}

app.use(logger)

const tasks = [
  {
    id: 1,
    taskName: 'get milk',
    taskDesc: 'go to shop and get one milk carton'
  },
  {
    id: 2,
    taskName: 'learn',
    taskDesc: 'learn backend development'
  }
]

app.get('/api/health', (req, res) => {
  res.send('Up and Running')
})

app.get('/api/tasks', (req, res) => {
  console.log(`requests received on /api/tasks`)
  res.send(tasks)
})

app.get('/api/tasks/:id', (req, res) => {
  const id = req.params.id
  const task = tasks.find((task) => task.id === parseInt(id, 10))
  if (task) {
    return res.send(task)
  }
  return res.send('task not found')
})

app.post('/api/tasks', (req, res) => {
  const task = req.body
  task.id = movies.length + 1
  console.log({ body: req.body })
  tasks.push(task)
  res.send({ success: true })
})

app.put('/api/tasks/:id', (req, res) => {
  const id = req.params.id
  const task = req.body
  task.id = parseInt(id, 10)
  console.log(task.id)
  tasks[id - 1] = task
  res.send({ success: true })
})

app.delete('/api/tasks/:id', (req, res) => {
  let delTaskId = req.params.id
  delTaskId = parseInt(delTaskId, 10)
  const filteredTasks = tasks.filter((task) => task.id === delTaskId)
  tasks.splice(filteredTasks[0].id-1,1)
  res.send({ success: true })
})


app.listen(3000, () => {
  console.log('server running successfully on port 3000')
})
