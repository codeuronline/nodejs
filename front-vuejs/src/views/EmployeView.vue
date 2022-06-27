/* eslint-disable */
<template>
  <div class="about">
    <h1>Ajout d'un employé</h1>
    <div class="alert alert-warning">
      <span id="information"></span>
    </div>
    <form @submit="postData" method="post">
      <fieldset>
        <legend>[Identité]</legend>
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Nom"
          v-model="posts.last_name"
          @keyup="verif"
        />
        <br />
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Prénom"
          v-model="posts.first_name"
          @keypup="verif"
        />
        <br />
      </fieldset>
      <br />
      <fieldset>
        <legend>[Date d'embauche ]</legend>
        <input
          type="date"
          name="hire_date"
          id="hire_date"
          v-model="posts.hire_date"
          value="Date()"
        />
      </fieldset>
      <fieldset>
        <legend>[Restaurant]</legend>
        <select
          name="restaurant_id"
          id="restaurant_id"
          v-model="posts.restaurant_id"
        >
          <option
            v-for="(restaurant, index) in restaurants"
            v-bind:key="index"
            :value="restaurant.id_restaurant"
          >
            {{ restaurant.name }}
          </option>
        </select>
      </fieldset>
      <button id="valider" type="submit">Valider</button>
      &nbsp;&nbsp;
      <button type="cancel">Annuler</button>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
//import dateFormat from "dateFormat";
export default {
  name: "PostComponent",
  data() {
    return {
      posts: {
        first_name: null,
        last_name: null,
        hire_date: null,
        restaurant_id: "",
        id_restaurant: null,
      },
      restaurants: {
        name: "",
        city: null,
        id_restaurant: "",
        // nbCouverts: null,
        // null, parking: null,
        // terrasse: null,
      },
    };
  },

  methods: {
    verif(e) {
      //&& (document.getElementById("last_name").value.match(/^[a-zA-Z]+$/))) {
      //  cas des 3 caracteres
      console.log((document.getElementById("last_name").value).length);
      if ((document.getElementById("first_name").value).length > 2) {
        document.getElementById("information").innerHTML = "";
        document.querySelector("button").disabled = false;
      } else {
        document.getElementById("information").innerHTML = "Le nom ET le prénom doivent contenir au minimum 3 caractères";
        document.querySelector("button").disabled = true;
      }
        if ((document.getElementById("last_name").value).length > 2) {
          document.getElementById("information").innerHTML = "";
          document.querySelector("button").disabled = false;
        } else {
          document.getElementById("information").innerHTML = "Le nom ET le prénom doivent contenir au minimum 3 caractères";
          document.querySelector("button").disabled = true;
        }
        if (document.getElementById("last_name").value.match(/^[a-zA-Z]+$/)) {
          document.getElementById("information").innerHTML = "";
          document.querySelector("button").disabled = false;
        } else {
          document.getElementById("information").innerHTML = "Le nom ET le prénom doivent contenir QUE des caractères";
          document.querySelector("button").disabled = true;
        }
        e.preventDefault();
      
    },
    postData(e) {
      // if (this.posts.hire_date == null) {
      //   this.posts.hire_date = dateFormat(new Date(), "YYYY-MM-DD");
      // }
      axios
        .post("http://127.0.0.1:5000/employe/", this.posts)
        .then((result) => {
          console.console.log(result);
        });
      e.preventDefault();
    },
  },
  mounted() {
    // document.querySelector("button").disabled = true;
    axios
      .get("http://127.0.0.1:5000/restaurants")
      .then((res) => (this.restaurants = res.data));
  },
};
</script>
