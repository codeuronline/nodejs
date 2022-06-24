<template>
  <div class="Accueil">
    <h1>{{ msg }}</h1>
    <div v-for="(restaurant, index) in restaurants" v-bind:key="index">
      <table>
        <tr>
          <td>
            <div width="300px" style="background-color: aquamarine;">
              <h2>({{index}}){{ restaurant.name }})</h2>
            </div>
          </td>
          <td width='90%'>
            <div height="100%" style="background-color:bisque">
              <h2 v-if="restaurant.nbCouverts != 'false'">{{ restaurant.city }}&nbsp;&nbsp;
                {{ restaurant.nbCouverts }} couverts
                <img v-if="restaurant.parking === 'oui'" width="50px" height="50px" src="../assets/parking.jpg">
                <img v-if="restaurant.parking === 'non'" width="50px" height="50px" src="../assets/noparking.webp">
                <img v-if="restaurant.terrasse === 'oui'" width="75px" height="50px" src="../assets/terrasse.png">
                <img v-if="restaurant.terrasse === 'non'" width="50px" height="50px" src="../assets/noterrasse.jpg">
              </h2>
            </div>
          </td>
          <td width="10%">
            <button v-on:click="delRestaurant($event, restaurant.id_restaurant)">X</button>
          </td>
        </tr>
        <tr>
          <td width="300px">
            <div style="background-color:azure">
              <h1>EQUIPE</h1>
            </div>
          </td>
          <td width="90%">
            <div width="100%" style="background-color: antiquewhite;" v-for="(employe,index1) in team" v-bind:key="index1">
              <p v-if="restaurant.id_restaurant === employe.restaurant_id">{{ employe.first_name }}
                {{ employe.last_name }}<button v-on:click="delPersonnel($event, employe.id_employe)">X</button>
              </p>
            </div>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
// Charger la bibliothèque axios
import axios from "axios"

export default {
  name: "app",
  data() {
    return {
      restaurants: null,
      team: null
    }
  },
  mounted() {

    // Ecrire ici la requête axios
    axios.get("http://127.0.0.1:5000/restaurants")
      .then(res => this.restaurants = res.data)
      // .catch(error => this.restaurants = [{ "name": "Erreur de chargement" }])
    console.log(this.restaurants)
    axios.get("http://127.0.0.1:5000/employes")
      .then(res => this.team = res.data)
      // .catch(error => this.team = [{ "first_name": "Erreur de chargement" }])
    console.log(this.team)

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
