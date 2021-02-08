<template>
  <div>
    <getcard :coo="this.coo" :url="this.url"></getcard>
  </div>
</template>

<script>
import getcard from "./getcard";
export default {
  components: { getcard },
  data() {
    return {
      coo: [],
      url: "/posts",
    };
  },
  created() {
    this.coo = this.$q.cookies.getAll();
  },
};
</script>
