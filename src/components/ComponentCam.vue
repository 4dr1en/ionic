<template>
  <div id="cameraPreview" class="cameraPreview">
    <div class="gost" v-if="cameraActive">
      <p>{{ curPos }} / {{ gostDegPos }} --- {{ distanceFromGost }}</p>
      <img v-if="isGostVisible" src="assets/ghost.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';

import { ref } from 'vue';

import { Motion } from '@capacitor/motion';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

let cameraActive = ref(false);
let curPos = ref('toto');
let isGostVisible = ref(false);
let lastVibration = Date.now();

const gostDegPos = Math.floor(Math.random() * 360);

let distanceFromGost = ref(0);

const isInView = (curDegPos: number): boolean => {
  const demiAngle = 15;
  let bool = curDegPos + demiAngle > gostDegPos && curDegPos - demiAngle < gostDegPos;
  if (!bool) {
    if (curDegPos + demiAngle > 360 && gostDegPos < curDegPos + demiAngle - 360) {
      bool = true;
    }
    if (curDegPos - demiAngle < 0 && gostDegPos > 360 + curDegPos - demiAngle) {
      bool = true;
    }
  }
  return bool;
};

/**
 * Get the distance between the gost and the player per cent of the max distance
 */
const calcDistanceFromView = (curDegPos: number): number => {
  const demiAngle = 15;
  if (isInView(curDegPos)) {
    return 0;
  }
  let min = Math.abs(curDegPos - gostDegPos);
  if (min > 180) {
    min = 360 - min;
  }
  min -= demiAngle;
  return (min * 100) / (180 - demiAngle);
};

const openCamera = () => {
  const cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    parent: 'cameraPreview',
    className: 'cameraPreview',
    toBack: true,
    width: window.screen.width,
  };

  CameraPreview.start(cameraPreviewOptions);
  cameraActive.value = true;
};
openCamera();
let lastOrientation = 0
const loadOrientation = async () => {
  await Motion.addListener('orientation', (event) => {
    curPos.value = String(Math.round(event.alpha));
    isGostVisible.value = isInView(event.alpha);
    distanceFromGost.value = calcDistanceFromView(event.alpha);

    if (Date.now() - lastVibration > distanceFromGost.value * 10 * 1.5) {
      navigator.vibrate(100);
      lastVibration = Date.now();
    }

    let radar = document.getElementById("radar");
    if (radar) {
      if (lastOrientation > event.alpha) {
        radar.style.transform = "rotate(1deg)";
      } else {
        radar.style.transform = "rotate(-1deg)";
      }
      lastOrientation = event.alpha;
    }
  });
};

loadOrientation();
</script>

<style scoped>
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
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

#video {
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.gost {
  position: absolute;
  z-index: 1;
  color: white;
}
</style>
