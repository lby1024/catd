import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['./cat1.png'],
  base: '/cat-design',
  publicPath: '/cat-design/',
  // apiParser: {},
  resolve: {
    entryFile: './src/index.ts'
  },
  themeConfig: {
    name: 'Catd',
    logo: './cat1.png',
    prefersColor: { default: 'light', switch: false },
    socialLinks: {
      github: 'https://github.com/lby1024',
    },
    footer: false
  },
});
