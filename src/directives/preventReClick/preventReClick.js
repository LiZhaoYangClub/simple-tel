export default {
  inserted(el, binding) {
    const time = +binding.value
    el.addEventListener('click', e => {
      el.classList.add('disabled')
      el.disabled = true
      setTimeout(() => {
        el.disabled = false
        el.classList.remove('disabled')
      }, time || 300)
    })
  }
}
