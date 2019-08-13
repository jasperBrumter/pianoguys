<template>
  	<div class="image_container">
      <img :class="{ 
      	'background-image-mobile': false,
      	'background-image': true,
      	'animate-image-left': startAnimation,
      	'animate-image-right': !startAnimation,
      	}" 
      	role="background-image"
      	:src="getImgSource()"></img>
	
    <div class="image_overlay"></div>
		<div class="image_overlay_text">
			<h1>{{ $t('section1.title1') }}</h1>
			<h2>{{ $t('section1.subtitle1')}}</h2>
		</div>
	</div>
</template>
<script>

export default {
  name: 'CSSRotatingBackgrounds',
  data: () => ({
    backgrounds: [1,2,3,4],
    selectedBackground: 1,
    startAnimation: true,
  }),
  mounted () {
    this.changeBackground()
  },
  computed: {
  	isMobile () {
  		 if(window.innerWidth <= 800 && window.innerHeight <= 600) {
  	     return true;
  	   } else {
  	     return false;
  	   }
  	}
  },
  methods: {
    changeBackground () {
      const action = setInterval(() => {
        if (this.selectedBackground === this.backgrounds.length) {
    			this.selectedBackground = 1;
    		} else {
    			this.selectedBackground += 1
    		}
      	this.startAnimation = !this.startAnimation;
      }, 4000)
    },
    getImgSource () {
      const pic = `background/background_picture_${this.selectedBackground}.jpg`
      return require('../assets/'+pic)
    }
  }
}
</script>

<style scoped>
* {
	box-sizing: border-box;
}
.image_container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
overflow: hidden;
z-index: 0;
justify-content: center;
color: rgba(230,198,62,1);
background-color: rgba(20,20,20,1);
}

.background-image {
	position: absolute;
	  display: block;
	  max-width:300%;
	  max-height:110%;
	  width: auto;
	  height: auto;
}

.background-image-mobile {
		position: absolute;
	  display: block;
	  max-width:300vw;
	  min-width: 120vw;
	  max-height:110vh;
	  width: auto;
	  height: auto;
}
.animate-image-right {
  min-width: 100%;
  height: auto;
  -webkit-animation: rightmove 4s linear both;
          animation: rightmove 4s linear both;
}
.animate-image-left {
  min-width: 100%;
  height: auto;
	-webkit-animation: leftmove 4s linear both;
          animation: leftmove 4s linear both;
}

.image_overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(11,11,11,.8);
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

/* Safari 4.0 - 8.0 */
@-webkit-keyframes rightmove {
 0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 84% 50%;
            transform-origin: 84% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translateX(20px);
            transform: scale(1.25) translateX(20px);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}

/* Standard syntax */
@keyframes rightmove {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 84% 50%;
            transform-origin: 84% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translateX(20px);
            transform: scale(1.25) translateX(20px);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}

/* Standard syntax */
@keyframes leftmove {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 50%;
            transform-origin: 16% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, 15px);
            transform: scale(1.25) translate(-20px, 15px);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}

@-webkit-keyframes leftmove {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 50%;
            transform-origin: 16% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, 15px);
            transform: scale(1.25) translate(-20px, 15px);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}

</style>
