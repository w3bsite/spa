<template>
  <nav>
    <q-layout view="lHh lpr lFf" class="shadow-2">
      <q-page-container>
        <q-page class="row no-wrap">
          <div class="col">
            <div class="column full-height">
              <q-scroll-area
                class="col"
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                visible
              >
                <q-header :reveal-offset="50" reveal elevated>
                  <q-toolbar class="bg-pink shadow-4">
                    <q-btn flat round dense icon="menu" class="q-mr-sm" />
                    <q-avatar>
                      <img
                        src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
                      />
                    </q-avatar>
                    <q-toolbar-title>CMS {{ page }}</q-toolbar-title>
                    <q-btn
                      flat
                      round
                      dense
                      icon="whatshot"
                      @click="this.$q.dark.toggle()"
                    />
                  </q-toolbar>
                </q-header>

                <q-page>
                  <slot :path="page" />
                </q-page>

                <q-footer reveal elevated>
                  <div
                    class="text-white q-gutter-y-md bg-black q-card shadow-4"
                  >
                    <q-tabs
                      class="text-h4"
                      v-model="tab"
                      v-for="route in rout"
                      :key="route.path"
                      inline-label
                      outside-arrows
                    >
                      <q-route-tab
                        v-for="(x, i) in route.children"
                        :key="i"
                        :to="x.path"
                        :icon="x.icon"
                        :label="x.name"
                        :ripple="{ color: 'pink' }"
                      />
                    </q-tabs>
                  </div>
                </q-footer>
              </q-scroll-area>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  name: "Nav",
  data() {
    return {
      tab: "Home Page",

      rout: [
        {
          name: "Home",
          path: "/",
          redirect: { name: "Home Page" },

          children: [
            {
              name: "Home Page",
              icon: "home",
              path: "home",
            },
            {
              name: "My Articles",
              icon: "article",
              path: "articles",

              meta: { icon: "article", type: "/articles" },
            },
            {
              name: "My Posts",
              icon: "list",
              path: "posts",
              meta: { icon: "task" },
            },
            {
              name: "Add More!",
              icon: "mail",
              path: "add",
            },
            {
              name: "About Us",
              icon: "info",
              path: "me",
            },
            {
              name: "Test",
              icon: "help",
              path: "test",
            },
            {
              name: "login",
              icon: "login",
              path: "Login",
              component: () => import("components/google.vue"),
            },
          ],
        },
        // Always leave this as last one,
        // but you can also remove it
        {
          path: "*",
        },
      ],
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "black",
        width: "5px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "white",
        width: "9px",
        opacity: 0.2,
      },
    };
  },
  mounted() {},
  computed: {
    // a computed getter
    page: function () {
      // `this` points to the vm instance
      return this.$route.path;
    },
  },
  methods: {},
};
</script>
