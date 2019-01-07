<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <gulu-cascader-item
      v-if="sourceItem.children"
      v-for="(item, index) in sourceItem.children"
      :key="index"
      :source-item="item"
    ></gulu-cascader-item>
  </div>
</template>

<script>
  export default {
    name: "GuluCascaderItem",
    props: {
      sourceItem: {
        type: Object,
      }
    }
  }
</script>

<style scoped lang="scss">
  .cascaderItem {
    // border: 1px solid red;
    // margin: 10px;
  }
</style> 