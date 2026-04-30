type Task = {
    _id: string
    title: string
    description: string
    completed: boolean
    status: string
    priority: string
  }
  
  type Props = {
    task: Task
  }
  
  function TaskCard({ task }: Props) {
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

        <div className="flex gap-2">
          <button className="bg-green-500 text-white w-24 px-3 py-2 rounded-md">
            {task.completed ? "Done" : "Mark as Done"}
          </button>
  
          <button className="bg-red-500 text-white w-24 px-3 py-2 rounded-md">
            Delete
          </button>
        </div>
  
      </div>
    )
  }
  
  export default TaskCard