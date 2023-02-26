import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts'
  },
  themeConfig: {
    name: 'Catd',
    footer: false,
    prefersColor: { default: 'light', switch: false },
  },
});
