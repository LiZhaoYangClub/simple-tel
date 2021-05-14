import PermissionDisabled from './permissionDisabled'

const install = function(Vue) {
  Vue.directive('permissionDisabled', PermissionDisabled)
}

if (window.Vue) {
  window.permissionDisabled = PermissionDisabled
  Vue.use(install) // eslint-disable-line
}

PermissionDisabled.install = install
export default PermissionDisabled
