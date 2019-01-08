import Vue from "vue";
import Button from "./button.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Button)
}).$mount("#app");
