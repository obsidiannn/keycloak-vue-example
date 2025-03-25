import Vue from 'vue'
import Router from 'vue-router'
// import output from '../../build/webpack.base.conf'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const routers = {
    'default': [
        {
            path: '/login',
            component: () => import('@/views/Login/Login'),
            name: 'login',
            hidden: true
        },

        {
            path: '/',
            component: () => import('@/views/Index/Index'),
            hidden: true
        },
        {
            path: '/callback',
            component: () => import('@/views/callback/Index'),
            hidden: true
        }
    ]
}

const createRouter = () => new Router({
    mode: 'history', // require service support
    base: '/',
    scrollBehavior: () => ({y: 0}),
    routes: routers['default']
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
