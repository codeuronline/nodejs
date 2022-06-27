/* eslint-disable */
<template>
  <div class="about">
    <h1>Ajout d'un employé</h1>
    <form @submit="postData" method="post">
      <fieldset>
        <legend>[Identité]</legend>
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Nom"
          v-model="posts.last_name"
        />
        <br />
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Prénom"
          v-model="posts.first_name"
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
      <button type="submit">Valider</button>&nbsp;&nbsp;
      <button type="cancel">Annuler</button>
    </form>
  </div>
</template>
<script>
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
    axios
      .get("http://127.0.0.1:5000/restaurants")
      .then((res) => (this.restaurants = res.data));
  },
};
</script>
