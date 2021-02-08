<template>
  <div>
    <q-card-section class="q-pa-md">
      <q-chip size="16px">
        <q-avatar color="red" icon="post_add" text-color="white" />
        {{ this.url }}
      </q-chip>
    </q-card-section>
    <q-card class="q-ma-sm q-pa-md">
      <q-form class="row" @submit="sub">
        <q-input
          v-model="x.title"
          class="q-mx-md col-md-3 col-sm-8 col-xs-11"
          label="Enter Your Title"
          outlined
          square
        />
        <!-- <span class="col-md-8 col-xs-0 col-sm-1"></span> -->
        <q-input
          v-model="x.caption"
          class="q-mx-md col-md-3 col-sm-8 col-xs-11"
          label="Enter Your Image URL"
          outlined
          square
        />
        <q-input
          v-model="x.content"
          class="q-ma-md col-md-8 col-sm-10 col-xs-11"
          label="Enter Your content"
          outlined
          square
          type="textarea"
        />

        <span class="col-md-3 col-xs-0 col-sm-1"></span>
        <q-select
          v-model="url"
          :options="urlSel"
          class="q-mb-lg col-md-2 q-mx-md col-sm-3 col-xs-7"
        />
        <br />
        <br />
        <q-separator />
        <q-btn
          class="q-ma-lg offset-md-9 offset-sm-9 col-sm-3 col-md-3 col-xs-10"
          color="primary"
          label="send"
          type="submit"
        />
      </q-form>
    </q-card>
    <q-card class="q-ma-lg">
      <q-card-section>
        <span class="text-body1 text-weight-bolder"> {{ x.title }}</span>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <span class="text-body2"> {{ x.content }}</span>
      </q-card-section>
      <q-card-section>
        <img :src="x.caption" class="col" alt="" /><br />
        {{ x.caption }}
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ["coo", "urlSel"],
  data() {
    return {
      url: "/articles",
      x: {},
    };
  },
  mounted() {
    this.x.bool = true;
  },
  methods: {
    sub: function () {
      this.$axios
        .post(this.url, this.x, {
          headers: {
            Authorization: "Bearer" + " " + this.coo.jwt,
          },
        })
        .then((r) => {
          this.res = r;
          console.log(r.data);
        });
    },
  },
};
</script>
