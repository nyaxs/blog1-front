import App from './app.vue'

export default [{
    path: '/',
    component: App,
    children: [{
            path: '/',
            component: r => require.ensure([], () => r(require('./components/layout/home.vue')), 'home')
        }, {
        path: '/home',
        component: r => require.ensure([], () => r(require('./components/layout/home.vue')), 'home')
    }, {
        path: '/talk',
        component: r => require.ensure([], () => r(require('./components/pages/talk.vue')), 'talk')
    }, {
        path: '/e404',
        component: r => require.ensure([], () => r(require('./components/pages/e404.vue')), 'e404')
    } ,{
        path: '/login',
        component: r => require.ensure([], () => r(require('./components/pages/login.vue')), 'login')
    },{
        path: '/user',
       
        meta: {
            //meta元素
             requireAuth: true,  
            },
       
        component: r => require.ensure([], () => r(require('./components/pages/user.vue')), 'user')
    }

  ]
}]