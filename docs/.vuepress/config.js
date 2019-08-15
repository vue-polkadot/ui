module.exports = {
  base: '/vue-ui/',
  title: 'vue-polkadot/vue-ui',
  description: 'VueJS utilities, libraries and Vue components in use across @polkadot projects',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Polkadot/Substrate Apps', link: 'https://polkadot.js.org/apps/' },
      { text: 'Project family', link: 'https://polkadot.js.org/' },
      {
        text: 'Documentation',
        items: [
          { text: 'API Reference', link: 'https://polkadot.js.org/api/' },
          { text: 'Utility Reference', link: 'https://polkadot.js.org/common/' },
          { text: 'UI Libs Reference', link: 'https://polkadot.js.org/ui/' },
          { text: 'VueJS Libs Reference (this)', link: 'https://vue-polkadot.js.org/vue-ui/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/vue-polkadot/vue-ui' }
    ],
    search: false,
    sidebar: 'auto'
      // ['/vue-keyring/', '@dysonring/vue-keyring'],
      // ['/vue-settings/', '@dysonring/vue-settings'],
      // ['/vue-shared/', '@dysonring/vue-shared'],
      // ['/vue-identicon/', '@dysonring/vue-identicon'],
      // ['/contribute/', '/CONTRIBUTING.md'],
    // ]
  }
};
