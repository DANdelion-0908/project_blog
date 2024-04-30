import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@clientviews': 'client-frontend/src/views',
      '@clientassets': 'client-frontend/src/assets',
      '@clientstyles': 'client-frontend/src/styles',
      '@clientcomponents': 'client-frontend/src/components'
    }
}
})
