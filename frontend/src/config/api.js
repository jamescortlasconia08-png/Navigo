// Get API base URL from environment, default to production
const API_BASE = import.meta.env.VITE_API || 'https://navigo-3bbb.onrender.com';
const api = `${API_BASE}/api`;

export default api;
