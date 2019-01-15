<template>
  <div style="padding: 20px">
    <g-slides :selected="selected">
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
  },
  created() {
    let n = 1;
    setInterval(() => {
      if (n === 4) {
        n = 1;
      }
      this.selected = n.toString();
      n++;
    }, 2000);
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
  width: 200px;
  height: 150px;
  background: #ddd;
  border: 1px solid red;
}
</style>
