import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // Esta función permite cualquier subdominio de tunnelmole.net
    allowedHosts: [
      (hostname) => {
        return typeof hostname === 'string' && hostname.endsWith('.tunnelmole.net')
      }
    ]
  }
})
