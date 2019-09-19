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
    sidebar:
     [
       '/',
       '/vue-keyring/',
       '/vue-identicon/',
       '/vue-settings/',
       ['/vue-identiconx/', '@vue-polkadot/vue-identicon'],
       ['/vue-keyringx/', '@vue-polkadot/vue-keyringx'],
       ['/vue-settingsx/', '@vue-polkadot/vue-settings']
    ]
  }
};
