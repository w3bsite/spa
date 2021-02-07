 <template>
  <q-card class="my-card q-ma-md">
    <q-card-section>
      <q-btn
        type="a"
        :href="env"
        color="indigo"
        text-color="white"
        label="Login with google"
      ></q-btn>
      <q-btn
        type="a"
        color="white"
        text-color="black"
        label="Logout"
        @click="x = x + 1"
      ></q-btn>

      <button @click="message = Date()">Try Me</button>{{ message }}
      <br />
      {{ tm }}
      <br />
      {{ ms }}
    </q-card-section>
  </q-card>
</template>

<script>
import { date } from "quasar";
export default {
  data() {
    return {
      ur: "connect/google",
      env: "",
      message: "",

      tm: 1,
    };
  },
  created() {
    setInterval(() => (this.tm += 1), 1000);
  },
  mounted() {
    this.env = process.env.backendUrl + "/" + this.ur;
    this.dd();
  },
  methods: {
    dd: function () {
      return (this.ms = date());
    },
    gtg: function () {
      this.$axios.get(this.ur);
    },
  },
  computed: {
    ms: function () {
      return this.tm + Date();
    },
  },
  watch: {},
};
</script>

<style>
</style>