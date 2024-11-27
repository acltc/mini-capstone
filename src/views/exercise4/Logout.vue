<template>
  <div class="logout"></div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    axios.delete("http://localhost:3000/sessions");
    this.$router.push({ name: "exercise4-products-index" });
  },
};
</script>
