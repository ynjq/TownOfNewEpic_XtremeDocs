---
layout: home
hero:
  name: "TONEX职业文档"
  tagline: i18n支持的、最全的官方文档。
  actions:
    - theme: brand
      text: 赞助我们
      link: https://wwww.xtreme.net.cn/donate
    - theme: alt
      text: 内鬼职业
      link: /Role/Impostor/
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
  }
]
</script>
<div align="center">

<h2>本文档贡献者</h2>

<VPTeamMembers size="medium" :members="members" />
</div>