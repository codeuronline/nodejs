<template>
  <div class="about">
    <span id="information"></span>
    <h1>Formulaire Ajout restaurant</h1>
    <form @submit="postData" method="post">
      <fieldset>
        <legend>[Identifcation]</legend>
        <label for="name"> Nom : </label>
        <input
          type="text"
          id="name"
          name="name"
          value=""
          placeholder="Nom du restaurant"
          v-model="posts.name"
        />
        <br />
        <label for="city"> Ville : </label>
        <input
          type="text"
          id="city"
          name="city"
          value=""
          placeholder="Ville du restaurant"
          v-model="posts.city"
        />
      </fieldset>
      <br />
      <fieldset>
        <legend>[Informations]</legend>
        <input
          type="number"
          id="nbCouverts"
          name="nbCouverts"
          min="1"
          value=""
          placeholder="Nombre de couverts"
          v-model="posts.nbCouverts"
        />
        <br />
        <fieldset>
          <legend>[Terrasse]</legend>
          <input
            type="radio"
            name="terrasse"
            value="oui"
            checked
            v-model="posts.terrasse"
          />
          <label for="terrasse">oui</label>
          <input
            type="radio"
            name="terrasse"
            value="non"
            v-model="posts.terrasse"
          />
          <label for="terrasse">non</label>
        </fieldset>
        <br />
        <fieldset>
          <legend>[Parking]</legend>
          <input
            type="radio"
            name="parking"
            value="oui"
            v-model="posts.parking"
            checked
          />
          <label for="parking">oui</label>
          <input
            type="radio"
            id="parking"
            name="parking"
            value="non"
            v-model="posts.parking"
          />
          <label for="parking">non</label>
        </fieldset>
      </fieldset>
      <br />
      <button class="btn-submit" type="submit">Insérer</button>
      <button class="btn-cancel" type="cancel">Annuler</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostComponentRestaurant",
  data() {
    return {
      posts: {
        name: null,
        city: null,
        nbCouverts: null,
        terrasse: null,
        parking: null,
      },
    };
  },
  methods: {
    postData(e) {
      axios
        .post("http://127.0.0.1:5000/restaurant", this.posts)
        .then((result) => {
          console.console.log(result);
        });
      e.preventDefault();
    },
  },
};
</script>
