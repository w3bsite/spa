 <template>
  <q-card class="my-card q-ma-md">
    <q-card-section>
      <q-btn
        type="a"
        :href="env"
        color="orange-10"
        text-color="white"
        label="Login with google"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      ur: "connect/google",
      env: "",
    };
  },
  mounted() {
    this.env = process.env.backendUrl + "/" + this.ur;
  },
  methods: {
    gtg: function () {
      this.$axios.get(this.ur);
    },
  },
};
</script>

<style>
</style>