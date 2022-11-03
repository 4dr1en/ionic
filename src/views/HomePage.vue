<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <img class="bg-home" src="assets/bg-home.jpg" alt="backgr" />
      <div class="home-content">
        <h1 class="home-title"></h1>
        <FlashText />
        <img src="assets/ghost.png" alt="ghost" />
        <div class="play-btn-container">
          <a href="/play"><button class="play-btn">Play</button></a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import FlashText from '@/components/home/FlashText.vue';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default defineComponent({
  name: 'Tab1Page',
  components: { IonContent, IonPage, FlashText },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.play-btn-container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.play-btn {
  padding: 15px 20px;
  font-family: 'Nosifer', cursive;
  transition: transform 0.5s ease-in;
}

.play-btn:hover {
  transform: scale(1.5);
  transition: transform ease-in-out 0.5s;
}

.pageWrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.bg-home {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.home-content {
  /*background-color: #42b983;*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 50px 15px;
}

.home-title {
  text-align: center;
  margin-bottom: 50px;
  width: 100%;
}

.home-nav-playbtn {
  font-size: 50px;
}
</style>
