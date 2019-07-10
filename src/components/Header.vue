<template>
  <div id="header">
    <img alt="Piano Guys logo" src="../assets/logo.png" id="logoImage">
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style>
#header {
	position: fixed;
	width: 100vw;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-bottom: 1px solid gray;
	z-index: 3;
	padding-left: 1rem;
	padding-right: 1rem;
}

#logoImage {
	height: 90%;
	z-index: 1000;
	position: absolute;
}
</style>
