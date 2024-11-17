interface EnvConfig {
  API_URL: string;
  USE_MOCK_DATA: boolean;
}

export const config: EnvConfig = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  USE_MOCK_DATA: import.meta.env.VITE_USE_MOCK_DATA === 'true' || true,
};