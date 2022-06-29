/* eslint-disable */
<template>
  <div class="about" scoped>
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
            name="last_name"
            placeholder="Entrer le Nom"
            id="last_name"
            v-model="posts.last_name"
            @keyup="verifLast"
          />
        </fieldset>
        <br />
        <fieldset>
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
              <option
                v-for="(restaurant, id_restaurant) in restaurants"
                v-bind:key="id_restaurant"
                :value="restaurant.id_restaurant"
              >
                {{ restaurant.name }}
              </option>
            </select>
          </fieldset>
        </fieldset>
        <br />
        <button class="btn-primary" id="button" type="submit">Valider</button
        >&nbsp;&nbsp;
        <button class="btn-primary" type="cancel">Annuler</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostComponentEmploye",
  data() {
    return {
      posts: {
        first_name: null,
        last_name: null,
        hire_date: new Date(),
        restaurant_id: null,
      },
      restaurants: {
        name: "Selectionnez un Restaurant",
        city: null,
        id_restaurant: "",
        // nbCouverts: null,
        // parking: null,
        // terrasse: null,
      },
    };
  },
  methods: {
    verifLast(e) {
      document.getElementById("bulle").className = "alert alert-waring";
      let ln = document.getElementById("last_name").value;
      console.log(ln);
      if (
        ln.match(
          /^[a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z]+$/
        )
      ) {
        document.getElementById("button").disabled = false;
        document.getElementById("information").innerHTML = "";
      } else {
        document.getElementById("button").disabled = true;
        document.getElementById("information").innerHTML =
          "le Nom doit contenir au minimum 3 lettres et que des lettres";
      }
      e.preventDefault();
    },
    verifFirst(e) {
      document.getElementById("bulle").className = "alert alert-warning";
      let fn = document.getElementById("first_name").value;
      console.log(fn);
      if (
        fn.match(
          /^[a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z]+$/
        )
      ) {
        document.getElementById("button").disabled = false;
        document.getElementById("information").innerHTML = "";
      } else {
        document.getElementById("button").disabled = true;
        document.getElementById("information").innerHTML =
          "le prénom doit contenir au minimum 3 lettres et que des lettres";
      }
      e.preventDefault();
    },
    postData(e) {
      axios
        .post("http://127.0.0.1:5000/employe/", this.posts)
        .then((result) => {
          console.console.log(result);
        });
      document.getElementById("bulle").className = "alert alert-success";
      document.getElementById("information").innerHTML = "Restaurant Ajouté";
      document.querySelector("button").disabled = true;
      setTimeout(function () {
        document.getElementById("information").innerHTML = "";
        document.getElementById("bulle").className = "";
        document.querySelector("button").disabled = false;
      }, 3000);
      e.preventDefault();
    },
  },
  created() {
    // if (document.getElementById("information").innerHTML == "") {
    //   document.getElementsByClassName("alert alert-warning").style.display =
    //     "none";
    // }
    axios
      .get("http://127.0.0.1:5000/restaurants")
      .then((res) => (this.restaurants = res.data));
  },
};
</script>
<style scoped>
div {
  background-color: bisque;
  border: 1px;
  border-radius: 5px;
}
input::placeholder {
  color: blue;
  font-style: italic;
  text-align: center;
}
</style>
