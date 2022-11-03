<template>
  <div class="test"><p>{{accelHandler}}</p></div>
</template>

<script lang="ts" setup>
// import { defineComponent } from "vue";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";
let accelHandler: PluginListenerHandle;
let eventMotion:any;
accelHandler = await Motion.addListener("orientation", (event) => {
  eventMotion=event
  console.log("eventMotion",eventMotion)
});
console.log("accelHandler",eventMotion.acceleration.x)
// export default defineComponent({
//   name: "PlayPage",
//   data () {
//     accelHandler
//   }
// });
</script>

<style scoped>
.test{
  color: white;
  z-index: 1;
}
</style>
