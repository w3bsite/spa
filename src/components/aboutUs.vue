<template>
  <div>
    <div v-for="n in 200" :key="n" @click="sc(n + 10)">
      <span :id="n">{{ n }} </span>
    </div>
    <h3>{{ Title }}</h3>
    <q-card class="my-card" id="ca">
      <q-card-section> test card </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;
export default {
  name: "aboutUs",

  data() {
    return {
      Title: this.$route.name,
    };
  },
  mounted() {},
  methods: {
    sc(i) {
      const ele = document.getElementById(i); // You need to get your element here
      const target = getScrollTarget(ele);
      const offset = ele.offsetTop - ele.scrollHeight;
      const duration = 2000;
      setScrollPosition(target, offset, duration);
    },
  },
};
</script>
