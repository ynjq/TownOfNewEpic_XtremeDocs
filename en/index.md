---
layout: home
hero:
  name: "TONEX Role Docs"
  tagline: The i18n supported and most complete official documentation.
  actions:
    - theme: brand
      text: Donate
      link: https://wwww.xtreme.net.cn/donate
    - theme: alt
      text: Impostor
      link: /en/Role/Impostor/
features:
  - title: Vigilante
    details: You can kill 1 player
  - title: Yandere
    details: I Love You
  - title: Akujo
    details: Use your wiles to manipulate the crews into helping you
  - title: Vagator
    details: Nothing can be accomplished without rules or standards
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cn-sy1.rains3.com/xtremewave/QingFeng.png',
    name: 'QingFeng',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/QingFeng-awa' }
    ]
  }
]
</script>
<div align="center">

<h2>Contributors to this docs</h2>

<VPTeamMembers size="medium" :members="members" />
</div>