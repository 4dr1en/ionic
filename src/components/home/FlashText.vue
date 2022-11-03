<template>
  <div id="flash-container">
    <div>
      <p>GHOST HUNTER EXTRA !<span>best game</span></p>
    </div>
    <div>
      <p>le jeux le plus<span>EFFRAYANT</span></p>
    </div>
    <div>
      <p><span>fait par des</span> EXPERT</p>
    </div>
    <div>
      <p>We See<span>you</span></p>
    </div>
    <div>
      <p>Moody<span>atmosphere</span></p>
    </div>
    <div>
      <p><span>Stay</span> Awake</p>
    </div>
    <div>
      <p>Creepy<span>style</span></p>
    </div>
    <div>
      <p><span>Look</span>Behind You</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlashText',
  props: {
    name: String,
  },
});
</script>

<style scoped>
#flash-container {
  font-size: 4em;
  margin: 0 auto;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 200px;
  font-family: 'Nosifer', cursive;
}

#flash-container span {
  display: block;
  font-size: 0.4em;
  opacity: 0.8;
}

#flash-container div {
  position: absolute;
  margin: 2vh 0;
  opacity: 0;
  animation: switch 32s linear infinite;
}

#flash-container div:nth-child(2) {
  animation-delay: 4s;
}

#flash-container div:nth-child(3) {
  animation-delay: 8s;
}

#flash-container div:nth-child(4) {
  animation-delay: 12s;
}

#flash-container div:nth-child(5) {
  animation-delay: 16s;
}

#flash-container div:nth-child(6) {
  animation-delay: 20s;
}

#flash-container div:nth-child(7) {
  animation-delay: 24s;
}

#flash-container div:nth-child(8) {
  animation-delay: 28s;
}

@keyframes switch {
  0% {
    opacity: 0;
    filter: blur(3px);
    transform: scale(0.95);
    text-shadow: 40px 42px 2px rgba(0, 0, 0, 0.2);
  }

  3% {
    opacity: 0.7;
    filter: blur(2px);
    transform: scale(1);
    text-shadow: 40px 42px 2px rgba(0, 0, 0, 0.1);
  }

  6% {
    opacity: 0.7;
    filter: blur(2px);
    transform: scale(1);
    color: red;
    text-shadow: 40px 42px 2px rgba(0, 0, 0, 0.1);
  }

  10% {
    opacity: 0.7;
    filter: blur(3px);
    transform: scale(1.1);
    color: #000;
    text-shadow: 40px 42px 2px rgba(0, 0, 0, 0.1);
  }

  10.1% {
    opacity: 0.8;
    filter: blur(2px);
    transform: scale(2);
    color: red;
    text-shadow: -40px -142px 2px rgba(0, 0, 0, 0.1);
  }

  10.2% {
    opacity: 0.8;
    filter: blur(2px);
    transform: scale(2);
    color: red;
    text-shadow: 40px 42px 2px rgba(0, 0, 0, 0, 0.1);
  }

  11.1% {
    opacity: 0.8;
    filter: blur(2px);
    transform: scale(2);
    color: #111;
    text-shadow: 40px 42px 2px rgba(0, 0, 0, 0.1);
  }

  11.2% {
    opacity: 0.7;
    filter: blur(2px);
    transform: scale(2);
    color: red;
    text-shadow: 90px 52px 2px rgba(0, 0, 0, 0.1);
  }

  12% {
    opacity: 0.7;
    filter: blur(5px);
    transform: scale(1.1);
    color: black;
    text-shadow: 90px 52px 2px rgba(0, 0, 0, 0);
  }

  12.1% {
    opacity: 0.7;
    filter: blur(5px);
    transform: scale(1.1);
    color: #000;
    text-shadow: -90px -52px 2px rgba(0, 0, 0, 0);
  }

  13% {
    opacity: 0;
    filter: blur(3px);
    transform: scale(1);
    color: #000;
    text-shadow: 40px 42px 2px;
  }

  12.1% {
    opacity: 0.7;
    filter: blur(5px);
    transform: scale(1.1);
    color: #000;
    text-shadow: -90px -52px 2px rgba(0, 0, 0, 0);
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes flicker {
  0% {
    background: #fff;
    opacity: 0;
  }

  10% {
    background: #fff;
    opacity: 0;
  }

  10.1% {
    background: #fff;
    opacity: 1;
  }

  10.2% {
    background: #fff;
    opacity: 0;
  }

  23% {
    background: #fff;
    opacity: 0;
  }

  23.1% {
    background: #fff;
    opacity: 1;
  }

  23.2% {
    background: #fff;
    opacity: 0;
  }

  35% {
    background: #fff;
    opacity: 0;
  }

  35.1% {
    background: #fff;
    opacity: 1;
  }

  35.2% {
    background: #fff;
    opacity: 0;
  }

  48% {
    background: #fff;
    opacity: 0;
  }

  48.1% {
    background: #fff;
    opacity: 1;
  }

  48.2% {
    background: #fff;
    opacity: 0;
  }

  60% {
    background: #fff;
    opacity: 0;
  }

  60.1% {
    background: #fff;
    opacity: 1;
  }

  60.2% {
    background: #fff;
    opacity: 0;
  }

  72% {
    background: #fff;
    opacity: 0;
  }

  72.1% {
    background: #fff;
    opacity: 1;
  }

  72.2% {
    background: #fff;
    opacity: 0;
  }

  85% {
    background: #fff;
    opacity: 0;
  }

  85.1% {
    background: #fff;
    opacity: 1;
  }

  85.2% {
    background: #fff;
    opacity: 0;
  }

  99% {
    background: #fff;
    opacity: 0;
  }

  99.1% {
    background: #fff;
    opacity: 1;
  }

  99.2% {
    background: #fff;
    opacity: 0;
  }

  100% {
    background: #fff;
    opacity: 0;
  }
}
</style>
