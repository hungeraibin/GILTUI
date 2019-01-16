<template>
  <div style="padding: 20px">
    <g-slides :selected.sync="selected">
      <g-sildes-item name="1">
        <div class="box">1</div>
      </g-sildes-item>
      <g-sildes-item name="2">
        <div class="box">2</div>
      </g-sildes-item>      
      <g-sildes-item name="3">
        <div class="box">3</div>
      </g-sildes-item>
    </g-slides>
  </div>
</template>

<script>
import Slides from "./slides";
import SlidesItem from "./slides-item";

export default {
  name: "demo",
  components: {
    "g-slides": Slides,
    "g-sildes-item": SlidesItem
  },
  data() {
    return {
      selected: "1"
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
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background: #ddd;
  font-size: 30px;
}
</style>
