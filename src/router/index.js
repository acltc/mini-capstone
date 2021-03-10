import Vue from "vue";
import VueRouter from "vue-router";

import Exercise1App from "../views/exercise1/App.vue";
import Exercise1ProductsIndex from "../views/exercise1/ProductsIndex.vue";
import Exercise1ProductsShow from "../views/exercise1/ProductsShow.vue";
import Exercise1ProductsNew from "../views/exercise1/ProductsNew.vue";
import Exercise1ProductsEdit from "../views/exercise1/ProductsEdit.vue";

import Exercise3App from "../views/exercise3/App.vue";
import Exercise3ProductsIndex from "../views/exercise3/ProductsIndex.vue";
import Exercise3ProductsShow from "../views/exercise3/ProductsShow.vue";
import Exercise3ProductsNew from "../views/exercise3/ProductsNew.vue";
import Exercise3ProductsEdit from "../views/exercise3/ProductsEdit.vue";

import Exercise4App from "../views/exercise4/App.vue";
import Exercise4ProductsIndex from "../views/exercise4/ProductsIndex.vue";
import Exercise4ProductsShow from "../views/exercise4/ProductsShow.vue";
import Exercise4ProductsNew from "../views/exercise4/ProductsNew.vue";
import Exercise4ProductsEdit from "../views/exercise4/ProductsEdit.vue";
import Exercise4OrdersIndex from "../views/exercise4/OrdersIndex.vue";
import Exercise4OrdersShow from "../views/exercise4/OrdersShow.vue";
import Exercise4Signup from "../views/exercise4/Signup.vue";
import Exercise4Login from "../views/exercise4/Login.vue";
import Exercise4Logout from "../views/exercise4/Logout.vue";

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
  {
    path: "/model-associations",
    component: Exercise3App,
    children: [
      {
        path: "products",
        component: Exercise3ProductsIndex,
        name: "exercise3-products-index",
      },
      {
        path: "products/new",
        component: Exercise3ProductsNew,
        name: "exercise3-products-new",
      },
      {
        path: "products/:id",
        component: Exercise3ProductsShow,
        name: "exercise3-products-show",
      },
      {
        path: "products/:id/edit",
        component: Exercise3ProductsEdit,
        name: "exercise3-products-edit",
      },
    ],
  },
  {
    path: "/authentication",
    component: Exercise4App,
    children: [
      {
        path: "products",
        component: Exercise4ProductsIndex,
        name: "exercise4-products-index",
      },
      {
        path: "products/new",
        component: Exercise4ProductsNew,
        name: "exercise4-products-new",
      },
      {
        path: "products/:id",
        component: Exercise4ProductsShow,
        name: "exercise4-products-show",
      },
      {
        path: "products/:id/edit",
        component: Exercise4ProductsEdit,
        name: "exercise4-products-edit",
      },
      {
        path: "orders",
        component: Exercise4OrdersIndex,
        name: "exercise4-orders-index",
      },
      {
        path: "orders/:id",
        component: Exercise4OrdersShow,
        name: "exercise4-orders-show",
      },
      {
        path: "signup",
        component: Exercise4Signup,
        name: "exercise4-signup",
      },
      {
        path: "login",
        component: Exercise4Login,
        name: "exercise4-login",
      },
      {
        path: "logout",
        component: Exercise4Logout,
        name: "exercise4-logout",
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
