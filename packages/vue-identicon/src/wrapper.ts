import component from './Identicon.vue'

export function install(Vue: any) {
  if ((install as any).installed) return
  ;(install as any).installed = true
  Vue.component('MyComponent', component)
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = (window as any).Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = (global as any).Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export component
export default component
