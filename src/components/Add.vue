  
<template>
  <div>
    <sendcard :coo="this.coo" :urlSel="this.urlSel" :x="this.x"></sendcard>
  </div>
</template>

 <script>
import sendcard from "./sendcard.vue";
export default {
  components: { sendcard },
  data() {
    return {
      x: {},

      coo: [],
      urlSel: ["/articles", "/posts"],
    };
  },
  mounted() {
    this.coo = this.$q.cookies.getAll();
  },
  methods: {},
};
</script>
 
 <style>
</style>
