<template>
  <div class="Employe">
    <h1>Employe</h1>
    formulaire d'ajout d'un restaurant

  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "app",
  data() {
    return
    

  },
  created() {
    // Simple POST request with a JSON body using axios
    const employe = { "first_name": "Rudofle", "Last_Name":"Grenoble","hire_date":"2022-06-01","restauant_id":"3" };
    axios.post("http://127.0.1.1:5000/employe", employe)
          .then(response => this.employe = response.data);
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
