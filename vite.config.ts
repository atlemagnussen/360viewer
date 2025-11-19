import { defineConfig } from "vite"
import path from "path"

const thisFolder = path.resolve(process.cwd())
const srcFolder = path.join(thisFolder, "src")
const publicFolder = path.join(thisFolder, "public")

const externals = [
  'oidc-client-ts'
]

export default defineConfig({
  server: {
    port: 8000,
    strictPort: true
  },
  root: srcFolder,
  publicDir: publicFolder,
  resolve: {
    alias: {
      "@3d": srcFolder
    }
  },
  build: {
    rollupOptions: {
      external: externals,
      output: {
        globals: {
        },
        sourcemap: true
      }
    },
    target: 'esnext'
  },
  optimizeDeps: {
    exclude: externals
  }
})
