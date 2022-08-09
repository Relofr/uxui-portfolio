<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="container">
    <!-- <img class="ocean-top" src="../src/assets/ocean-top.svg" alt=""> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
  <Footer />
</template>

<style>
.container {
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* .ocean-top {
  background-image: url(/src/assets/ocean-top-2.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: -65%;
} */

main .container {
  flex-grow: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>