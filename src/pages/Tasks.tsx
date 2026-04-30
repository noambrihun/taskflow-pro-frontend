import TaskCard from "../components/TaskCard"

function Tasks() {
  const tasks = [
    {
      _id: "1",
      title: "Learn React",
      description: "Study hooks and components",
      completed: false
    },
    {
      _id: "2",
      title: "Build Project",
      description: "Create TaskFlow app",
      completed: true
    }
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  )
}

export default Tasks