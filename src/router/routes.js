const routes = [
  {
    name: "Home",
    path: "/",
    redirect: { name: "Home Page" },
    component: () => import("pages/Home.vue"),
    children: [
      {
        name: "Home Page",
        icon: "home",
        path: "home",

        component: () => import("components/home.vue")
      },
      {
        name: "All Articles",
        icon: "article",
        path: "articles",
        meta: { icon: "task" },
        component: () => import("components/Articles.vue")
      },

      {
        name: "Single Article",
        icon: "article",
        path: ":id(\\d+)",
        component: () => import("components/singlearticle.vue")
      },
      {
        name: "Redirect",
        icon: "person",
        path: "/connect/google/redirect",
        component: () => import("components/redirect.vue")
      },
      {
        name: "My Posts",
        icon: "list",
        path: "posts",
        meta: { icon: "task" },
        component: () => import("components/Posts.vue")
      },
      {
        name: "Add New!",
        icon: "mail",
        path: "add",
        component: () => import("components/Add.vue")
      },
      {
        name: "About Us",
        icon: "info",
        path: "me",
        component: () => import("components/aboutUs.vue")
      },
      {
        name: "google",
        icon: "google",
        path: "Login",
        component: () => import("components/google.vue")
      },
      {
        name: "My Chart",
        icon: "analytics",
        path: "chart",
        component: () => import("components/Chart.vue")
      },
      {
        name: "Test",
        icon: "help",
        path: "test",
        component: () => import("components/test.vue")
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
