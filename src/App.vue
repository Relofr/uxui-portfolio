<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import OceanWave from './components/OceanWave.vue'
</script>

<template>
  <Navbar />
  <!-- <OceanWave /> -->
  <div class="container">
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
  margin: 0px auto 50px auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 999;
}

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