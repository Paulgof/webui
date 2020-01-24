import Vue from 'vue'
import Router from 'vue-router'
import ModalForm from "./views/ModalForm";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/'
        },
        {
            path: '/modal',
            component: ModalForm
        }
    ]
})