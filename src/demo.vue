<template>
  <div style="padding: 20px">
    <g-cascader :source="source" :selected.sync="selected"></g-cascader>
  </div>
</template>

<script>
import Cascader from "./cascader";
import db from "./db";

function ajax(parentId = 0) {
  return db.filter(item => item.parent_id == parentId);
}

export default {
  name: "demo",
  components: {
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      source: ajax()
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style>
