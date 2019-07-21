<template>
  <div id="app">
    <Modal />
    <RotatingBackgrounds />
    <Section2 />
    <Section3 />
  </div>
</template>

<script>
  // components
  import FirstVideoSection from './components/FirstVideoSection.vue';
  import RotatingBackgrounds from './components/RotatingBackgrounds.vue';
  import Modal from './components/Modal.vue';
  import Section2 from './components/Section2.vue';
  import Section3 from './components/Section3.vue';

  export default {
    name: 'app',
    components: {
      FirstVideoSection,
      RotatingBackgrounds,
      Modal,
      Section2,
      Section3,
    },
  }
</script>

<style>
  body {
    margin: 0
  }
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
  .container {
  max-width: 960px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;
  text-align: center;
}
</style>
