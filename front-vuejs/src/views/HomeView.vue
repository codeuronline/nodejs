<template>
  <div class="home">
    <h2>
      <img width="50px" alt="Vue logo" src="../assets/restaurant.png" />
      Liste des Restaurants
    </h2>
    <List msg="Liste des restaurant" />
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
