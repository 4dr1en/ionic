<template>
   <div>
     <h1>Play Page Test</h1>
     <ion-content>
       <CameraPreview />
 
       <!-- <ion-fab> markup  -->
     </ion-content>
   </div>
 </template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
   name: 'WahidCamera',
   components: { IonContent },
 });
 </script>