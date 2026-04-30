import { deleteTask, updateTask } from "../service/taskService"
type Task = {
    _id: string
    title: string
    description: string
    completed: boolean
    status: string
    priority: string
  }
  
  type Props = {
    task: Task,
    onUpdate: () => void | Promise<void>
  }
  
  function TaskCard({ task, onUpdate }: Props) {
    const isDone = task.status?.toLowerCase() === "done" || task.completed

    const handleDelete = async () => {
      await deleteTask(task._id)
      onUpdate()
    }

    const handleUpdate = async () => {
      await updateTask(task._id, {
        status: isDone ? "To Do" : "Done",
        completed: !isDone
      })
      onUpdate()
    }
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
        
         <div>
          <h2 className="text-lg font-bold">{task.title}</h2>
          <p className="text-gray-600">{task.description}</p>
         </div>
         <div>
           <p className={`text-sm font-semibold ${
            task.priority === "High"
            ? "text-red-500"
            : task.priority === "Medium"
            ? "text-yellow-500"
            : "text-green-500"
     }`}>
      Priority: <span className="font-bold">{task.priority}</span>
          </p>
        </div>
        <div className="flex gap-3">
        <button
          onClick={handleUpdate}
          className={`text-white w-24 px-3 py-2 rounded-md ${
            isDone ? "bg-gray-500" : "bg-green-500"
          }`}
        >
          {isDone ? "Undo" : "Mark as Done"}
        </button>
    </div>
      <button onClick={handleDelete} className="bg-red-500 text-white w-24 px-3 py-2 rounded-md">
        Delete
      </button>
      </div>
    )
  }

  
  export default TaskCard