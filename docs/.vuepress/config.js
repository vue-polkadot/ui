module.exports = {
  base: '/vue-ui-polkadot/',
  title: 'dysonring/vue-ui-polkadot',
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
          { text: 'VueJS Libs Reference (this)', link: 'https://vue-polkadot.js.org/ui/' }
        ]
      },
      { text: 'GitHub', link: 'https://dysonring.github.io/vue-ui-polkadot/' }
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
