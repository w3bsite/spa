<template>
  <div>
    <div v-for="(game, i) in games" :key="i" class="row">
      <q-card class="col q-ma-md">
        <q-bar class="bg-indigo" v-if="er">{{ e }}</q-bar>
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
      ur: "/posts",
      games: [],
      er: "",
    };
  },
  created() {
    this.gt();
  },
  methods: {
    gt: function () {
      this.$axiosSec
        .get(this.ur)
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