<template>
  <div class="about" scoped>
    <div class="cadre">
      <div id="bulle">
        <h2>
          <span id="information"></span>
        </h2>
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
              @keyup="verifName"
            />
            <br />
            <!-- <label for="city"> Ville : </label> -->
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Ville du restaurant"
              v-model="posts.city"
              @keyup="verifCity"
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
              min="1"
              value="1"
              v-model="posts.nbCouverts"
              @keyup="verifNbCouverts"
              @onchange="verifNbCouverts"
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
          <button id="button" class="btn-primary" type="submit">Insérer</button
          >&nbsp;&nbsp;
          <button class="btn-primary" type="cancel">Annuler</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostComponentRestaurant",
  data() {
    return {
      okName: false,
      okCity: false,
      okNbCouverts: false,
      posts: {
        name: null,
        city: null,
        nbCouverts: "",
        terrasse: "oui",
        parking: "oui",
      },
    };
  },
  methods: {
    verifNbCouverts(e) {
      let nbc = document.getElementById("nbCouverts").value;
      console.log(nbc);
      if (nbc > 1) {
        //document.getElementById("button").disabled = true;
        document.getElementById("information").innerHTML = "";
        this.okNbCouverts = true;
      } else {
        document.getElementById("bulle").className = "alert alert-waring";
        //document.getElementById("button").disabled = false;
        document.getElementById("information").innerHTML =
          "le nombre indiqué doit être positif";
      }
      e.preventDefault();
    },
    verifName(e) {
      document.getElementById("bulle").className = "alert alert-warning";
      let rn = document.getElementById("name").value;
      if (!rn) {
        document.getElementById("bulle").style.visibility = "hidden";
      }
      console.log(rn);
      if (rn.match(/^[a-zéèàùûêâôë/-/ /'A-Z0-9][a-zéèàùûêâôë/-/ /'A-Z]+$/)) {
        // document.getElementById("button").disabled = true;
        document.getElementById("bulle").style.visibility = "hidden";
        document.getElementById("information").innerHTML = "";
        this.okName = true;
      } else {
        document.getElementById("button").disabled = false;
        document.getElementById("bulle").style.visibility = "visible";
        document.getElementById("information").innerHTML =
          "Le Nom du restaurant doit contenir<br> minimum 2 caractères ET autorisés<br> ";
        this.okName = false;
      }
      e.preventDefault();
    },
    verifCity(e) {
      document.getElementById("bulle").className = "alert alert-warning";
      let cn = document.getElementById("city").value;
      if (!cn) {
        document.getElementById("bulle").style.visibility = "hidden";
      }
      console.log(cn);
      if (
        cn.match(
          /^[a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z][a-zéèàùûêâôë/-/ /'A-Z]+$/
        )
      ) {
        //document.getElementById("button").disabled = false;
        document.getElementById("information").innerHTML = "";
        document.getElementById("bulle").style.visibility = "hidden";
        this.okCity = true;
      } else {
        //document.getElementById("button").disabled = true;
        document.getElementById("bulle").style.visibility = "visible";
        document.getElementById("information").innerHTML =
          "la Ville doit contenir au minimum 3 lettres et que des lettres";
        this.okCity = false;
      }
      e.preventDefault();
    },
    postData(e) {
      if (this.okCity == true && this.okName == true && this.okNbCouverts) {
        axios
          .post("http://127.0.0.1:5000/restaurant", this.posts)
          .then((result) => {
            console.console.log(result);
          });
        document.getElementById("bulle").className = "alert alert-success";
        document.getElementById("bulle").style.visibility = "visible";
        document.getElementById("information").innerHTML = "Restaurant Ajouté";
        //document.querySelector("button").disabled = true;
        setTimeout(function () {
          document.getElementById("information").innerHTML = "";
          document.getElementById("bulle").className = "";
          document.forms["name"].reset;
          document.forms["city"].reset;
          // document.querySelector("button").disabled = false;
        }, 3000);
      } else {
        document.getElementById("bulle").className = "alert alert-warning";
        document.getElementById("bulle").style.visibility = "visible";
        document.getElementById("information").innerHTML =
          "Problème avec un champ";
      }
      e.preventDefault();
    },
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
  margin: 0px 300px;
  padding: 5px;
  background-color: aquamarine;
  border: 3px solid bisque;
  border-radius: 10px;
}
input::placeholder {
  color: blue;
  font-style: italic;
  text-align: center;
}
</style>
