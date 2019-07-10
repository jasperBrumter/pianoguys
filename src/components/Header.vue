<template>
  <div id="header">
    <img alt="Piano Guys logo" src="../assets/PianoGuys.png" id="logoImage">
    <img alt="Piano Guys burger" src="../assets/PianoMenu.png" id="menuImage">
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style lang="scss">
#header {
	position: fixed;
	width: 100vw;
	height: 15vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 3;
	padding-left: 3rem;
	padding-right: 3rem;
}

#logoImage {
	height: 90%;
	z-index: 1000;
	position: absolute;
}

#menuImage {
  height: 50px;
  transform: rotate(270deg)
  &:hover {
    display: none;
  }
}
</style>
