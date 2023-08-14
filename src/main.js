import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import selectTime from '@/components/SelectTime/index'
import promptMessage from '@/components/PromptMessage/index'

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import  WebMonitor  from 'destinteam-web-monitor'

Vue.config.errorHandler = function (err, vm, info) {
  let { message, stack } = err;

  // Processing error
  let resourceUrl,col,line;
  let errs = stack.match(/\(.+?\)/)
  if(errs&&errs.length) errs = errs[0]
  errs=errs.replace(/\w.+js/g,$1=>{resourceUrl=$1;return '';})
  errs=errs.split(':')
  if(errs&&errs.length>1)line=parseInt(errs[1]||0);col=parseInt(errs[2]||0)

  // Fixed parameters
  // Call the Performance.addError method
  WebMonitor.addError({
    msg:message,
    col:col,
    line:line,
    resourceUrl:resourceUrl
  })
}

WebMonitor({
  domain:'http://test.com/api',
  outtime:500,
  isPage:true,
  isAjax:true,
  isResource:true,
  isError:true,
  add:{
    appId:'123456789'
  },
  filterUrl:['http://localhost:8080/xxx/xxx']
},data=>{
    console.log(data)
})
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.component('selectTime',selectTime)
Vue.component('promptMessage',promptMessage)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
