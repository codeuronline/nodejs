<template>
  <div id="app" class="cadre">
    <span id="information"></span>
    <table class="table table-bordered">
      <thead>
        <tr class="table table-dark">
          <th scope="col">Nom</th>
          <th scope="col">
            Information (Ville / Nombre de couverts / Parking / Terrasse)
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="(restaurant, index) in restaurants" v-bind:key="index">
        <tr class="color" :class="{ red: index % 2 }">
          <td>
            <div width="100%">
              <h2>{{ restaurant.name }}</h2>
            </div>
          </td>
          <td width="90%">
            <!-- <div height="100%"> -->
            <h2 v-if="restaurant.nbCouverts != 'false'">
              {{ restaurant.city }}&nbsp;&nbsp;
              {{ restaurant.nbCouverts }} couverts
              <img
                class="box"
                v-if="restaurant.parking === 'oui'"
                src="../assets/parking.png"
              /><img
                class="box"
                v-if="restaurant.parking === 'non'"
                src="../assets/noparking.png"
              /><img
                class="box"
                v-if="restaurant.terrasse === 'oui'"
                src="../assets/terrasse.png"
              /><img
                v-if="restaurant.terrasse === 'non'"
                class="box"
                src="../assets/noterrasse.png"
              />
            </h2>
            <!-- </div> -->
          </td>
          <td width="10%">
            <button
              v-on:click="delRestaurant($event, restaurant.id_restaurant)"
            >
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr class="lightgreen" :class="{ lightred: index % 2 }">
          <td scope="col" valign="middle">
            <div>
              <h3>EQUIPE</h3>
            </div>
          </td>
          <td scope="col" width="90%">
            <div
              width="100%"
              v-for="(employe, index2) in team"
              v-bind:key="index2"
            >
              <!-- <h4> -->
              {{
                restaurant.id_restaurant == employe.restaurant_id
                  ? employe.first_name + " " + employe.last_name
                  : null
              }}
              <!-- </h4> -->
            </div>
          </td>
          <td scope="col" width="10%">
            <div
              width="100%"
              v-for="(employe, index2) in team"
              v-bind:key="index2"
            >
              <!-- <h4> -->
              <p v-if="restaurant.id_restaurant === employe.restaurant_id">
                <button>
                  <i
                    class="bi bi-trash"
                    v-on:click="delPersonnel($event, employe.id_employe)"
                  ></i>
                </button>
              </p>
              <!-- </h4> -->
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
    async update() {
      await axios
        .get("http://127.0.0.1:5000/restaurants")
        .then((res) => (this.restaurants = res.data));
      // .catch(error =>this.resto =[{"name":"Erreur de chargement"}])
      console.log(this.restaurants);
      await axios
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
    },
    delPersonnel(event, id) {
      console.log("delPersonnel (id) =>", id);
      axios
        .delete("http://127.0.0.1:5000/employes/" + id)
        .then(axios.status)
        .catch((error) => console.log(error));
      console.log(axios.status);
      this.update();
    },
  },
  async mounted() {
    this.update();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color {
  background-color: rgb(16, 92, 92);
}
.lightgreen {
  background-color: rgb(211, 238, 238);
}

.red {
  background-color: crimson;
}
.lightred {
  background-color: rgb(229, 89, 117);
}
i :hover {
  cursor: pointer;
}
.boxS {
  width: 20px;
}
.box {
  width: 30px;
  height: 30px;
}
.cadre {
  margin: 0 100px;
}
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
