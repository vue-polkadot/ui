module.exports = {
  base: '/ui/',
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
      { text: 'GitHub', link: 'https://github.com/polkadot-js/ui' }
    ],
    search: false,
    sidebar: [
      ['/vue-keyring/', '@dysonring/vue-keyring'],
      ['/vue-settings/', '@dysonring/vue-settings'],
      ['/vue-shared/', '@dysonring/vue-shared'],
      ['/vue-identicon/', '@dysonring/vue-identicon'],
      '/CONTRIBUTING.md'
    ]
  }
};
