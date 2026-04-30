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
      <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 space-y-2">
            <h2 className="truncate text-lg font-extrabold tracking-tight text-slate-900">{task.title}</h2>
            <p className="text-sm leading-relaxed text-slate-600">{task.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isDone
                  ? "border border-emerald-200 bg-emerald-100 text-emerald-700"
                  : "border border-slate-200 bg-slate-100 text-slate-700"
              }`}
            >
              {isDone ? "Status: Done" : "Status: To Do"}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                task.priority === "High"
                  ? "border border-red-200 bg-red-100 text-red-700"
                  : task.priority === "Medium"
                  ? "border border-amber-200 bg-amber-100 text-amber-700"
                  : "border border-green-200 bg-green-100 text-green-700"
              }`}
            >
              Priority: {task.priority}
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-3 border-t border-slate-100 pt-4">
          <button
            onClick={handleUpdate}
            className={`rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition ${
              isDone
                ? "bg-slate-500 hover:bg-slate-600"
                : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
            }`}
          >
            {isDone ? "Undo" : "Mark as Done"}
          </button>
          <button
            onClick={handleDelete}
            className="rounded-lg bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-red-700 hover:to-rose-700"
          >
            Delete
          </button>
        </div>
      </div>
    )
  }

  
  export default TaskCard