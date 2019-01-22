<template>
  <div class="g-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>  
</template>

<script>
export default {
  name: "guluSubNav",
  data() {
    return {
      open: false
    };
  },
  methods: {
    onClick() {
      this.open = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.g-sub-nav {
  position: relative;
  > span {
    display: block;
    padding: 10px 20px;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
  }
  .g-sub-nav .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
}
</style>
