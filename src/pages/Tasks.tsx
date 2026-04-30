import TaskCard from "../components/TaskCard"
import { useState, useEffect } from "react"
import { getTasks } from "../service/taskService"
  type Task = {
    _id: string
    title: string
    description: string
    completed: boolean
    status: string
    priority: string
  }
function Tasks() {
  const [tasks, setTasks] = useState <Task[]>([])

  const fetchTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  
  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onUpdate={fetchTasks} />
      ))}
    </div>
  )
}

export default Tasks