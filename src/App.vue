<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ $t('message') }}
    <button @click="handleLangSwitch">
      CHANGE
    </button>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    handleLangSwitch () {
      this.$i18n.locale = 'fr'
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
