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
      this.open = !this.open;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";

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
    margin-top: 1px;
    white-space: nowrap;
    background: white;
    box-shadow: 0 0 3px fade-out(black, 0.8);
    border-radius: $border-radius;
    color: $light-color;
    font-size: $font-size;
    min-width: 6em;
  }
  .g-sub-nav .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
}
</style>
