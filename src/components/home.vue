<template>
  <div>
    <div v-for="(game, i) in games" :key="i" class="row">
      <q-card class="col q-ma-md">
        <q-bar class="bg-indigo" v-if="e">{{ e }}</q-bar>
        <q-card-section
          v-html="game.content.rendered"
          class="text-body2 text-right"
        >
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "api/posts",
      games: [],
      e: "",
    };
  },
  created() {
    this.gt();
  },
  methods: {
    gt: function () {
      this.$axios
        .get(this.url)
        .then((r) => {
          this.games = r.data;
        })
        .catch((e) => {
          this.er = e;
        });
    },
  },
};
</script>

<style lang='sass'>
p
  img
    max-width: 350px
</style>