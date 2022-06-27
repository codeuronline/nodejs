<template>
  <div id="app">
    <table class="table table-bordered" width="1600px">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">
            Information (Ville / Nombre de couverts / Parking / Terrasse)
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="(restaurant, index) in restaurants" v-bind:key="index">
        <tr>
          <td width="800px">
            <div width="100%" style="background-color: aquamarine">
              <h1>{{ restaurant.name }}</h1>
            </div>
          </td>
          <td width="90%">
            <div height="100%" style="background-color: bisque">
              <h2 v-if="restaurant.nbCouverts != 'false'">
                {{ restaurant.city }}&nbsp;&nbsp;
                {{ restaurant.nbCouverts }} couverts
                <img
                  width="50px"
                  height="50px"
                  v-if="restaurant.parking === 'oui'"
                  src="../assets/parking.jpg"
                /><img
                  width="50px"
                  height="50px"
                  v-if="restaurant.parking === 'non'"
                  src="../assets/noparking.webp"
                /><img
                  width="75px"
                  height="50px"
                  v-if="restaurant.terrasse === 'oui'"
                  src="../assets/terrasse.png"
                /><img
                  v-if="restaurant.terrasse === 'non'"
                  width="50px"
                  height="50px"
                  src="../assets//noterrasse.jpg"
                />
              </h2>
            </div>
          </td>
          <td width="10%">
            <button
              v-on:click="delRestaurant($event, restaurant.id_restaurant)"
            >
              <img width="40px" src="../assets/delete.webp" alt="supprimer" />
            </button>
          </td>
        </tr>
        <tr>
          <td width="800px">
            <div style="background-color: azure">
              <h1>EQUIPE</h1>
            </div>
          </td>
          <td width="90%">
            <div
              width="100%"
              style="background-color: gray"
              v-for="(employe, index2) in team"
              v-bind:key="index2"
            >
              <h2>
                <p v-if="restaurant.id_restaurant === employe.restaurant_id">
                  {{ employe.first_name }} {{ employe.last_name }}
                  <button v-on:click="delPersonnel($event, employe.id_employe)">
                    <img
                      width="40px"
                      src="../assets/delete.webp"
                      alt="supprimer"
                    />
                  </button>
                </p>
              </h2>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="update()">Mettre à jour</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      restaurants: null,
      team: null,
    };
  },
  methods: {
    update() {
      axios
        .get("http://127.0.0.1:5000/restaurants")
        .then((res) => (this.restaurants = res.data));
      // .catch(error =>this.resto =[{"name":"Erreur de chargement"}])
      console.log(this.restaurants);
      axios
        .get("http://127.0.0.1:5000/employes")
        .then((res) => (this.team = res.data));
      // .catch(error =>this.team =[{"first_name":"Erreur de chargement"}])
      console.log(this.team);
    },
    delRestaurant(event, id) {
      console.log("delRestaurant (id) =>", id);
      axios
        .delete("http://127.0.0.1:5000/restaurant/" + id)
        .then(axios.status)
        .catch((error) => console.log(error));
      console.log(axios.status);
      this.update();
      // axios
      //   .get("http://127.0.0.1:5000/restaurants")
      //   .then((res) => (this.restaurants = res.data));
      // // .catch(error =>this.resto =[{"name":"Erreur de chargement"}])
      // console.log(this.restaurants);
      // axios
      //   .get("http://127.0.0.1:5000/employes")
      //   .then((res) => (this.team = res.data));
      // // .catch(error =>this.team =[{"first_name":"Erreur de chargement"}])
      // console.log(this.team);
    },
    delPersonnel(event, id) {
      console.log("delPersonnel (id) =>", id);
      axios
        .delete("http://127.0.0.1:5000/employes/" + id)
        .then(axios.status)
        .catch((error) => console.log(error));
      console.log(axios.status);
      this.update();
      // .catch(error => this.posts=[{"name":"erreur de suppression"}])
      // axios
      //   .get("http://127.0.0.1:5000/restaurants")
      //   .then((res) => (this.restaurants = res.data));
      // // .catch(error =>this.resto =[{"name":"Erreur de chargement"}])
      // console.log(this.restaurants);
      // axios
      //   .get("http://127.0.0.1:5000/employes")
      //   .then((res) => (this.team = res.data));
      // // .catch(error =>this.team =[{"first_name":"Erreur de chargement"}])
      // console.log(this.team);
    },
  },
  mounted() {
    this.update();

    // axios
    //   .get("http://127.0.0.1:5000/restaurants")
    //   .then((res) => (this.restaurants = res.data)); // .catch(error => this.restaurants = [{ "name": "Erreur de chargement" }])
    // console.log(this.restaurants);
    // axios
    //   .get("http://127.0.0.1:5000/employes")
    //   .then((res) => (this.team = res.data));
    // // .catch(error => this.team = [{ "first_name": "Erreur de chargement" }])
    // console.log(this.team);
  },
};
// let app = new Vue({
//             el: "#app",
//             data: {
//                 resto: [{"name":"Resto1", "id_restaurant":"1","nbCouverts":"false"}, {"name": "Resto 2","id_restaurant":"2","nbCouverts":"false"},{"name":"Resto 3","id_restaurant":"3","nbCouverts":"false"}],
//                 team: [{"id_employe":"id de l'employe","first_name":"ici le prénom"}, {"last_name":"ici le nom"}],
//             },
//             methods:{
//                 update() {
//                     axios.get("http://127.0.0.1:5000/restaurants")
//                     .then(res=>this.resto=res.data)
//                     // .catch(error =>this.resto =[{"name":"Erreur de chargement"}])
//                     console.log(this.resto)
//                     axios.get("http://127.0.0.1:5000/employes")
//                     .then(res=>this.team=res.data)
//                     // .catch(error =>this.team =[{"first_name":"Erreur de chargement"}])
//                         console.log(this.team)

//                 },
//                 delRestaurant(event,id){
//                     console.log('delRestaurant (id) =>',id)
//                     axios.delete("http://127.0.0.1:5000/restaurants/"+id)
//                     .then(status)
//                     // .catch(error => this.posts=[{"name":"erreur de suppression"}])
//                     // console.log(status)
//                     axios.get("http://127.0.0.1:5000/restaurants")
//                     .then(res=>this.resto=res.data)
//                     // .catch(error =>this.resto =[{"name":"Erreur de chargement"}])
//                     console.log(this.resto)
//                     axios.get("http://127.0.0.1:5000/employes")
//                     .then(res=>this.team=res.data)
//                     // .catch(error =>this.team =[{"first_name":"Erreur de chargement"}])
//                         console.log(this.team)
//                 },
//                 delPersonnel(event,id){
//                     console.log('delPersonnel (id) =>',id)
//                     axios.delete("http://127.0.0.1:5000/employes/"+id)
//                     .then(status)
//                     // .catch(error => this.posts=[{"name":"erreur de suppression"}])
//                     axios.get("http://127.0.0.1:5000/restaurants")
//                     .then(res=>this.resto=res.data)
//                     // .catch(error =>this.resto =[{"name":"Erreur de chargement"}])
//                     console.log(this.resto)
//                     axios.get("http://127.0.0.1:5000/employes")
//                     .then(res=>this.team=res.data)
//                     // .catch(error =>this.team =[{"first_name":"Erreur de chargement"}])
//                         console.log(this.team)

//                 },
//             },
//         });
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
