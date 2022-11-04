<template>
  <div class="radar" id="radar">
    <div class="pointer-container" id="pointer-container">
      <div class="ghost-pointer"></div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RadarWiget',

});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  background-color: #111;
  font-size: 10px;
}


.radar {
  background: -webkit-radial-gradient(center, rgba(32, 255, 77, 0.3) 0%, rgba(32, 255, 77, 0) 75%), -webkit-repeating-radial-gradient(rgba(32, 255, 77, 0) 5.8%, rgba(32, 255, 77, 0) 18%, rgba(32, 255, 77, 1) 18.6%, rgba(32, 255, 77, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(32, 255, 77, 0) 49.5%, rgba(32, 255, 77, 1) 50%, rgba(32, 255, 77, 1) 50%, rgba(32, 255, 77, 0) 50.2%), -webkit-linear-gradient(0deg, rgba(32, 255, 77, 0) 49.5%, rgba(32, 255, 77, 1) 50%, rgba(32, 255, 77, 1) 50%, rgba(32, 255, 77, 0) 50.2%);
  background: radial-gradient(center, rgba(32, 255, 77, 0.3) 0%, rgba(32, 255, 77, 0) 75%), repeating-radial-gradient(rgba(32, 255, 77, 0) 5.8%, rgba(32, 255, 77, 0) 18%, rgba(32, 255, 77, 1) 18.6%, rgba(32, 255, 77, 0) 18.9%), linear-gradient(90deg, rgba(32, 255, 77, 0) 49.5%, rgba(32, 255, 77, 1) 50%, rgba(32, 255, 77, 1) 50%, rgba(32, 255, 77, 0) 50.2%), linear-gradient(0deg, rgba(32, 255, 77, 0) 49.5%, rgba(32, 255, 77, 1) 50%, rgba(32, 255, 77, 1) 50%, rgba(32, 255, 77, 0) 50.2%);
  width: 100px;
  height: 100px;
  position: absolute;
  top: 80%;
  left: 30%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 0.2rem solid #20ff4d;
  overflow: hidden;
}

.radar:after {
  content: ' ';
  display: block;
  background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, rgba(0, 255, 51, 1) 100%);
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation: radar-beam 5s infinite;
  animation-timing-function: linear;
  transform-origin: bottom right;
  border-radius: 100% 0 0 0;
}

.pointer-container{
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation-timing-function: linear;
  transform-origin: bottom right;
  border-radius: 100% 0 0 0;
}
.ghost-pointer{
  position: absolute;
  width: 10px;
  height: 10px;
  left: 50%;
  top: 50%;
  /* right: -5px;
  top: 37.5%; */
  background-color: red;
  border-radius:90px;
}

@keyframes radar-beam {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes blips {
  14% {
    background: radial-gradient(2vmin circle at 75% 70%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%);
  }

  14.0002% {
    background: radial-gradient(2vmin circle at 75% 70%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%);
  }

  25% {
    background: radial-gradient(2vmin circle at 75% 70%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%);
  }

  26% {
    background: radial-gradient(2vmin circle at 75% 70%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, rgba(255, 255, 255, 1) 10%, rgba(32, 255, 77, 1) 30%, rgba(255, 255, 255, 0) 100%);
    opacity: 1;
  }

  100% {}
}
</style>
