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


const loggedInGuard = (to, from, next) => {
    if (sessionStorage.getItem('loggedIn')) {
        next();
    } else {
        next('/');
    }
};


const notLoggedInGuard = (to, from, next) => {
    if (sessionStorage.getItem('loggedIn')) {
        next('/dashboard');
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
        path: '/thankyou',
        name: 'thankyou',
        component: () => import('../components/main/ThankYouPage'),
        beforeEnter: notLoggedInGuard,
    },

    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../components/main/Dashboard'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/dashboard/flashcards',
        name: 'flashcards',
        component: () => import('../components/main/Flashcards'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/translate',
        name: 'translate',
        component: () => import('../components/main/Translator'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/dashboard/add',
        name: 'add',
        component: () => import('../components/main/AddNewFlashcards'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/translation-ex',
        name: 'translation-ex',
        component: () => import('../components/exercises/TranslationEx'),
        beforeEnter: loggedInGuard,
    },

    /*DESCRIPTION ROUTES*/

    {
        path: '/countable',
        name: 'countable',
        component: () => import('../components/descriptions/CountableNounsDesc'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/gradation',
        name: 'gradation',
        component: () => import('../components/descriptions/GradationDesc'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/greetings',
        name: 'greetings',
        component: () => import('../components/descriptions/GreetingsDesc'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/past-continuous',
        name: 'past-continuous',
        component: () => import('../components/descriptions/PastContinuousDesc'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/past-simple',
        name: 'past-simple',
        component: () => import('../components/descriptions/PastSimpleDesc'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/personal-pronouns',
        name: 'personal-pronouns',
        component: () => import('../components/descriptions/PersonalPronounsDesc'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/polite-phrases',
        name: 'polite-phrases',
        component: () => import('../components/descriptions/PolitePhrasesDesc'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/present-continuous',
        name: 'present-continuous',
        component: () => import('../components/descriptions/PresentContinuousDesc'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/present-simple',
        name: 'present-simple',
        component: () => import('../components/descriptions/PresentSimpleDesc'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/tobe',
        name: 'tobe',
        component: () => import('../components/descriptions/ToBeDesc'),
        beforeEnter: loggedInGuard,
    },
    {
        path: '/uncountable',
        name: 'uncountable',
        component: () => import('../components/descriptions/UncountableNounsDesc'),
        beforeEnter: loggedInGuard,
    },

    /*EXERCISES ROUTES*/

    {
        path: '/gradation-ex',
        name: 'gradation-ex',
        component: () => import('../components/exercises/GradationEx'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/nouns-ex',
        name: 'nouns-ex',
        component: () => import('../components/exercises/NounsEx'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/past-continuous-ex',
        name: 'past-continuous-ex',
        component: () => import('../components/exercises/PastContinuousEx'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/past-simple-ex',
        name: 'past-simple-ex',
        component: () => import('../components/exercises/PastSimpleEx'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/personal-pronouns-ex',
        name: 'personal-pronouns-ex',
        component: () => import('../components/exercises/PersonalPronounsEx'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/present-continuous-ex',
        name: 'present-continuous-ex',
        component: () => import('../components/exercises/PresentContinuousEx'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/present-simple-ex',
        name: 'present-simple-ex',
        component: () => import('../components/exercises/PresentSimpleEx'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/start-ex',
        name: 'start-ex',
        component: () => import('../components/exercises/StartEx'),
        beforeEnter: loggedInGuard,
    },

    {
        path: '/translation-ex',
        name: 'translation-ex',
        component: () => import('../components/exercises/TranslationEx'),
        beforeEnter: loggedInGuard,
    },

];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});


export default router;