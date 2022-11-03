<template>
  <div>
    <h1>Play Page</h1>

    <ComponentCam />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IonGrid, IonRow, IonCol, IonImg, IonContent } from '@ionic/vue';

import ComponentCam from '@/components/ComponentCam.vue';

export default defineComponent({
  name: 'PlayPage',
  components: {
    ComponentCam,
  },
});
</script>

<style></style>
