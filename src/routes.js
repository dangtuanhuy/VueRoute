
import HelloWorld from "./components/HelloWorld.vue";
import myForm from "./components/myForm.vue";
import formBootraps from "./components/fromBootstraps.vue";
import page404 from "./components/404Page.vue";
import carouselBootstraps from "./components/carouselBootstraps.vue";
import datatableBootstraps from "./components/datatableBootstraps.vue";
import menuHeader from "./components/Header.vue";
import footermdb from "./components/Footer.vue";
import signin from "./components/SignUp.vue"
import login from "./components/Login.vue"
export const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: carouselBootstraps,
     
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/myForm', name: 'myForm', components: {
            default: myForm,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/signip', name: 'signin', components:{
            default: signin,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }

    },
    {
        path: '/login', name: 'login', components:{
            default: login,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/myFormBoots', name: 'myFormBoots', components: {
            default: formBootraps,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/helloWorld', name: 'helloWorld', components: {
            default: HelloWorld,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/tableData', name: 'tableData', components: {
            default: datatableBootstraps,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/page404', name: 'page404', components: {
            default: page404,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/page404' }
];