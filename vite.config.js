import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Blog chapters
        prologue: resolve(__dirname, 'blog/prologue.html'),
        'part-1/accident': resolve(__dirname, 'blog/part-1/accident.html'),
        'part-1/ship': resolve(__dirname, 'blog/part-1/ship.html'),
        'part-2/daily-log': resolve(__dirname, 'blog/part-2/daily-log.html'),
        'part-2/silence': resolve(__dirname, 'blog/part-2/silence.html'),
        'part-3/signals': resolve(__dirname, 'blog/part-3/signals.html'),
        epilogue: resolve(__dirname, 'blog/epilogue.html'),
        // Survival Manual
        'manual/life-support': resolve(__dirname, 'manual/life-support.html'),
        'manual/eva-emergency': resolve(__dirname, 'manual/eva-emergency.html'),
        'manual/psychological': resolve(__dirname, 'manual/psychological.html'),
        'manual/navigation': resolve(__dirname, 'manual/navigation.html'),
        'manual/rationing': resolve(__dirname, 'manual/rationing.html'),
        'manual/improvisation': resolve(__dirname, 'manual/improvisation.html'),
      }
    }
  }
})
