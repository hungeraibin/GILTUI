import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

// 单元测试
import chai from 'chai'

const expect = chai.expect

{
  const Constructor = Vue.extend(Button) // Button是对象 转化为 构造器（函数）
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }) // VueComponent实例
  vm.$mount() // 动态生成按钮
  let useElement = vm.$el.querySelector('use')
  let herf = useElement.getAttribute('xlink:href')
  expect(herf).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'loading',
      loading: true
    }
  }) 
  vm.$mount() 
  let useElement = vm.$el.querySelector('use')
  let herf = useElement.getAttribute('xlink:href')
  expect(herf).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }) 
  vm.$mount(div) 
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  }) 
  vm.$mount(div) 
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  // mock
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }) 
  vm.$mount() 
  vm.$on('click', function() {
    console.log(1)
  })
  vm.$el.click()
  vm.$el.remove()
  vm.$destroy()
}