const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// Auth token management
export const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('omran_admin_token')
  }
  return null
}

export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('omran_admin_token', token)
  }
}

export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('omran_admin_token')
  }
}

// Generic API call function
async function apiCall(endpoint: string, options: RequestInit = {}) {
  const token = getAuthToken()
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config)
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'An error occurred' }))
    throw new Error(error.error || error.message || `HTTP ${response.status}`)
  }

  return response.json()
}

// Auth API functions
export const authAPI = {
  login: async (email: string) => {
    const response = await apiCall('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
    
    if (response.token) {
      setAuthToken(response.token)
    }
    
    return response
  },

  verify: async () => {
    return apiCall('/api/auth/verify')
  },

  logout: async () => {
    removeAuthToken()
    return apiCall('/api/auth/logout', { method: 'POST' })
  }
}

// Enhanced News API functions with CRUD operations
export const newsAPI = {
  getAll: async () => {
    return apiCall('/api/news')
  },

  getById: async (id: string) => {
    return apiCall(`/api/news/${id}`)
  },

  create: async (data: {
    title: string
    summary: string
    content: string
    category: string
  }) => {
    return apiCall('/api/news', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  update: async (id: string, data: {
    title: string
    summary: string
    content: string
    category: string
  }) => {
    return apiCall(`/api/news/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },

  delete: async (id: string) => {
    return apiCall(`/api/news/${id}`, {
      method: 'DELETE',
    })
  }
}

// Enhanced Projects API functions with CRUD operations
export const projectsAPI = {
  getAll: async () => {
    return apiCall('/api/projects')
  },

  getById: async (id: string) => {
    return apiCall(`/api/projects/${id}`)
  },

  create: async (data: {
    title: string
    location: string
    price: string
    type: string
    description?: string
  }) => {
    return apiCall('/api/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  update: async (id: string, data: {
    title: string
    location: string
    price: string
    type: string
    description?: string
  }) => {
    return apiCall(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },

  delete: async (id: string) => {
    return apiCall(`/api/projects/${id}`, {
      method: 'DELETE',
    })
  }
}