import PermissionShow from './permissionShow'

const install = Vue => {
  Vue.directive('permissionShow', PermissionShow)
}

if (window.Vue) {
  window.permissionShow = PermissionShow
  Vue.use(install) // eslint-disable-line
}

PermissionShow.install = install
export default PermissionShow
