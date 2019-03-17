import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import store from './store/store.js'
import 'iview/dist/styles/iview.css';
import './theme/index.less';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

//全局导航钩子
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
 	if (to.meta.requireAuth) {
        if(!isEmptyObject(store.state.user)) {   
            next();
        }
        else { 
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
    Util.title(to.meta.title);
    next();
});


//判断object是否为空
function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});



new Vue({
    el: '#app',
    store,
    router: router,
    render: h => h(App)
});
