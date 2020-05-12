import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import create from "./components/create";
import index from "./components/index";
import edit from "./components/edit";

const routes = [
    {
        path: "/post/create",
        component: create
    },
    {
        path: "/",
        component: index
    },
    {
        path: "/post/edit/:id",
        component: edit
    }
];

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL,
    mode: "history"
});

export default router;
