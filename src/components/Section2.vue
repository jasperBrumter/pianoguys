<template>
	<div class="section2">
    <div class="container">
      <div class="titleContainer">
        <div class="bordered">
          <h3>
            {{ $t('section2.subtitle1')}}
          </h3>
          <h1>
            {{ $t('section2.title1')}}
          </h1>
        </div>
      </div>
      <div class="fields">
        <div v-for="(field, index) of fields" :key="field.title"
        :class="{
          'field': true,
          'reverse': index % 2 ===0
        }">
          <div class="fieldTextContainer">
            <div class="headerContainer">
              <h2>
                {{ $t(`section2.${field.title}`)}}
              </h2>
            </div>
            <div class="textSeparator">
            </div>
            <h3>
              {{ $t(`section2.${field.subtitle}`)}}
            </h3>
          </div>
          <div class="fieldImageContainer">
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
        'title': 'field1',
        'subtitle': 'subfield1',
        'image': 'background1.jpg',
      },
      {
        'title': 'field2',
        'subtitle': 'subfield2',
        'image': 'background2.jpg',
      },
      {
        'title': 'field3',
        'subtitle': 'subfield3',
        'image': 'background3.jpg',
      }
    ]
  }),
  methods: {
    getImgSource (fileName) {
      return require(`../assets/section2/${fileName}`)
    }
  }
}
</script>

<style scoped>
  .section2 {
    min-height: 100vh;
    width: 100vw;
    background-color: #dbdfd7;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23b6ab1c' fill-opacity='0.21'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
    color: rgba(180,160,67,1);
    padding: 4rem 0;
  }
  .titleContainer {
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
    max-width: 900px;
    border: 2px solid rgba(180,160,67,1);
    border-radius: 2px;
    padding: 5px;
  }
  .bordered {
    margin: auto;
    border: 4px solid rgba(180,160,67,1);
    border-radius: 2px;
    padding: 5px;
  }
  .field {
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
    max-width: 900px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .reverse {
    flex-direction: row-reverse;
  }
  .fieldTextContainer {
    flex: 1 0 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
  }

  .headerContainer {
  }
  .headerContainer h2 {
    margin: 0;
    font-weight: bolder;
    font-size: 32px;
    letter-spacing: 2px;
  }
  .textSeparator {
    width: 100px;
    height: 5px;
    background-color: rgba(180,160,67,.75);
    margin: 30px auto 10px auto;
  }
  .fieldImageContainer {
    flex: 1 0 65%;
    border: 2px solid white;
    background-color: white;
    padding: 10px;
    box-shadow: 3px 3px 3px rgb(1,1,1);
    border-radius: 5px;
  }
  .fieldImageContainer img {

    width: 95%;
    min-height: 100%;
    height: auto;
  }

  @media only screen and (max-width: 800px) {
    .field {
      flex-direction: column;
    }
    .fieldTextContainer {
      flex: 1 0 100%;
    }
    .fieldImageContainer {
      flex: 1 0 100%;
    }
  }
</style>
