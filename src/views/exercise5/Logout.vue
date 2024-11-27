<template>
  <div class="logout"></div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("admin");
    axios.delete("http://localhost:3000/sessions");
    this.$router.push({ name: "exercise5-products-index" });
  },
};
</script>
