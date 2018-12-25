<template>
  <div class="toast">
    <slot></slot>
    <span class="line"></span>
    <span class="close" v-if="closeButton" @click="onClickClose">{{ closeButton.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0,0,0,.75);
  .toast {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
    height: $toast-height;
    line-height: 1.8;
    padding: 0 16px;
    color: white;
    font-size: $font-size;
    background-color: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    .close {
      padding-left: 16px;
    }
  }
</style>


