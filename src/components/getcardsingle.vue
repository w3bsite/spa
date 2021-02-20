<template>
  <div>
    {{ url }}<br />
    {{ page }}
    <q-banner v-if="er" class="bg-primary text-white">
      {{ er }}
    </q-banner>

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
  props: { ur: { type: String, default: "article" }, site: String },

  data() {
    return {
      url: "",
      articles: [],
      coo: "",
      er: null,
    };
  },
  created() {
    this.url = this.site + this.ur + "/" + this.$route.params.id;
    this.coo = this.$q.cookies.getAll();
    this.gt();
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
    // a computed getter
    page: function () {
      // `this` points to the vm instance
      return this.$route.params.id;
    },
  },
  methods: {
    gt: function () {
      this.$axiosurl
        .get(this.url, {
          headers: {
            Authorization: "Bearer" + " " + this.coo.jwt,
          },
        })
        .then((r) => (this.articles = r.data))
        .catch((e) => {
          this.er = e;
        });
    },
  },
};
</script>
