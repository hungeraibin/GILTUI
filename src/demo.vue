<template>
  <div style="padding: 20px">
    <g-nav :selected.sync="selected">
      <g-nav-item name="home">首页</g-nav-item>
      <g-nav-item name="about">关于</g-nav-item>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>

<script>
import GNav from "./nav/nav";
import GNavItem from "./nav/nav-item";
import GSubNav from "./nav/sub-nav";

export default {
  name: "demo",
  components: {
    GNav,
    GNavItem,
    GSubNav
  },
  data() {
    return {
      selected: ["home"]
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
