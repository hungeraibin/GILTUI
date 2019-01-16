<template>
  <div class="g-slides">
    <div class="g-slides-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    playAutomatically() {
      const names = this.$children.map(vm => vm.name);
      let index = names.indexOf(this.selected);
      let run = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {
          newIndex = names.length - 1;
        }
        if (newIndex === names.length) {
          newIndex = 0;
        }
        this.$emit("update:selected", names[newIndex]);
        setTimeout(run, 3000);
      };
      setTimeout(run, 3000);
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        vm.selected = selected;
        const names = this.$children.map(vm => vm.name);
        let newIndex = names.indexOf(selected);
        let oldIndex = names.indexOf(vm.name);
        vm.reverse = newIndex > oldIndex ? false : true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.g-slides {
  display: inline-block;
  border: 1px solid;
  &-window {
    position: relative;
    overflow: hidden;
  }
}
</style>
