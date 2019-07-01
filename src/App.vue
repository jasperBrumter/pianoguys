<template>
  <div id="app">
    <Header />
    <FirstVideoSection />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import FirstVideoSection from './components/FirstVideoSection.vue';

  export default {
    name: 'app',
    components: {
      Header,
      FirstVideoSection,
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
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
