<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <div class="g-slides-window">
      <slot></slot>
    </div>
    <div class="g-slides-dots">
      <span @click="onClickPrev" data-action="prev"><g-icon name="left"></g-icon></span>
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n-1}" :data-index="n-1" @click="select(n-1)">
        {{ n-1 }}
      </span>
      <span @click="onClickNext" data-action="next"><g-icon name="right"></g-icon></span>
    </div>
  </div>
</template>

<script>
import Icon from "../icon";
export default {
  components: {
    "g-icon": Icon
  },
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined
    };
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected);
      return index === -1 ? 0 : index;
    },
    names() {
      return this.items.map(vm => vm.name);
    },
    items() {
      return this.$children.filter(vm => {
        return vm.$options.name === "GuluSlidesItem";
      });
    }
  },
  mounted() {
    this.updateChildren();
    if (this.autoPlay) {
      this.playAutomatically();
    }
    this.childrenLength = this.items.length;
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      if (this.autoPlay) {
        this.playAutomatically();
      }
    },
    onTouchStart(e) {
      if (e.touches.length > 1) {
        return;
      }
      this.pause();
      this.startTouch = e.touches[0];
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = endTouch;
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y2 - y1);
      let rate = distance / deltaY;
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1);
        } else {
          this.select(this.selectedIndex + 1);
        }
      }
      this.$nextTick(() => {
        this.playAutomatically();
      });
    },
    onClickPrev() {
      this.select(this.selectedIndex - 1);
    },
    onClickNext() {
      this.select(this.selectedIndex + 1);
    },
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      let run = () => {
        let newIndex = this.selectedIndex + 1;
        this.select(newIndex);
        this.timerId = setTimeout(run, this.autoPlayDelay);
      };
      this.timerId = setTimeout(run, this.autoPlayDelay);
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex;
      if (newIndex === -1) {
        newIndex = this.names.length - 1;
      }
      if (newIndex === this.names.length) {
        newIndex = 0;
      }
      this.$emit("update:selected", this.names[newIndex]);
    },
    getSelected() {
      let first = this.items[0];
      return this.selected || first.name;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.items.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timerId) {
          if (
            this.lastSelectedIndex === this.items.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.items.length - 1
          ) {
            reverse = true;
          }
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.g-slides {
  &-window {
    position: relative;
    overflow: hidden;
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ddd;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: black;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
