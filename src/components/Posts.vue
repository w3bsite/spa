<template>
  <div>
    <getcard :url="this.url"></getcard>
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
};
</script>
