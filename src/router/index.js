import Vue from "vue";
import VueRouter from "vue-router";

import Exercise1App from "../views/exercise1/App.vue";
import Exercise1ProductsIndex from "../views/exercise1/ProductsIndex.vue";
import Exercise1ProductsShow from "../views/exercise1/ProductsShow.vue";
import Exercise1ProductsNew from "../views/exercise1/ProductsNew.vue";
import Exercise1ProductsEdit from "../views/exercise1/ProductsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/restful-routes",
    component: Exercise1App,
    children: [
      {
        path: "products",
        component: Exercise1ProductsIndex,
        name: "exercise1-products-index",
      },
      {
        path: "products/new",
        component: Exercise1ProductsNew,
        name: "exercise1-products-new",
      },
      {
        path: "products/:id",
        component: Exercise1ProductsShow,
        name: "exercise1-products-show",
      },
      {
        path: "products/:id/edit",
        component: Exercise1ProductsEdit,
        name: "exercise1-products-edit",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
