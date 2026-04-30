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
    <div className="min-h-full space-y-5 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 p-5">
      <div className="mb-2 rounded-xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Tasks</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your tasks by priority and status</p>
      </div>

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onUpdate={fetchTasks} />
      ))}
    </div>
  )
}

export default Tasks