<template>
  <div>
    <p>ceci est un test</p>
    <ion-page>
      <ion-content :fullscreen="true">
        <div id="content">
          <div class="my-overlay">
            <h2>Overlay Text</h2>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </div>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { Plugins } from '@capacitor/core';
export default {
  name: 'CameraPreview',
  components: { IonPage, IonContent },
  data() {
    return {
      imageSrc: '',
    };
  },

  //   mounted() {
  //     this.startCamera();
  //   },
  methods: {
    async startCamera() {
      await Plugins.CameraPreview.start({
        parent: 'content',
        position: 'rear',
        className: 'content-camera-preview',
        toBack: true,
      });
    },
  },
};
</script>

<style scoped>
body,
html {
  background-color: transparent !important;
}

ion-content {
  --background: transparent !important;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.my-overlay {
  color: red;
  z-index: 12;
  position: absolute;
  top: 30%;
  left: 4;
}
.content-camera-preview {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
}

#app {
  background-color: transparent !important;
}
</style>
