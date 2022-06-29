<template>
  <div class="home">
    <h2>
      <img width="50px" alt="Vue logo" src="../assets/restaurant.png" />
      Dashboard : Restaurants inscrits en Base de données
    </h2>
    <List msg="Liste des restaurants" />
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";
export default {
  name: "HomeView",
  components: {
    List,
  },
};
</script>
