---
title: '快速上手'
---

# 快速上手

本章节待完善

## 安装

```bash
npm install GULU
```

或

```bash
yarn add GULU 
```

## Hello World

```javascript
import {Button} from 'GULU'
import Vue from 'vue'
new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```