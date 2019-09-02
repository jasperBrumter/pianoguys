<template>
	<div class="contact" id="contact">
    <div class="container">
     	<p>"{{ $t('contact.quote')}}"</p>
     	<div class="contacts">
     		<img src="../assets/png/pin.png" alt="Icon made by SmashIcon from Flaticon">
			{{ $t('contact.address')}}<br>
			<img src="../assets/png/mail.png" alt="Icon made by SmashIcon from Flaticon">
			{{ $t('contact.email')}}<br>
			<img src="../assets/png/phone.png" alt="Icon made by SmashIcon from Flaticon">
			{{ $t('contact.phone')}}
     	</div>
    </div>
	</div>
</template>
<script>

export default {
  name: 'Contact',
  methods: {
    getImgSource (fileName) {
      return require(`../assets/mason_restoration/${fileName}`)
    }
  }
}
</script>

<style scoped>
  .contact {
    width: 100vw;
    background-color: #dbdfd7;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23b6ab1c' fill-opacity='0.21'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
    color: rgba(160,140,47,1);
    padding: 4rem 0;
  }
  .contacts	{
  	margin: 0 auto;
  	width: 250px;
  	color: black;
	text-align: left;
  }
  img {
  	margin-right: 20px;
  }

</style>
