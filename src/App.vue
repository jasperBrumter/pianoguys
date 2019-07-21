<template>
  <div id="app">
    <Modal />
    <RotatingBackgrounds />
  </div>
</template>

<script>
  // components
  import FirstVideoSection from './components/FirstVideoSection.vue';
  import RotatingBackgrounds from './components/RotatingBackgrounds.vue';
  import Modal from './components/Modal.vue';

  export default {
    name: 'app',
    components: {
      FirstVideoSection,
      RotatingBackgrounds,
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
    font-family: 'Playfair Display', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  p {
    font-size: 20px;
    letter-spacing: 1px;
  }
  h1 {
    font-weight: lighter;
    letter-spacing: 3px;
    font-size: 42px;
  }
  h2 {
    font-weight: lighter;
    letter-spacing: 2px;
  }
</style>
