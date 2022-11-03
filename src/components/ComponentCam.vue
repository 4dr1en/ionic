<template>
  <div id="cameraPreview" class="cameraPreview">
    <div class="gost" v-if="cameraActive">
      <p>booooohh !</p>
      <img src="assets/ghost.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from '@capacitor-community/camera-preview';

import { ref, onMounted, onUnmounted } from 'vue';

// Needed for web registration
import '@capacitor-community/camera-preview';

let imageany = ref(null);
let cameraActive = ref(false);
let torchActive = ref(false);

const openCamera = () => {
  const cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    parent: 'cameraPreview',
    className: 'cameraPreview',
    toBack: true,
  };

  CameraPreview.start(cameraPreviewOptions);
  cameraActive.value = true;
};
openCamera();
</script>

<style scoped lang="scss">
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

.cameraPreview {
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: 1;
}
</style>
