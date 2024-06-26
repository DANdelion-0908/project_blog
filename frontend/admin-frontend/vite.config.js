import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@views': '/src/views',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@components': '/src/components'
    }
}
})
