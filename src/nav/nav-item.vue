<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>  
</template>

<script>
export default {
  name: "GuluNavItem",
  inject: ["root"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      this.$emit("add:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";

.g-nav-item {
  position: relative;
  padding: 10px 20px;
  &.selected {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid $blue;
    }
  }
}
.g-sub-nav .g-nav-item {
  &.selected {
    color: $color;
    &::after {
      display: none;
    }
  }
}
</style>
