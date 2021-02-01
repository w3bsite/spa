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
    <div class="row">
      <q-card bordered class="col-xs-12 q-mx-auto">
        <div class="q-pa-md row">
          <q-table
            class="my-sticky-header-table col-sm-12 col-xs-12 col-md-10 q-mx-auto"
            title="Treats"
            :data="posts"
            :columns="columns"
            row-key="name"
            flat
            bordered
          />
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
      columns: [
        {
          name: "id",
          required: true,
          align: "left",
          label: "ID",
          align: "left",
          field: "id",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "title",
          align: "left",
          label: "Title",
          align: "left",
          field: "title",
          sortable: true,
        },
        {
          name: "content",
          align: "left",
          label: "Content",
          align: "left",
          field: "content",
          format: (content) => `${content.substring(0, 30) + "...."}`,
          sortable: true,
        },
      ],
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
    content: function () {
      return sufix(content);
    },
  },
  filters: {
    // Filter definitions
    sufix(content) {
      return content.substring(0, 30) + "....";
    },
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
<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: $primary
    color: white

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>