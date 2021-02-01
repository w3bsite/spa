<template>
  <Nav>
    <router-view></router-view>
  </Nav>
</template>

<script>
import Nav from "components/Nav.vue";

export default {
  name: "Home",
  components: { Nav },
  data() {
    return {};
  },
  mounted() {},
};
</script>
