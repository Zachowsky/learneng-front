import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/Login";
import Register from "@/components/Register";
import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";
import Flashcards from "@/components/Flashcards";
import ToBe from "@/components/ToBe";
import Greetings from "@/components/Greetings";
import PolitePhrases from "@/components/PolitePhrases";

Vue.use(VueRouter);
Vue.component('login', Login);
Vue.component('register', Register);
Vue.component('main', Main);
Vue.component('dashboard', Dashboard);
Vue.component('flashcards', Flashcards)
Vue.component('to-be', ToBe);
Vue.component('greetings', Greetings);
Vue.component('polite-phrases', PolitePhrases);

/*
const loggedInGuard = (to, from, next) => {
    if (sessionStorage.getItem('loggedIn')) {
        next();
    } else {
        next('/main');
    }
};*/


Vue.mixin({
    methods: {
        changeRoute: function (route) {
            this.$router.push(route).catch(error => {
                if (error.name !== "NavigationDuplicated") {
                    throw error;
                }
            });
        },
    }}
);


const notLoggedInGuard = (to, from, next) => {
    if (sessionStorage.getItem('loggedIn')) {
        next('/');
    } else {
        next();
    }
};

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../components/Main'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('../components/Register'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../components/Dashboard'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/dashboard/flashcards',
        name: 'flashcards',
        component: () => import('../components/Flashcards'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/translate',
        name: 'translate',
        component: () => import('../components/Translator'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/tobe',
        name: 'tobe',
        component: () => import('../components/ToBe'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/polite-phrases',
        name: 'politephrases',
        component: () => import('../components/PolitePhrases'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/greetings',
        name: 'greetings',
        component: () => import('../components/Greetings'),
        beforeEnter: notLoggedInGuard,
    },
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});


export default router;