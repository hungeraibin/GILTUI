<template>
  <div class="row" :style="rowStyle">
    <slot></slot>  
  </div>
</template>

<script>
export default {
  name: 'GuluRow',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  // created 数据观测 (data observer)，属性和方法的运算，watch/event 事件回调
  // mounted el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  },
  computed: {
    rowStyle() {
      let { gutter } = this
      return {
        marginLeft: `${-gutter/2}px`, 
        marginRight: `${-gutter/2}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>


