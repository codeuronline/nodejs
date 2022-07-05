/* eslint-disable */
<template>
  <div class="about" scoped>
    <div class="cadre">
      <div id="bulle">
        <span id="information"></span>
      </div>
      <div class="container">
        <h1>Formulaire : Ajout d'un Employé</h1>
        <form @submit="postData" method="post">
          <fieldset>
            <legend>Identité</legend>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Entrer le Prénom"
              v-model="posts.first_name"
              @keyup="verifFirst"
            />
          </fieldset>
          <br />
          <fieldset>
            <input
              type="text"
              name="last_name"
              placeholder="Entrer le Nom"
              id="last_name"
              v-model="posts.last_name"
              @keyup="verifLast"
            />
          </fieldset>

          <br />
          <fieldset>
            <legend>Informations</legend>
            <fieldset>
              <legend>Date d'embauche :</legend>
              <input
                type="date"
                name="hire_date"
                id="hire_date"
                v-model="posts.hire_date"
              />
            </fieldset>
            <br />
            <fieldset>
              <legend>Restaurant</legend>
              <select
                name="restaurant_id"
                id="restaurant_id"
                v-model="posts.restaurant_id"
              >
                <option :value="selected" disabled>{{ selected }}</option>
                <option
                  v-for="(restaurant, id_restaurant) in restaurants"
                  :key="id_restaurant"
                  :value="restaurant.id_restaurant"
                >
                  {{ restaurant.name }}
                </option>
              </select>
            </fieldset>
          </fieldset>
          <br />
          <button class="btn-primary" id="button">Valider</button>&nbsp;&nbsp;
          <button class="btn-primary" type="reset">Annuler</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostComponentEmploye",
  data() {
    return {
      selected: "Sélectionner le restaurant",
      posts: {
        first_name: null,
        last_name: null,
        hire_date: null,
        restaurant_id: null,
      },
      restaurants: {
        name: null,
        city: null,
        id_restaurant: 0,
        // nbCouverts: null,
        // parking: null,
        // terrasse: null,
      },
    };
  },
  methods: {
    verifLast(e) {
      let ln = document.getElementById("last_name").value;
      console.log(ln);
      if (!ln) {
        document.getElementById("bulle").style.visibility = "hidden";
      }
      if (
        ln.match(
          /^[a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z]+$/
        )
      ) {
        document.getElementById("button").disabled = false;
        document.getElementById("bulle").style.visibility = "hidden";
        document.getElementById("information").innerHTML = "";
      } else {
        document.getElementById("bulle").className = "alert alert-warning";
        document.getElementById("button").disabled = true;
        document.getElementById("bulle").style.visibility = "visible";
        document.getElementById("information").innerHTML =
          "le Nom doit contenir au minimum 3 lettres et que des lettres";
      }
      e.preventDefault();
    },
    verifFirst(e) {
      let fn = document.getElementById("first_name").value;
      if (!fn) {
        document.getElementById("bulle").style.visibility = "hidden";
      }
      document.getElementById("bulle").className = "alert alert-warning";
      console.log(fn);
      if (
        fn.match(
          /^[a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z]+$/
        )
      ) {
        document.getElementById("button").disabled = false;
        document.getElementById("bulle").style.visibility = "hidden";
        document.getElementById("information").innerHTML = "";
      } else {
        document.getElementById("button").disabled = true;
        document.getElementById("bulle").style.visibility = "visible";
        document.getElementById("information").innerHTML =
          "le prénom doit contenir au minimum 3 lettres et que des lettres";
      }
      e.preventDefault();
    },
    postData(e) {
      axios.post("http://127.0.0.1:5000/employe", this.posts).then((result) => {
        console.console.log(result);
      });
      document.getElementById("bulle").className = "alert alert-success";
      document.getElementById("bulle").style.visibility = "visible";
      document.getElementById("information").innerHTML = "Employé Ajouté";
      document.querySelector("button").disabled = true;
      setTimeout(function () {
        document.getElementById("information").innerHTML = "";
        document.getElementById("bulle").className = "";
        document.querySelector("button").disabled = false;
      }, 3000);
      e.preventDefault();
    },
  },
  async mounted() {
    // if (document.getElementById("information").innerHTML == "") {
    //   document.getElementsByClassName("alert alert-warning").style.display =
    //     "none";
    // }
    await axios
      .get("http://127.0.0.1:5000/restaurants")
      .then((res) => (this.restaurants = res.data));
  },
};
</script>
<style scoped>
input::placeholder {
  color: blue;
  font-style: italic;
  text-align: center;
}
.cadre {
  color: black;
  margin: 0px 500px;
  padding: 50px;
  width: "400px";
  background-color: chocolate;
  border: 2px solid bisque;
  border-radius: 10px;
}
</style>
