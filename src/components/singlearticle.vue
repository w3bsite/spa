<template>
  <div>
    {{ url }}<br />
    <div>
      <q-card
        bordered
        :class="[{ hidden: !articles.bool }, 'col', 'q-mx-sm', 'q-my-md']"
      >
        <q-card-section class="row">
          <q-markdown :src="`${articles.title}`"></q-markdown>
        </q-card-section>
        <q-separator inset />
        <q-card-section class="col">
          <q-markdown :src="`${articles.content}`"></q-markdown>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "singleArticle",

  data() {
    return {
      ur: "/articles/",
      url: "",
      articles: [],
      coo: "",
      er: [],
    };
  },
  created() {
    this.url = this.ur + this.$route.params.id;
    this.coo = this.$q.cookies.getAll();
    this.gt();
  },
  mounted() {},
  methods: {
    gt: function () {
      this.$axios
        .get(this.url, {
          headers: {
            Authorization: "Bearer" + " " + this.coo.jwt,
          },
        })
        .then((r) => (this.articles = r.data));
    },
  },
};
</script>
