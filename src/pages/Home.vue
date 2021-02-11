<template>
  <Nav>
    <keep-alive include="addnew">
      <router-view> </router-view>
    </keep-alive>
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
