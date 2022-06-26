<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <List msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/List.vue";
import List from "@/components/List.vue";
export default {
  name: "HomeView",
  components: {
    List,
  },
};
</script>
