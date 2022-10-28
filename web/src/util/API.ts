const BASE_URL = 'http://localhost:3000/v1'

async function apiCall(path: string, method: 'GET' | 'POST' | 'DELETE', body?: any) {
  const res = await fetch(`${BASE_URL}/${path}`, {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
    },
    method,
    body,
  })
  return await res.json()
}

export default {
  async get(path: string) {
    return await apiCall(path, 'GET')
  },

  async post(path: string, body?: any) {
    return await apiCall(path, 'POST', body)
  },

  async 'delete'(path: string) {
    return await apiCall(path, 'DELETE')
  },
}