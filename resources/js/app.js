require("./bootstrap");
import Vue from "vue";
import Main from "./Main";
import router from "./routes";

new Vue({
    router,
    render: h => h(Main)
}).$mount("#app");
