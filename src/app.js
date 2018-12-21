import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)


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
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect

try {
  // 测试按钮含有 settings icon
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
  // 测试按钮含有 loading icon
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
  // 测试按钮 svg order
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
  // 测试按钮 svg order
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
  // 测试按钮点击事件
  {
    // mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }) 
    vm.$mount() 
    let spy = chai.spy(function() {})
    vm.$on('click', spy)
    vm.$el.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
  }  
} catch (error) {
  window.errors = [error]
} finally {
  window.errors && window.errors.forEach(error => {
    console.error(error.message)
  })
}
