import { useState } from "react"
import { addTask } from "../service/taskService"
import { useNavigate } from "react-router-dom"

function AddTask() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("Pending")
  const [priority, setPriority] = useState("Medium")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await addTask({ title, description, status, priority })

    navigate("/tasks")
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Add Task</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full border p-2 rounded"
    >
    <option value="Pending">Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Done">Done</option>
    </select>
      
    <select
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
    className="w-full border p-2 rounded"
    >
   <option value="Low">Low</option>
   <option value="Medium">Medium</option>
   <option value="High">High</option>
   </select>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  )
}

export default AddTask