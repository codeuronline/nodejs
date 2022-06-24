<template>
  <div id="app">
    <Accueil msg="LISTE DES RESTAURANTS"/>
    <Restaurant/>
 //   <Employe/>
  </div>
</template>

<script>
import Accueil from './components/Accueil.vue'
import Restaurant from './components/Restaurant.vue'
//import Employe from '.components/Employe.vue'

export default {
  name: 'App',
  components: {
    Accueil,
    Restaurant,
   // Employe,
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
