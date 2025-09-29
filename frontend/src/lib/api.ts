const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// Auth API
export const authAPI = {
  login: async (email: string) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    if (!response.ok) throw new Error('Login failed')
    return response.json()
  },

  verify: async (token: string) => {
    const response = await fetch(`${API_URL}/api/auth/verify`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    if (!response.ok) throw new Error('Token verification failed')
    return response.json()
  },

  logout: async () => {
    const response = await fetch(`${API_URL}/api/auth/logout`, {
      method: 'POST'
    })
    if (!response.ok) throw new Error('Logout failed')
    return response.json()
  }
}

// News API
export const newsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/api/news`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch news')
    return response.json()
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_URL}/api/news/${id}`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch news')
    return response.json()
  },

  create: async (data: any, token: string) => {
    const response = await fetch(`${API_URL}/api/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('Failed to create news')
    return response.json()
  },

  update: async (id: string, data: any, token: string) => {
    const response = await fetch(`${API_URL}/api/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('Failed to update news')
    return response.json()
  },

  delete: async (id: string, token: string) => {
    const response = await fetch(`${API_URL}/api/news/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    })
    if (!response.ok) throw new Error('Failed to delete news')
    return response.json()
  }
}

// Projects API
export const projectsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/api/projects`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch projects')
    return response.json()
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_URL}/api/projects/${id}`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch project')
    return response.json()
  },

  create: async (data: any, token: string) => {
    const response = await fetch(`${API_URL}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('Failed to create project')
    return response.json()
  },

  update: async (id: string, data: any, token: string) => {
    const response = await fetch(`${API_URL}/api/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('Failed to update project')
    return response.json()
  },

  delete: async (id: string, token: string) => {
    const response = await fetch(`${API_URL}/api/projects/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    })
    if (!response.ok) throw new Error('Failed to delete project')
    return response.json()
  }
}

// Legacy export for backward compatibility
export const api = {
  login: authAPI.login,
  getNews: newsAPI.getAll,
  getNewsById: newsAPI.getById,
  createNews: newsAPI.create,
  updateNews: newsAPI.update,
  deleteNews: newsAPI.delete,
  getProjects: projectsAPI.getAll,
  getProjectById: projectsAPI.getById,
  createProject: projectsAPI.create,
  updateProject: projectsAPI.update,
  deleteProject: projectsAPI.delete
}