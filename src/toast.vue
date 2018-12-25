<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluToast',
  mounted() {

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
  }
</style>


