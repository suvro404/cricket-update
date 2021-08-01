import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        component: function () {
            return import('../views/Error404.vue')
        }
    }
];

export default routes