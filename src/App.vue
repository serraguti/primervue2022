<template>
  <div>
    <MenuComponent/>
    <hr/>
    <!-- ESTO ES UN ELEMENTO DINAMICO  -->
    <router-view></router-view>
    <hr/>
    <!-- <CineComponent/>
    <HomeComponent/>
    <MusicaComponent/>
    <HolaMundo/> -->
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
// import HolaMundo from './components/HolaMundo.vue';
// import CineComponent from './components/CineComponent.vue';
// import HomeComponent from './components/HomeComponent.vue';
// import MusicaComponent from './components/MusicaComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent
    //  HolaMundo, CineComponent
    // , MusicaComponent, HomeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
