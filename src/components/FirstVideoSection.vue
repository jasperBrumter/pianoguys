<template>
	<div class="video_container container">
		<div class="fullscreen_video_wrap">
			<video src="../assets/pianowires.mp4" autoplay loop="true"></video>
		</div>
		<div class="video_overlay">
		</div>
		<div class="video_overlay_text">
			<h1>Piano Guys</h1>
			<p>The complete solution to all your piano needs.<br>Based in Montreal, Canada.</p>
		</div>
	</div>
</template>

<script>

export default {
  name: 'FirstVideoSection',
}
</script>

<style>
* {
	box-sizing: border-box;
}
.video_container {
	height: 100vh;
  display: flex;
  align-items: center;
  color: white;
}

.container {
  max-width: 960px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: auto;
  text-align: center;
}

.fullscreen_video_wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.fullscreen_video_wrap video {
  min-width: 100%;
  min-height: 100%;
}

.video_overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(22,54,70,.85);
  z-index: 1;
}
.video_overlay_text {
  z-index: 2;
  margin: auto;
}
</style>
