<template>
  <div style="padding: 20px">
    <g-cascader :source="source" :selected.sync="selected" :load-data="loadData" @update:source="onUpdateSource"></g-cascader>
    <g-cascader :source="source" :selected.sync="selected" :load-data="loadData" @update:source="onUpdateSource"></g-cascader>
  </div>
</template>

<script>
import Cascader from "./cascader";
import db from "./db";
import { removeListener } from "./click-outside";

function ajax(parentId = 0) {
  return new Promise(success => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      success(result);
    });
  });
}

export default {
  name: "demo",
  components: {
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      source: []
    };
  },
  destroyed() {
    removeListener();
  },
  created() {
    ajax(0).then(result => {
      this.source = result;
    });
  },
  methods: {
    loadData({ id }, updateSoure) {
      ajax(id).then(result => {
        updateSoure(result);
      });
    },
    onUpdateSource(source) {
      this.source = source;
    }
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
