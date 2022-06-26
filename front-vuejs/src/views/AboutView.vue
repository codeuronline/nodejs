<template>
  <div class="about">
    <h1>Formulaire Ajout restaurant</h1>
    <form @submit="postData" method="post">
      <label for="name"> Nom : </label>
      <input
        type="text"
        id="name"
        name="name"
        value=""
        placeholder="Entrer le nom du restaurant"
        v-model="posts.name"
      />
      <label for="city"> Ville : </label>
      <input
        type="text"
        id="city"
        name="city"
        value=""
        placeholder="Entrer la ville du restaurant"
        v-model="posts.city"
      />
      <br />
      <label for="nbCouverts"> Nombre de couverts : </label>
      <input
        type="number"
        id="nbCouverts"
        name="nbCouverts"
        min="1"
        value=""
        placeholder="Entrer le nombre de couverts"
        v-model="posts.nbCouverts"
      />
      <br />
      <label for="nbCouverts"> Terrasse : </label>
      <input
        type="radio"
        id="terrasse"
        name="terrasse"
        value="oui"
        checked
        v-model="posts.terrasse"
      />oui<input type="radio" id="terrasse" name="terrasse" value="non" />non
      <label for="nbCouverts"> Parking : </label>
      <input
        type="radio"
        id="parking"
        name="parking"
        value="oui"
        checked
        v-model="posts.parking"
      />oui
      <input
        type="radio"
        id="parking"
        name="parking"
        value="non"
        v-model="posts.parking"
      />non
      <br />
      <button type="submit">Insérer</button> |
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
