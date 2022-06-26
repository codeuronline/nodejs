<template>
  <div class="employe">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Employe msg="Employé" />
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
      },
    };
  },
  methods: {
    postData(e) {
      axios
        .post("http://127.0.0.1:5000/restaurant/"+this.posts.restaurant_id+"/employe", this.posts)
        .then((result) => {
          console.console.log(result);
        });
      e.preventDefault();
    },
  },
};
</script>
