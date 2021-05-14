import PreventReClick from './preventReClick'

const install = function(Vue) {
  Vue.directive('PreventReClick', PreventReClick)
}

if (window.Vue) {
  window.preventReClick = PreventReClick
  Vue.use(install) // eslint-disable-line
}

PreventReClick.install = install
export default PreventReClick
