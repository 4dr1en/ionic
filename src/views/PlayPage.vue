<template>
  <div>
    <!-- <ComponentGyroscope /> -->
    <ComponentCam />
    <div class="widget">
      <RadarWiget />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IonGrid, IonRow, IonCol, IonImg, IonContent } from '@ionic/vue';

import ComponentCam from "@/components/ComponentCam.vue";
import RadarWiget from "@/components/RadarWiget.vue";
import ComponentGyroscope from "@/components/android/ComponentGyroscope.vue";
// let ghostPosition = Math.floor(Math.random() * 361);
let ghostPosition = 200;

export default defineComponent({
  name: 'PlayPage',
  components: {
    ComponentCam, RadarWiget
    // ComponentGyroscope
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        randomAmbianceSound(ambianceFilesName);
      }
    };
  },
});
let ambianceFilesName = ["ambiance1.mp3"];
function randomAmbianceSound(ambianceFilesName: Array<string>) {
  let randomAmbiancePath = `assets/audio/${
    ambianceFilesName[Math.floor(Math.random() * ambianceFilesName.length)]
  }`;
  console.log(randomAmbiancePath);
  console.log();
  var audioAmbiance = new Audio(randomAmbiancePath);
  audioAmbiance.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
  audioAmbiance.play();
}
</script>

<style scoped></style>
