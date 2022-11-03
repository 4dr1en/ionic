<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <img class="bg-home" src="assets/bg-home.jpg" alt="backgr" />
      <div class="home-content">
        <h1 class="home-title"></h1>
        <FlashText />
        <img src="assets/ghost.png" alt="ghost" class="ghost-home"/>
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
.ghost-home{
  animation: twinkle infinite 5s; 
}

@keyframes twinkle {
  0% {
    opacity: 0;
  }

  3% {
    opacity: 0.5;
  }

  6% {
    opacity: 0.2;
  }

  10% {
    opacity: 0.9;
  }

  10.1% {
    opacity: 0.8;
  }

  10.2% {
    opacity: 1;
  }

  11.1% {
    opacity: 0;
  }

  11.2% {
    opacity: 0.5;
  }

  12% {
    opacity: 0.7;
  }

  12.1% {
    opacity: 0.1;
  }

  13% {
    opacity: 0.8;
  }

  12.1% {
    opacity: 0.5;
  }

  40.1% {
    opacity: 0.2;
  }

  42% {
    opacity: 0.6;
  }

  44% {
    opacity: 0.7;
  }

  46% {
    opacity: 0;
  }

  48% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.7;
  }

  80% {
    opacity: 0.9;
  }

  100% {
    opacity: 0.1;
  }
}
</style>
