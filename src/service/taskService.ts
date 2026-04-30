const BASE_URL = "https://taskflow-pro-backend-2s1g.onrender.com/api/tasks"

export const getTasks = async () => {
  const res = await fetch(BASE_URL)
  const data = await res.json()
  return data
}