<template>
  <div id="app">
    <HeaderMain/>
    <!-- <HelloWorld msg="Hello World!"/> -->
    <FormSignup/>
    <FooterMain/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderMain from './components/layouts/Header.vue'
import FooterMain from './components/layouts/Footer.vue'
import FormSignup from './components/FormSignup.vue'

export default {
  name: 'App',
  components: {
    HeaderMain,
    FooterMain,
    FormSignup
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
