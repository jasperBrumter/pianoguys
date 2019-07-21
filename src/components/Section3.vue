<template>
	<div>
    <div class="parallax" :style="{'background-image': 'url(' + require('../assets/background3.jpg') + ')'}">
    </div>
    <div class="section3">
      <div class="container">
      <h1>
        {{ $t('section3.title1')}}
      </h1>
    </div>
    <template v-for="field of fields" class="field">
      <div class="section3">
        <div class="container">
          <div class="separator"></div>
          <h2>
            {{ $t(`section3.${field.name}.title`)}}
          </h2>
          <h3>
            {{ $t(`section3.${field.name}.subtitle`)}}
          </h3>
          <div class="separator"></div>
        </div>
      </div>
      <div class="parallax" :style="{'background-image': 'url(' + require(`../assets/${field.image}`) + ')'}">    
      </div>
    </template>
    </div>
	</div>
</template>
<script>

export default {
  name: 'Section3',
  data: () => ({
    fields: [
      {
        'name': 'field1',
        'image': 'background1.jpg',
      },
      {
        'name': 'field2',
        'image': 'background2.jpg',
      },
      {
        'name': 'field3',
        'image': 'background3.jpg',
      },
      {
        'name': 'field4',
        'image': 'background2.jpg',
      }
    ]
  }),
}
</script>

<style scoped>
  .section3 {
    min-height: 30vh;
    width: 100vw;
    background-color: rgba(190,80,37,1);
    color: white;
    padding: 4rem 0;
  }
  .separator {
    width: 100px;
    height: 5px;
    background-color: white;
    margin: 40px auto 50px auto;
  }
  .parallax {
    height: 80vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
</style>
