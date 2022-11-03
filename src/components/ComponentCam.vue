<template>
  <div>test</div>

  <button @click="openCamera">Start Camera</button>
</template>

<script lang="ts" setup>
/*import {o
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from '@capacitor-community/camera-preview';*/
import '@capacitor-community/camera-preview';
import { ref, onMounted, onUnmounted } from 'vue';
import { Plugins } from '@capacitor/core';
import {
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from '@capacitor-community/camera-preview';

// Needed for web registration
import '@capacitor-community/camera-preview';
const { CameraPreview } = Plugins;

let imageany = null;
let cameraActive = false;
let torchActive = false;

const openCamera = () => {
  const cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    parent: 'cameraPreview',
    className: 'cameraPreview',
  };

  CameraPreview.start(cameraPreviewOptions);
  cameraActive = true;
};
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
</style>
