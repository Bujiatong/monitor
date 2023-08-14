import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页概览', icon: 'el-icon-s-grid' }
    }]
  },
  {
    path: '/exceptionsEvents',
    component: Layout,
    redirect: '/exceptionsEvents/scriptException',
    name: 'ExceptionsEvents',
    meta: {
      title: '异常与事件',
      icon: 'el-icon-warning'
    },
    children: [
      {
        path: 'scriptException',
        component: () => import('@/views/exceptionsEvents/scriptException/index'), // Parent router-view
        name: 'ScriptException',
        meta: { title: '脚本异常' },
      },
      {
        path: 'resources',
        component: () => import('@/views/exceptionsEvents/resources/index'),
        name: 'Resources',
        meta: { title: '资源下载' }
      },
      {
        path: 'network',
        component: () => import('@/views/exceptionsEvents/network/index'),
        name: 'Network',
        meta: { title: '网络请求' }
      }
    ]
  },
  {
    path: '/performanceAccess',
    component: Layout,
    redirect: '/performanceAccess/network',
    name: 'PerformanceAccess',
    meta: {
      title: '性能与访问',
      icon: 'el-icon-odometer'
    },
    children: [
      {
        path: 'network',
        component: () => import('@/views/performanceAccess/network/index'), // Parent router-view
        name: 'Network',
        meta: { title: '网络请求' },
      },
      {
        path: 'resources',
        component: () => import('@/views/performanceAccess/resources/index'),
        name: 'Resources',
        meta: { title: '资源下载' }
      },
      {
        path: 'page',
        component: () =>  import('@/views/performanceAccess/page/index'),
        name: 'Page',
        meta: { title: '页面' }
      },
      {
        path: 'router',
        component: () => import('@/views/performanceAccess/router/index'),
        name: 'Router',
        meta: { title: '页面(路由)' }
      }
    ]
  },
  {
    path: '/dimensions',
    component: Layout,
    redirect: '/dimensions/page',
    name: 'Dimensions',
    meta: {
      title: '维度与分布',
      icon: 'nested'
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/dimensions/page/index'), // Parent router-view
        name: 'Page',
        meta: { title: '页面' },

      },
      {
        path: 'browser',
        component: () => import('@/views/dimensions/browser/index'),
        name: 'Browser',
        meta: { title: '浏览器' }
      },
      {
        path: 'os',
        component: () => import('@/views/dimensions/os/index'),
        name: 'Os',
        meta: { title: '操作系统' }
      },
      {
        path: 'ip',
        component: () => import('@/views/dimensions/ip/index'),
        name: 'Ip',
        meta: { title: '访客IP' }
      }
    ]
  },
  {
    path: '/personManage',
    component: Layout,
    redirect: '/personManage/updateUserInfo',
    name: 'PersonManage',
    meta: {
      title: '用户管理',
      icon: 'el-icon-user'
    },
    children: [
      {
        path: 'updateUserInfo',
        component: () => import('@/views/PersonManage/UpdateUserInfo'), // Parent router-view
        name: 'UpdateUserInfo',
        meta: { title: '个人信息管理' },
      },
      {
        path: 'updatePassword',
        component: () => import('@/views/PersonManage/UpdatePassword'),
        name: 'UpdatePassword',
        meta: { title: '个人密码管理' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
