---
title: 首页
layout: home
hero:
  name: "TONEX职业文档"
  tagline: i18n支持的、最全的官方文档。
  actions:
    - theme: brand
      text: 赞助我们
      link: https://www.xtreme.net.cn/donate
    - theme: alt
      text: 内鬼职业
      link: /Role/Impostor/
    - theme: alt
      text: 船员职业
      link: /Role/Crewmate/
features:
  - title: 侠客
    details: 行侠仗义！
  - title: 病娇
    details: 我爱你
  - title: 魅魔
    details: 让我们做些「快乐」的事吧
  - title: 闲游者
    details: 纵使苍天陨落，契约必须完成
---

---
> [!WARNING] 试运行站点
> 试运行站点运行可能不稳定,您可能会遇到[502错误](https://baike.baidu.com/item/502%20bad%20gateway/858572)。

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cn-sy1.rains3.com/xtremewave/QingFeng.png',
    name: 'QingFeng',
    title: '主开发者',
    links: [
      { icon: 'github', link: 'https://github.com/QingFeng-awa' }
    ]
  },
  {
    avatar: 'https://cn-sy1.rains3.com/xtremewave/ynjq.jpg',
    name: "一念旧情",
    title: '角色故事作者',
    links: [
      { icon: 'github', link: 'https://github.com/ynjq' }
    ]
  }
]
</script>
<div align="center">

<h2>本文档贡献者</h2>

<VPTeamMembers size="medium" :members="members" />
</div>