module.exports = {
  base: '/GILTUI/',
  title: 'GILTUI',
  description: 'Vue UI 框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://github.com/hungeraibin/' }
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [       
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/slides',
          '/components/pager',
        ]
      }
    ]
  }
}