import store from '@/store'
const permissionList = store.state.user.permissionList || []

export default {
  inserted(el, binding) {
    const val = binding.value
    if (!permissionList.includes(val)) {
      el.style.display = 'none'
    }
  },
  update(el, binding) {
    const val = binding.value
    if (!permissionList.includes(val)) {
      return (el.style.display = 'none')
    }
    return (el.style.display = 'inline-block')
  }
}
