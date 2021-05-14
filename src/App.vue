<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div>
        <a-button v-permission-show="role" type="primary" @click="changeTheme">
          Primary <SvgIcon icon-class="user" />
        </a-button>
        <a-button type="primary" @click="handlerClick">cccc</a-button>
      </div>
      <div>
        <a-pagination v-model="current" :total="50" show-less-items />
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    current: 1,
    role: 'test'
  }),
  methods: {
    changeTheme() {
      console.log('--------')
      window.less.modifyVars({
        '@primary-color': '#000'
      })
    },
    handlerClick() {
      this.role = 'admin'
    }
  }
}
</script>
