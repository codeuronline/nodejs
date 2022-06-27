/* eslint-disable */
<template>
  <div class="about">
    <h1>Ajout d'un employé</h1>
    <form @submit="postData" method="post">
      <fieldset>
        <legend>Identité</legend>
        <label for="last_name"> Nom :</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          v-model="posts.last_name"
        />
        <br />
        <label for="first_name"> Prénom :</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          v-model="posts.first_name"
        />
        <br />
      </fieldset>
      <br />
      <fieldset>
        <legend>Information(s)</legend>
        <label for="hire_date">Date d'embauche : </label>
        <input
          type="date"
          name="hire_date"
          id="hire_date"
          v-model="posts.hire_date"
        />
        <label for="restaurant_id"> dans le Restaurant : </label>
        <select
          name="restaurant_id"
          id="restaurant_id"
          v-model="posts.restaurant_id"
        >
          <option value="" :select="selected">
            Séléctionner le Restaurant
          </option>
          <option
            v-for="(restaurant, id_restaurant) in restaurants"
            v-bind:key="id_restaurant"
            value="restaurant.id_restaurant"
          >
            {{ restaurant.name }}
          </option>
        </select>
      </fieldset>
      <button type="submit">Valider</button> |
      <button type="cancel">Annuler</button>
    </form>
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
        hire_date: null,
        restaurant_id: null,
        id_restaurant: null,
      },
      restaurants: {
        name: null,
        city: null,
        id_restaurant: null,
        // nbCouverts: null,
        // parking: null,
        // terrasse: null,
      },
    };
  },

  methods: {
    postData(e) {
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
