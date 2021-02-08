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
    };
  },
  created() {
    setInterval(() => (this.tm += 1), 1000);
  },
  mounted() {
    this.env = process.env.backendUrl + "/" + this.ur;
  },
  methods: {},

  watch: {},
};
</script>

<style>
</style>