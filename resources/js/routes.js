import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import test from "./components/create";

const routes = [
    {
        path: "/post/create",
        name: "create",
        component: test
    }
];

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL,
    mode: "history"
});

export default router;
