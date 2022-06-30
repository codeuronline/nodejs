<template>
  <div class="about" scoped>
    <div id="bulle">
      <span id="information"></span>
    </div>
    <div class="container">
      <h1>Formulaire : Ajout restaurant</h1>
      <form @submit="postData" method="post">
        <fieldset>
          <legend>[Identification]</legend>
          <!-- <label for="name"> Nom : </label> -->
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom du restaurant"
            v-model="posts.name"
          />
          <br />
          <!-- <label for="city"> Ville : </label> -->
          <input
            type="text"
            id="city"
            name="city"
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
            placeholder="Nombre de couverts"
            value=""
            v-model="posts.nbCouverts"
          />
          <br />
          <fieldset>
            <legend>[Terrasse]</legend>
            <input
              type="radio"
              name="terrasse"
              value="oui"
              v-model="posts.terrasse"
            />
            <label for="terrasse">&nbsp;&nbsp;oui&nbsp;&nbsp;</label>
            <input
              type="radio"
              name="terrasse"
              value="non"
              v-model="posts.terrasse"
            />
            <label for="terrasse">&nbsp;&nbsp;non&nbsp;&nbsp;</label>
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
            <label for="parking">&nbsp;&nbsp;oui&nbsp;&nbsp;</label>
            <input
              type="radio"
              id="parking"
              name="parking"
              value="non"
              v-model="posts.parking"
            />
            <label for="parking">&nbsp;&nbsp;non&nbsp;&nbsp;</label>
          </fieldset>
        </fieldset>
        <br />
        <button class="btn-primary" type="submit">Insérer</button>&nbsp;&nbsp;
        <button class="btn-primary" type="cancel">Annuler</button>
      </form>
    </div>
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
        nbCouverts: "",
        terrasse: "non",
        parking: "non",
      },
    };
  },
  methods: {    verifLast(e) {
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
        .post("http://127.0.0.1:5000/restaurant", this.posts)
        .then((result) => {
          console.console.log(result);
        });
      e.preventDefault();
      document.getElementById("bulle").className = "alert alert-success";
      document.getElementById("information").innerHTML = "Restaurant Ajouté";
      document.querySelector("button").disabled = true;
      setTimeout(function () {
        document.getElementById("information").innerHTML = "";
        document.getElementById("bulle").className = "";
        document.querySelector("button").disabled = false;
      }, 3000);
    },
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
