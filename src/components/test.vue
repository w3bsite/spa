<template>
  <div>
    <div>
      <div v-if="er">{{ er }} <br /></div>
      <div v-else-if="er == null">
        <div v-for="(post, i) in articles" :key="i">
          Data:
          <q-bar class="q-ma-md">
            {{ post.title }}
            <q-btn class="q-px-xl">{{ post.id }}</q-btn>
          </q-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// sample-component.vue
export default {
  data() {
    return {
      url: "/articles",
      id: "",
      articles: [],
      coo: [],
      er: null,
    };
  },
  mounted() {
    this.coo = this.$q.cookies.getAll();
    this.gt();
  },
  methods: {
    gt: function () {
      this.$axios
        .get(this.url, {
          headers: {
            Authorization: "Bearer" + " " + this.coo.jwt,
          },
        })
        .then((r) => {
          const res = r.data;
          for (const key in res) {
            const article = res[key];
            this.articles.push(article);
          }
        })
        .catch((e) => {
          this.er = e;
        });
    },
  },
};
</script>
