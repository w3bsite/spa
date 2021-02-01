<template>
  <div class="q-ma-md">
    <q-card-section class="q-pa-md">
      <q-chip size="16px">
        <q-avatar color="red" icon="library_books" text-color="white" />
        {{ this.url }}
      </q-chip>
    </q-card-section>
    <q-card-section v-if="er">
      <q-bar>{{ er }}</q-bar>
    </q-card-section>
    <div v-for="(post, i) in posts" :key="i">
      <q-card
        bordered
        :class="[{ hidden: !post.bool }, 'row', 'q-mx-sm', 'q-my-md']"
      >
        <div :id="i" class="col">
          <q-card-section class="row">
            <div class="text-body1 col">
              {{ post.title }}
            </div>
            <div class="">
              <a href="#" @click="post.bool = false & del(post.id, i)">
                <q-icon name="clear" size="20px"></q-icon>
              </a>
            </div>
          </q-card-section>
          <q-separator inset />
          <q-card-section class="text-body2">
            {{ post.content }}
          </q-card-section>
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
      posts: [],
      s: null,
      er: null,
      login: false,
      hid: false,
      url: "/posts",
    };
  },
  created() {
    this.coo = this.$q.cookies.getAll();
    this.gt();
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
          // this.posts.splice(i, 1);
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
    gt: function () {
      this.$axios
        .get(this.url, {
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
              if (this.posts !== receiver) {
                this.posts = receiver;
              } else {
              }
            }
          }
        })
        .catch((e) => {
          this.er = e;
        });
      setTimeout(() => {
        // this.gt, 100000;
      });
    },
  },
};
</script>
