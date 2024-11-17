export const config = {
  USE_MOCK_DATA: process.env.VITE_USE_MOCK_DATA !== 'false',
  API_URL: process.env.VITE_API_URL || 'http://localhost:3000/api',
};