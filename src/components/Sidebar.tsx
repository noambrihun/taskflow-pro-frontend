import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen w-64">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <nav>
        <Link to="/dashboard" className="block p-2 rounded-md hover:bg-gray-800">
          Dashboard
        </Link>
        <Link to="/tasks" className="block p-2 rounded-md hover:bg-gray-800">
          Tasks
        </Link>
        <Link to="/add-task" className="block p-2 rounded-md hover:bg-gray-800">
          Add Task
        </Link>
      </nav>
     
    </div>
  )
}

export default Sidebar