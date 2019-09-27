module.exports = {
  base: '/vue-ui/',
  title: 'vue-polkadot/vue-ui',
  description: 'Vue components in use across Polkadot projects',
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
       ['/', 'What is vue-polkadot?'],
       ['/tutorials/getting-started/', 'Tutorials'],
       ['/vue-identicon/', '@vue-polkadot/vue-identicon'],
       ['/vue-keyring/', '@vue-polkadot/vue-keyring'],
       ['/vue-settings/', '@vue-polkadot/vue-settings']
    ]
  }
};
