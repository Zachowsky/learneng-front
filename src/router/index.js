import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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

/*
const loggedInGuard = (to, from, next) => {
    if (sessionStorage.getItem('loggedIn')) {
        next();
    } else {
        next('/main');
    }
};*/



const notLoggedInGuard = (to, from, next) => {
    if (sessionStorage.getItem('loggedIn')) {
        next('/');
    } else {
        next();
    }
};

const routes = [

    /*MAIN ROUTES*/

    {
        path: '/',
        name: 'main',
        component: () => import('../components/main/Main'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('../components/main/Register'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/main/Login'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../components/main/Dashboard'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/dashboard/flashcards',
        name: 'flashcards',
        component: () => import('../components/main/Flashcards'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/translate',
        name: 'translate',
        component: () => import('../components/main/Translator'),
        beforeEnter: notLoggedInGuard,
    },


    /*DESCRIPTION ROUTES*/

    {
        path: '/countable',
        name: 'countable',
        component: () => import('../components/descriptions/CountableNounsDesc'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/gradation',
        name: 'gradation',
        component: () => import('../components/descriptions/GradationDesc'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/greetings',
        name: 'greetings',
        component: () => import('../components/descriptions/GreetingsDesc'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/past-continuous',
        name: 'past-continuous',
        component: () => import('../components/descriptions/PastContinuousDesc'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/past-simple',
        name: 'past-simple',
        component: () => import('../components/descriptions/PastSimpleDesc'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/personal-pronouns',
        name: 'personal-pronouns',
        component: () => import('../components/descriptions/PersonalPronounsDesc'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/polite-phrases',
        name: 'polite-phrases',
        component: () => import('../components/descriptions/PolitePhrasesDesc'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/present-continuous',
        name: 'present-continuous',
        component: () => import('../components/descriptions/PresentContinuousDesc'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/present-simple',
        name: 'present-simple',
        component: () => import('../components/descriptions/PresentSimpleDesc'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/tobe',
        name: 'tobe',
        component: () => import('../components/descriptions/ToBeDesc'),
        beforeEnter: notLoggedInGuard,
    },
    {
        path: '/uncountable',
        name: 'uncountable',
        component: () => import('../components/descriptions/UncountableNounsDesc'),
        beforeEnter: notLoggedInGuard,
    },

    /*EXERCISES ROUTES*/

    {
        path: '/gradation-ex',
        name: 'gradation-ex',
        component: () => import('../components/exercises/GradationEx'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/nouns-ex',
        name: '',
        component: () => import('../components/exercises/NounsEx'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/past-continuous-ex',
        name: '',
        component: () => import('../components/exercises/PastContinuousEx'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/past-simple-ex',
        name: '',
        component: () => import('../components/exercises/PastSimpleEx'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/personal-pronouns-ex',
        name: '',
        component: () => import('../components/exercises/PersonalPronounsEx'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/present-continuous-ex',
        name: '',
        component: () => import('../components/exercises/PresentContinuousEx'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/present-simple-ex',
        name: '',
        component: () => import('../components/exercises/PresentSimpleEx'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/start-ex',
        name: '',
        component: () => import('../components/exercises/StartEx'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/translation-ex',
        name: '',
        component: () => import('../components/exercises/TranslationEx'),
        beforeEnter: notLoggedInGuard,
    },

];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});


export default router;