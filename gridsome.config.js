module.exports = {
  siteName: 'LFXA',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'settings/*.json'
      }
    }
  ],
  templates: {
    posts: [{
      path: '/blog/:title',
      component: './src/templates/BlogEntry.vue'
    }],
    Tag: [{
      path: '/tag/:title',
      component: './src/templates/Tag.vue'
    }],
    Category: [{
      path: '/category/:title',
      component: './src/templates/Category.vue'
    }],
  },
  chainWebpack: config => {
    config.resolve.alias.set('@modules', '@/resources/js/modules');
    config.resolve.alias.set('@utilities', '@/resources/js/utilities');

  }
}