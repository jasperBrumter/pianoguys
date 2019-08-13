<template>
	<div>
		<img alt="Piano Guys logo" src="../assets/logo.png" class="logoImage">
		<div class="toggleButton" @click="toggle"></div>
		<div 
		@v-if="!isModalOpen"
		id='modalContainer'
		class='modalContainer invisible' 
		:style="`
		height: ${this.height}%;
		width: ${this.width}%;
		border-radius: ${this.border}%;
		`"
		>
			<button 
				v-for="navigationLink in buttons"
              	:key="navigationLink.name"
              	:class="{
					navigation: true,
					showing: navigationLink.show
				}">
              	{{ navigationLink.name}}
            </button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Modal',
		data: () => ({
		    height: 0.0,
		    width: 0.0,
		    border: 33,
		    buttons: [
				{ 
					show: false,
					name: 'Our history',
				},
				{ 
					show: false,
					name: 'Our Processes',
				},
				{ 
					show: false,
					name: 'Contact Us',
				},
		    ],
		    isModalOpen: false,
	    }
	  ),
		methods: {
			toggle () {
				// if (this.$i18n.locale === 'fr') {
				// 	this.$i18n.locale = 'en'
				// } else {
				// 	this.$i18n.locale = 'fr'
				// }
				if (!this.isModalOpen) {
					this.transitionPhase1()
				} else {
					this.transitionOut()
				}
			},
			showButtons () {
				let x = 0;
				this.buttons[x].show = true;
				const increase = setInterval(() => {
					x += 1;
					if (x > this.buttons.length) {
						clearInterval(increase)
					}
					this.buttons[x].show = true;
				}, 500)
			},
			hideButtons () {
				this.buttons.forEach(butt => {
					butt.show = false;
				})
			},
			desiredSpeed (currentSize) {
				const velo = Math.abs(currentSize - 130)
				const speed = velo / 10;
				return speed < 1 ? speed : 2
			},
			transitionPhase1 () {
				this.isModalOpen = true;
				const increase = setInterval(() => {
					this.height += this.desiredSpeed(this.height);
					this.width += this.desiredSpeed(this.height);
					if (this.height > 100) {
						this.height = 100
						this.width = 100
						clearInterval(increase)
						this.transitionPhase2()
					}
				}, 1)
			},
			transitionPhase2 () {
				const increase = setInterval(() => {
					this.border -= 0.4
					if (this.border < 0) {
						clearInterval(increase)
						this.showButtons();
					}
				}, 1)
			},
			transitionOut () {
				this.hideButtons();
				const decrease = setInterval(() => {
					this.height -= this.desiredSpeed(this.height);
					this.width -= this.desiredSpeed(this.height);
					this.border += this.desiredSpeed(this.height);
					if (this.height < 0) {
						clearInterval(decrease)
						this.height = 0;
						this.width = 0;
						this.border = 30;
						this.isModalOpen = false;
					}
				}, 1)
			}
		},
	}
</script>

<style>
	.modalContainer {
		overflow: hidden;
	}
	.navigation {
		width: 50%;
		opacity: 0;
		transition: opacity 0.2s ease;
	}
	.showing {
		opacity: 1;
	}

	.invisible {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 20;
		background-color: rgba(103,82,23,1);
		border-radius: 0 0 0 30%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.logoImage {
		position: fixed;
		z-index: 99;
		left: 20px;
		top: 20px;
		max-height: 15vh;
	}
	.toggleButton {
		position: fixed;
		z-index: 99;
		right: 20px;
		top: 20px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 4px solid rgba(230,198,62,1);
		background-image: url('../assets/PianoMenu.png');
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: center;
		cursor: pointer;
	}
	.toggleButton:hover {
		background-color: rgba(230,198,62,1);
	}
	.toggleButton:hover img{
		transform: rotate(90deg);
	}
</style>