<template>
  <div id="homepage">
    <CSSRotatingBackgrounds />
    <Section2 />
  </div>
</template>

<script>
  // components
  import CSSRotatingBackgrounds from '../components/CSSRotatingBackgrounds.vue';
  import Section2 from '../components/Section2.vue';

  export default {
    name: 'Homepage',
    components: {
      CSSRotatingBackgrounds,
      Section2,
    },
  }
</script>

<style>
</style>
