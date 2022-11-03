<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title >Camera Application</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div class="container">
      <ion-button @click="ClickImage()">Click Image</ion-button>
      </div>
      <div class="container">
      <ion-img v-if="render" class="img" :src="imageUrl"/>
      </div>
      <div class="container">
      <ion-button v-if="render" @click="Save()">Save</ion-button>
      <ion-button v-if="render" @click="Clear()">Clear</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButton, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
export default defineComponent({
  data(){ return  {imageUrl : '', render: false}},
  name: 'PlayPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonImg,
  },
  methods: {
    async Clear() {
      this.imageUrl = '';
      this.render = false;
    },
    async ClickImage() {
      await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
        }).then((image) => {
          this.render = true;
          this.imageUrl = String(image.webPath)
      });
    },
    convertBlobToBase64 (blob: Blob) {
      return new Promise((resolve, reject) =>{
        const reader = new FileReader;
        reader.onerror = reject;
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(blob);
      });
    },
    async Save() {
        const response = await fetch(this.imageUrl);
        const blob = await response.blob();
        const base64Data = await this.convertBlobToBase64(blob) as string;
        console.log('url', base64Data);
        const savedFile = await Filesystem.writeFile({
            path: new Date().getTime() + '.jpeg',
            data: base64Data,
            directory: Directory.Documents
      });
    }
  }
});
</script>

<style scoped>
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