/* eslint-disable */
<template>
  <div class="about" scoped>
    <div id="bulle">
      <span id="information"></span>
    </div>
    <div class="container">
      <h1>Ajout d'un employé</h1>
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
          <legend>Information(s)</legend>
          <fieldset>
            <legend>[Date d'embauche]</legend>
            <input
              type="date"
              name="hire_date"
              id="hire_date"
              v-model="posts.hire_date"
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
                :key="index"
                :value="id_restaurant"
              >
                {{ restaurant.name }} {{ index }}
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
  name: "PostComponent",
  data() {
    return {
      posts: {
        first_name: null,
        last_name: null,
        hire_date: new Date(),
        restaurant_id: 1,
        id_restaurant: 1,
      },
      restaurants: {
        name: null,
        city: null,
        id_restaurant: 1,
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
      if (ln.match(/^[a-zA-Z][a-zA-Z][a-zA-Z]+$/)) {
        document.getElementById("button").disabled = false;
        document.getElementById("information").innerHTML = "";
      } else {
        document.getElementById("button").disabled = true;
        document.getElementById("information").innerHTML =
          "le nom doit contenir que des caractères";
      }
      e.preventDefault();
    },
    verifFirst(e) {
      document.getElementById("bulle").className = "alert alert-warning";
      let fn = document.getElementById("first_name").value;
      console.log(fn);
      if (fn.match(/^[a-zA-Z][a-zA-Z][a-zA-Z]+$/)) {
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
