<template>
  <div class="image_container">
		<div class="fullscreen_image_wrap">
      <img :src="getImgSource()" :style="`width: ${currentZoom}%`"></img>
		</div>
    <div class="image_overlay"></div>
		<div class="image_overlay_text">
			<h1>{{ $t('section1.title1') }}</h1>
			<h2>{{ $t('section1.subtitle1')}}</h2>
		</div>
	</div>
</template>
<script>

export default {
  name: 'RotatingBackgrounds',
  data: () => ({
    backgrounds: ['background1.jpg', 'background2.jpg', 'background3.jpg'],
    selectedBackground: 1,
    zoom: 0,
  }),
  mounted () {
    this.zoomIn()
  },
  computed: {
    currentZoom () {
      return 120 + this.zoom
    }
  },
  methods: {
    dispatchZoom () {
      if (this.zoom > 15) {
        this.zoomOut()
      } else {
        this.zoomIn()
      }
    },
    zoomIn () {
      const action = setInterval(() => {
        this.zoom += .02
        if (this.zoom > 15) {
          clearInterval(action)
          this.changeBackground()
        }
      }, 10)
    },
    zoomOut () {
      const action = setInterval(() => {
        this.zoom -= .02
        if (this.zoom < .1) {
          clearInterval(action)
          this.changeBackground()
        }
      }, 10)
    },
    changeBackground () {
      if (this.selectedBackground === this.backgrounds.length) {
        this.selectedBackground = 1;
      } else {
        this.selectedBackground += 1
      }
      this.dispatchZoom();
    },
    getImgSource () {
      const pic = `background${this.selectedBackground}.jpg`
      return require('../assets/section2/'+pic)
    }
  }
}
</script>

<style>
* {
	box-sizing: border-box;
}
.image_container {
  position: relative;
  width: 100vw;
	height: 100vh;
  display: flex;
  align-items: center;
  color: rgba(230,198,62,1);
  background-color: rgba(20,20,20,1);
}

.fullscreen_image_wrap {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: black;
}

.fullscreen_image_wrap img {
  min-width: 120vh;
  min-height: 100vh;
  max-height: 150vh;
  margin-left: -20vh;
}

.image_overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(22,22,22,.8);
  z-index: 1;
}
.image_overlay_text {
  max-width: 960px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: auto;
  text-align: center;
  z-index: 2;
  margin: auto;
}
</style>
