<template>
  <getmovie :url="this.url"></getmovie>
</template>

<script>
import getmovie from "./getmovie";
export default {
  components: { getmovie },

  data() {
    return {
      url: "http://mydiba.me/wp-json/wp/v2/posts",
    };
  },
};
</script>

<style>
</style>