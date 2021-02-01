<template>
  <div>
    <q-banner class="bg-primary text-white">
      redirect <br />{{ jw }} <br />{{ usr }}<br />{{ mail }}
    </q-banner>
    <q-btn color="white" to="/home" text-color="black" label="Standard" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      resp: [],
      jw: "",
      usr: "",
      mail: "",
    };
  },
  mounted() {
    setTimeout(() => this.useEffect(), 0.5);
    setTimeout(() => this.$router.push({ name: "All Articles" }), 1000);
  },
  methods: {
    useEffect: function () {
      // Successfully logged with the provider
      // Now logging with strapi by using the access_token (given by the provider) in props.location.search
      this.$axios
        .get(
          `${process.env.backendUrl}/auth/google/callback?access_token=${this.$route.query.access_token}`
        )
        .then((res) => {
          if (res.status == 200) {
            this.resp = res.data;
            this.jw = this.resp.jwt;
            this.usr = this.resp.user.username;
            this.mail = this.resp.user.email;
            this.$q.cookies.set("jwt", this.jw, { path: "/" });
          }
        })
        .then();
    },
  },
};
</script>

<style>
</style>