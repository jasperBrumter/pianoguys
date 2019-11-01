<template>
	<div>
		<div ref="navbar" class="navbar">
		</div>
		<img alt="Piano Guys logo, a grand piano with gold letters." src="../assets/logo.png" ref="logo" class="logoImage">
		<div class="right">
			Contact
			<div class="toggleButton" @click="toggle"></div>
		</div>
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
		mounted () {
			document.addEventListener("scroll", () => {
				if (window.scrollY > 50) {
					this.$refs.logo.classList.add('reduced');
					this.$refs.navbar.classList.add('showing');
				} else {
					this.$refs.logo.classList.remove('reduced');
					this.$refs.navbar.classList.remove('showing');
				}
			});
		},
		methods: {
			toggle () {
				if (this.$i18n.locale === 'fr') {
					this.$i18n.locale = 'en'
				} else {
					this.$i18n.locale = 'fr'
				}
				// if (!this.isModalOpen) {
				// 	this.transitionPhase1()
				// } else {
				// 	this.transitionOut()
				// }
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

<style scoped>
	.navbar {
		position: fixed;
		width: 100%;
		z-index: 10;
		top: 0px;
		opacity: 0;
		height: 0px;
		background-color: #000;
 /*   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23b6ab1c' fill-opacity='0.21'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");*/
  		border-bottom: 4px solid rgba(100,50,22,1);
		transition: .4s ease;
	}
	
	.showing {
		height: 60px;
		opacity: 1;
		transition: .7s ease;
	}
	.key {
		top: 0px;
		height: 35px;
		color: black;
		width: 5px;
		margin: 0px 2px;
	}
	.modalContainer {
		overflow: hidden;
	}
	.navigation {
		width: 50%;
		opacity: 0;
		transition: opacity 0.2s ease;
	}
	.showing {
		opacity: .9;
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
		max-height: 120px;
		transition: max-height .7s ease;
	}
	.reduced {
		max-height: 80px;
		transition: max-height .4s ease;
	}

	.right {
		position: fixed;
		z-index: 99;
		right: 20px;
		top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.toggleButton {
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