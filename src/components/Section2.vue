<template>
	<div class="section2">
    <div class="container">
      <h3>
        {{ $t('section2.subtitle1')}}
      </h3>
      <h1>
        {{ $t('section2.title1')}}
      </h1>
      <div class="separator">
        
      </div>
      <div class="fields">
        <div v-for="field of fields" :key="field.name" class="field">
          <h3>
            {{ $t(`section2.${field.name}`)}}
          </h3>
          <div class="fieldImage">
            <img :src="getImgSource(field.image)"></img>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>

export default {
  name: 'Section2',
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
      }
    ]
  }),
  methods: {
    getImgSource (fileName) {
      return require(`../assets/${fileName}`)
    }
  }
}
</script>

<style scoped>
  .section2 {
    min-height: 30vh;
    width: 100vw;
    background-color: rgba(180,160,67,1);
    color: white;
    padding: 4rem 0;
  }
  .separator {
    width: 100px;
    height: 5px;
    background-color: white;
    margin: 40px auto 50px auto;
  }
  .fields {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .field {
    height: 350px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 20px;
    overflow: hidden;
  }
  .fieldImage {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: 2px solid white;
    background-size: cover;
    background-position: center;
  }
  img {
    width: 100%;
    min-height: 100%;
    height: auto;
    border-radius: 100%;
  } 

  .fieldImage h3 {}
</style>
