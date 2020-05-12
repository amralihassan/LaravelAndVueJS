require("./bootstrap");
import Vue from "vue";
import Main from "./Main";
import router from "./routes";

/**
 * vform libraries
 */
import { Form, HasError, AlertSuccess } from "vform";
window.Form  = Form ;
Vue.component(HasError.name, HasError);
Vue.component(AlertSuccess.name, AlertSuccess);

new Vue({
    router,
    render: h => h(Main)
}).$mount("#app");
