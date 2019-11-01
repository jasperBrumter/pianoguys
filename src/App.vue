<template>
  <div id="app">
    <Modal />
    <CSSRotatingBackgrounds />
    <Restoration />
    <Section2 />
    <Contact />
  </div>
</template>

<script>
  // components
  import CSSRotatingBackgrounds from './components/CSSRotatingBackgrounds.vue';
  import Modal from './components/Modal.vue';
  import Section2 from './components/Section2.vue';
  import Restoration from './components/Restoration.vue';
  import Contact from './components/Contact.vue';

  export default {
    name: 'app',
    components: {
      CSSRotatingBackgrounds,
      Modal,
      Section2,
      Restoration,
      Contact,
    },
  }
</script>

<style>
  body {
    margin: 0;
  }
  html {
    scroll-behavior: smooth;
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
