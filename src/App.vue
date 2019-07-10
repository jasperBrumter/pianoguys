<template>
  <div id="app">
    <Modal />
    <FirstVideoSection />
  </div>
</template>

<script>
  // components
  import Header from './components/Header.vue';
  import FirstVideoSection from './components/FirstVideoSection.vue';
  import Modal from './components/Modal.vue';

  export default {
    name: 'app',
    components: {
      FirstVideoSection,
      Modal,
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
