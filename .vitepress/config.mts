import { defineConfig } from 'vitepress'

export default defineConfig({
  cleanUrls: true,
  lang: "zh-CN",
  logo: '/TONEX.ico',
  title: "TONEX职业文档",
  titleTemplate: ':title - TONEX职业文档',
  description: "i18n支持的、最全的官方文档。",
  head: [['link', { rel: 'icon', href: '/TONEX.ico' }]],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'TONEX职业文档',
      titleTemplate: ':title - TONEX职业文档',
      description: 'i18n支持的、最全的官方文档。',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '内鬼职业', link: '/Role/Impostor/' }
        ],
        sidebar: {
          '/Role/Impostor/': [
            {
              text: '内鬼阵营职业',
              items: [
                { text: '前言', link: '/Role/Impostor/' },
                { text: '赏金猎人', link: '/Role/Impostor/BountyHunter' },
                { text: '梦魇', link: '/Role/Impostor/Mare' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/XtremeWave/TownOfNewEpic_XtremeDocs/blob/main/:path',
          text: '在GitHub上查看此页'
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'TONEX Role Docs',
      titleTemplate: ':title - TONEX Role Docs',
      description: 'The i18n supported and most complete official documentation.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Impostor', link: '/en/Role/Impostor/' }
        ],
        sidebar: {
          '/en/Role/Impostor/': [
            {
              text: 'Impostor Roles',
              items: [
                { text: 'Foreword', link: '/en/Role/Impostor/' },
                { text: 'Bounty Hunter', link: '/en/Role/Impostor/BountyHunter' },
                { text: 'Mare', link: '/en/Role/Impostor/Mare' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/XtremeWave/TownOfNewEpic_XtremeDocs/blob/main/:path',
          text: 'See this Page on GitHub'
        },
      }
    }
  },
  sidebar: {
    '/Role/Impostor/': [
      {
        text: '内鬼阵营职业',
        items: [
          { text: '导览', link: '/Role/Impostor/' },
          { text: '赏金猎人', link: '/Role/Impostor/' },
          { text: '3', link: '/Role/Impostor/' }
        ]
      }
    ]
  },
  lastUpdated: false,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '内鬼职业', link: '/Role/Impostor/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XtremeWave/TownOfNewEpic_XtremeDocs' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "颜色模式",
    lightModeSwitchTitle: "点击切换至深色模式",
    darkModeSwitchTitle: "点击切换至浅色模式",
    returnToTopLabel: "返回顶部",
    docFooter: {
      prev: false,
      next: false
    },
    editLink: {
      pattern: 'https://github.com/XtremeWave/TownOfNewEpic_XtremeDocs/blob/main/:path',
      text: '在GitHub上查看此页'
    },
    footer: {
      copyright: 'Copyright © 2024 <a href="https://www.xtreme.net.cn">XtremeWave</a>'
    }
  },
})
