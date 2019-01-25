<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span class="g-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{open}">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <transition name="x" @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
      <div class="g-sub-nav-popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </transition>
  </div>  
</template>

<script>
import ClickOutside from "../click-outside";
import GIcon from "../icon";

export default {
  name: "guluSubNav",
  components: { GIcon },
  inject: ["root", "vertical"],
  directives: { ClickOutside },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  methods: {
    enter(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = 0;
      el.addEventListener("transitionend", () => {
        done();
      });
      done();
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
    onClick() {
      this.open = !this.open;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      }
    },
    close() {
      this.open = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.g-sub-nav {
  position: relative;
  &.active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid $blue;
    }
  }
  &-label {
    display: block;
    padding: 10px 20px;
  }
  &-icon {
    display: none;
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
    &.vertical {
      position: static;
      border-radius: 0;
      border: none;
      box-shadow: none;
      transition: height 250ms;
      overflow: hidden;
    }
  }
  .g-sub-nav {
    .g-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    .g-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .g-sub-nav-icon {
      transition: all 250ms;
      display: inline-flex;
      margin-left: 1em;
      svg {
        fill: $light-color;
      }
      &.open {
        transform: rotate(180deg);
      }
    }
    &.active {
      &::after {
        display: none;
      }
    }
  }
}
</style>
