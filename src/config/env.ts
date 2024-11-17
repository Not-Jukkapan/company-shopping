export const config = {
  USE_MOCK_DATA: import.meta.env.VITE_USE_MOCK_DATA !== 'false',
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
};