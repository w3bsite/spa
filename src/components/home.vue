<template>
  <div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        color="indigo"
        v-model="current"
        :max="152"
        :max-pages="6"
        :direction-links="true"
        :boundary-links="true"
        :boundary-numbers="true"
        v-on:input="gt(current)"
      >
      </q-pagination>
    </div>
    <div v-for="(game, i) in games" :key="i" class="row">
      <q-card class="col q-ma-md">
        <q-bar class="bg-indigo" v-if="er">{{ e }}</q-bar>
        <q-card-section v-html="game.content.rendered" class=" ">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ur: "posts",
      current: 1,
      games: [],
      er: "",
    };
  },
  created() {
    this.gt();
  },

  methods: {
    alarm: function (a) {
      alert(a);
    },
    gt: function (page = 1) {
      this.$axiosSec
        .get(this.ur + `?per_page=8&page=` + page)
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
    max-width: 100%
</style>