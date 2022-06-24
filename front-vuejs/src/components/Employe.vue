<template>
  <div class="Employe">
    <h1>{{ msg }}</h1>
    formulaire d'ajout d'un restaurant

  </div>
</template>

<script>
// Charger la bibliothèque axios
import axios from "axios"

export default {
  name: "app",
  data() {
    return
    

  },
  created() {
    // Simple POST request with a JSON body using axios
    
  },
  mounted() {
    // SImple get les restaurants
  }
}
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
