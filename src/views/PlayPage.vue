<template>
  <div>
    <ComponentGyroscope />
    <ComponentCam />
    <div class="gost">
      <p>booooohh !</p>
      <img src="assets/ghost.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { IonGrid, IonRow, IonCol, IonImg, IonContent } from "@ionic/vue";

import ComponentCam from "@/components/ComponentCam.vue";
import ComponentGyroscope from "@/components/android/ComponentGyroscope.vue";
// let ghostPosition = Math.floor(Math.random() * 361);
let ghostPosition = 200;
// setInterval(() => {
//   if (Math.random() < 0.5) {
//     //random true false
//     ghostPosition++;
//     if (ghostPosition === -1) {
//       ghostPosition = 360;
//     }
//   } else {
//     ghostPosition--;
//     if (ghostPosition === 361) {
//       ghostPosition = 0;
//     }
//   }
//   console.log(ghostPosition);
// }, 1000);

export default defineComponent({
  name: "PlayPage",
  components: {
    ComponentCam,
    ComponentGyroscope
  },
});
</script>

<style scoped>
.gost {
  position: absolute;
  z-index: 1;
}
</style>
