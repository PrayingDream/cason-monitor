import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 让 @ 指向 src
    },
  },
  server: {
    port: 8001,
    open: true,
    proxy: {
      '/upTimeRobotApi': {
        target: 'https://api.uptimerobot.com/v3', // 第三方 API 地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upTimeRobotApi/, '')
      }
    }
  },
})
