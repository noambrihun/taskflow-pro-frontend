import './index.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import AddTask from './pages/AddTask'
import Sidebar from './components/Sidebar'

function App() {
  return (
   <div className="flex">
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 p-6">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </div>

  </div>
  )
}

export default App
