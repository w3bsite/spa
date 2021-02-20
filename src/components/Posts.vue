<template>
  <div>
    <getcard :site="this.site" :url="this.url"></getcard>
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
      site: "https://sabz.herokuapp.com/https://fitech.herokuapp.com/",
    };
  },
};
</script>
