<template>
  <div class="wrap">
    <div class="q-pa-sm flex flex-center">
      <q-pagination
        color="indigo"
        v-model="current"
        :max="152"
        :max-pages="5"
        :boundary-links="true"
        :boundary-numbers="true"
        @input="(visible = !visible), gt(current)"
      >
      </q-pagination>
    </div>
    <div>
      <transition-group name="fade" :appear="true">
        <span class="fixed-center" v-if="visible" key="id">
          <q-spinner class="col q-my-auto" color="primary" size="6em" />
        </span>
        <div v-else v-for="game in games" :key="game.id" class="row">
          <q-card class="col q-ma-md car">
            <q-bar class="bg-indigo" v-if="er">{{ er }}</q-bar>
            <q-card-section
              :class="op ? visible : null"
              class="text-right dir-right"
              v-html="game.content.rendered"
            >
            </q-card-section>
          </q-card>
        </div>
      </transition-group>
    </div>
    <div class="q-pa-sm flex flex-center">
      <q-pagination
        color="indigo"
        v-model="current"
        :max="152"
        :max-pages="5"
        :boundary-links="true"
        :boundary-numbers="true"
        @input="(visible = !visible), gt(current)"
      >
      </q-pagination>
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
      visible: false,
      showSimulatedReturnData: false,
    };
  },
  created() {
    this.gt();
  },
  mounted() {},

  methods: {
    alarm: function (a) {
      alert(a);
    },
    gt: function (page = 1) {
      this.$axiosSec
        .get(this.ur + `?per_page=8&page=` + page)
        .then((r) => {
          console.log("loading");
          this.games = r.data;
        })
        .then((r) => {
          console.log("loading Done"),
            setTimeout(() => {
              this.visible = false;
            }, 1000);
        })
        .catch((e) => {
          this.er = e;
        });
    },
  },
};
</script>

<style lang='sass'>
div
  transition: 1s
.wrap
  min-height: 980px
.op
  opacity: 0
img

  width: 30%
  transition: 1s
  &:hover
    width: 31%
[src$="money.jpg"]
    max-width: 20px

.fade-enter-active, .fade-leave-active
  transition: opacity 2s

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity: 0
</style>