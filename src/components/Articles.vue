<template>
  <div class="q-ma-md">
    <div class="row">
      <q-card-section class="q-pa-md col-md-1">
        <q-chip size="16px">
          <q-avatar color="red" icon="library_books" text-color="white" />
          {{ this.url }}
        </q-chip>
      </q-card-section>
      <q-card-section v-if="er">
        <q-bar>{{ er }}</q-bar>
      </q-card-section>
      <q-select
        square
        outlined
        v-model="order"
        :options="options"
        label="Order-By"
        class="q-mx-auto col-sm-4 col-xs-12"
        @input="gt(order)"
      />
    </div>
    <div v-for="(article, i) in articles" :key="i" class="">
      <q-card
        bordered
        :class="[{ hidden: !article.bool }, 'col', 'q-mx-sm', 'q-my-md']"
      >
        <div :id="i" class="col">
          <q-card-section class="row">
            <div class="text-body1 col">
              {{ article.title }}
            </div>
            <div>
              <a href="#" @click="article.bool = false & del(article.id, i)">
                <q-icon name="clear" size="20px"></q-icon>
              </a>
            </div>
          </q-card-section>
          <q-separator inset />
          <q-card-section class="text-body2">
            {{ article.content.substring(0, 290) + "...." }}
          </q-card-section>
          <q-card-actions class="row">
            <q-btn
              class="offset-md-11 col-xs"
              color="primary"
              text-color="white"
              label="Continue"
              :to="`/articles/` + article.id"
            />
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dat: null,
      coo: [],
      articles: [],
      s: null,
      er: null,
      login: false,
      hid: false,
      url: "/articles",
      options: ["id", "title", "updated_at"],
      order: "id",
    };
  },
  created() {
    this.coo = this.$q.cookies.getAll();
    this.gt(this.order);
  },

  mounted() {
    // setTimeout(this.gt, 10);
  },
  computed: {
    // orderedUsers: function () {
    //   return _.orderBy(this.dat, "title");
    // },
  },
  methods: {
    met: function (i) {
      var element = this.$refs[i];
      var top = element.offsetTop;
      console.log(i);
      console.log(element);

      // window.scrollTo(0, 500);
      element.scrollIntoView({ behavior: "smooth" });
    },
    al(i) {
      alert(i);
    },
    del: function (id, i) {
      this.$axios
        .delete(this.url + "/" + id, {
          headers: {
            Authorization: "Bearer" + " " + this.coo.jwt,
          },
        })
        .then(() => {
          // this.articles.splice(i, 1);
          // i != true;
          console.log(i);
          i = false;
          console.log(1);
        })
        .then(() => {
          // this.gt();
        })
        .catch((error) => ((this.login = true), (this.er = error)));
    },
    gt: function (order) {
      this.$axios
        .get(this.url + `/?_sort=${order}:ASC`, {
          headers: {
            Authorization: "Bearer" + " " + this.coo.jwt,
          },
        })
        .then((r) => {
          console.log(r);
          const data = r.data;
          const receiver = [];
          for (const key in data) {
            if (data.hasOwnProperty.call(data, key)) {
              const element = data[key];
              receiver.push(element);
              if (this.articles !== receiver) {
                this.articles = receiver;
              } else {
              }
            }
          }
        })
        .catch((e) => {
          this.er = e;
        });
      setTimeout(() => {
        this.gt, 10000;
      });
    },
  },
};
</script>
