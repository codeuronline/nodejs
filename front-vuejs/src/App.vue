<template>
  <div id="app">
    <nav>
      <router-link to="/">Liste des restaurants</router-link> |
      <router-link to="/restaurant">Ajout d'un restaurant</router-link> |
      <!-- <router-link to="/restaurant">Ajout de restaurant</router-link> | -->
      <router-link to="/employe">Ajout d'employé</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
