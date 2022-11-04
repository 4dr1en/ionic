<template>
  <div id="cameraPreview" class="cameraPreview">
    <div class="ghost" v-if="cameraActive">
      <img v-if="isghostVisible" src="assets/ghost.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewFlashMode,
} from '@capacitor-community/camera-preview';

import { ref } from 'vue';

import { Motion } from '@capacitor/motion';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

let lastFlash = Date.now();
let cameraActive = ref(false);
let isghostVisible = ref(false);
let lastVibration = Date.now();

const flashMode: CameraPreviewFlashMode = 'torch';
CameraPreview.setFlashMode({
  flashMode: flashMode,
});

const ghostDegPos = Math.floor(Math.random() * 360);

let distanceFromghost = ref(0);

const isInView = (curDegPos: number): boolean => {
  const demiAngle = 25;
  let bool = curDegPos + demiAngle > ghostDegPos && curDegPos - demiAngle < ghostDegPos;
  if (!bool) {
    if (curDegPos + demiAngle > 360 && ghostDegPos < curDegPos + demiAngle - 360) {
      bool = true;
    }
    if (curDegPos - demiAngle < 0 && ghostDegPos > 360 + curDegPos - demiAngle) {
      bool = true;
    }
  }
  return bool;
};

/**
 * Get the distance between the ghost and the player per cent of the max distance
 */
const calcDistanceFromView = (curDegPos: number): number => {
  const demiAngle = 25;
  if (isInView(curDegPos)) {
    return 0;
  }
  let min = Math.abs(curDegPos - ghostDegPos);
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
let lastOrientation = 0;
const loadOrientation = async () => {
  await Motion.addListener('orientation', (event) => {
    isghostVisible.value = isInView(event.alpha);
    distanceFromghost.value = calcDistanceFromView(event.alpha);

    if (Date.now() - lastVibration > distanceFromghost.value * 10 * 1.5) {
      navigator.vibrate(100);
      lastVibration = Date.now();
    }
    if (isghostVisible.value) {
      var ghostScream = new Audio('assets/audio/ghost_apparition_scream1.mp3');
      ghostScream.play();
    }

    if (Date.now() - lastFlash > distanceFromghost.value * 10 * 2) {
      CameraPreview.setFlashMode({
        flashMode: flashMode,
      });
      setTimeout(() => {
        // set off
        CameraPreview.setFlashMode({
          flashMode: 'off',
        });
      }, 100);
      lastFlash = Date.now();
    }

    let radar = document.getElementById('radar');
    let rotatePosition = 0;
    if (radar) {
      if (lastOrientation > event.alpha) {
        rotatePosition++;
      } else {
        rotatePosition--;
      }
      radar.style.transform = `rotate(${rotatePosition}deg)`;
      lastOrientation = event.alpha;
    }
  });
};

loadOrientation();

window.addEventListener("load", function (event) {
  let pointerContainer = document.getElementById("pointer-container") as HTMLElement | null;
  
  if(pointerContainer !== null){
    console.log(pointerContainer)
    console.log(ghostDegPos)
    pointerContainer.style.transform = `rotate(${ghostDegPos+45}deg)`;
  }
});
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

.ghost {
  position: absolute;
  z-index: 1;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ghost 10s infinite linear;
}

@keyframes ghost {
  from {
    opacity: 60%;
    transform: translate(-50%, -50%) scale(1);
  }

  14%,
  86% {
    opacity: 50%;
    transform: translate(-60%, -55%) scale(1.1);
  }

  28%,
  72% {
    opacity: 70%;
    transform: translate(-45%, -40%) scale(1.1);
  }

  42%,
  58% {
    opacity: 60%;
    transform: translate(-50%, -55%) scale(1.1);
  }

  50% {
    opacity: 50%;
    transform: translate(-55%, -50%) scale(1.1);
  }

  to {
    opacity: 60%;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
