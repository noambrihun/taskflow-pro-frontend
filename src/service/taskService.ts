const BASE_URL = "https://taskflow-pro-backend-2s1g.onrender.com/api/tasks"

export const getTasks = async () => {
  const res = await fetch(BASE_URL)
  const data = await res.json()
  return data
}

export const addTask = async (task: { title: string; description: string; status: string; priority: string }) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  return data
}

export const updateTask = async (id: string,updateTask : any) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateTask)
  })
  const data = await res.json()
  return data
}

export const deleteTask = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  })
}