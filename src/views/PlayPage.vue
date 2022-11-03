<template>
  <div>
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
