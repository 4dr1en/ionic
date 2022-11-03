<template>
  <div>
    <h1>Play Page</h1>
    <ion-content>
      <CameraPreview />

      <!-- <ion-fab> markup  -->
    </ion-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IonGrid, IonRow, IonCol, IonImg, IonContent } from '@ionic/vue';

import CameraPreview from '@/components/CameraPreview.vue';

export default defineComponent({
  name: 'PlayPage',
  components: {
    IonContent,
    CameraPreview,
  },
});
</script>

<style></style>
