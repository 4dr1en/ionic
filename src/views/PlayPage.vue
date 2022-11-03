<template>
  <ion-page>
    <ion-content :fullscreen="true">
     <div>
      
     </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from 'vue';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
export default defineComponent({
  name: "PlayPage",
});


const cameraPreviewOptions: CameraPreviewOptions = {
  position: 'rear',
  height: 1920,
  width: 1080
};
CameraPreview.start(cameraPreviewOptions);
</script>

<style scoped>

ion-content {
  --background: transparent;
}
.my-custom-camera-preview-content {
  --background: transparent;
}
.container {
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-top: 12px;
}
.img {
  height: 300px;
  width: 300px;
}
</style>
