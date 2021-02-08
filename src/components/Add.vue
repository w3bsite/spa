  
<template>
  <div>
    <sendcard :coo="this.coo" :urlSel="this.urlSel"></sendcard>
  </div>
</template>

 <script>
import sendcard from "./sendcard";
export default {
  name: "addnew",
  components: { sendcard },

  data() {
    return {
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
