import store from '@/store'
const permissionList = store.state.user.permissionList || []

export default {
  inserted(el, binding) {
    const val = binding.value
    const hasAttrDisabled = new Set(el.classList).has('disabled')
    if (!permissionList.includes(val)) {
      !hasAttrDisabled && el.classList.add('disabled')
    }
  },
  update(el, binding) {
    const val = binding.value
    const hasAttrDisabled = new Set(el.classList).has('disabled')
    if (!permissionList.includes(val)) {
      return !hasAttrDisabled && el.classList.add('disabled')
    }
    return hasAttrDisabled && el.classList.remove('disabled')
  }
}
