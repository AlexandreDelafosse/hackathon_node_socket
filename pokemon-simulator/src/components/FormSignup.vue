<template>
  <div>
    <form @submit.prevent="FormSignup" v-if="!formSubmitted">
      <span>Full Name</span><br>
      <input 
        v-model="name"
        type="text"
        placeholder="Enter your name" 
      /><br>      
      <input 
        v-model="surname"
        type="text"
        placeholder="Enter your surname" 
      /><br>
      <input 
        class="submit" 
        type="submit" 
        value="Submit"
      >
    </form>
    <div v-if="formSubmitted">
      <h3>Form Submitted</h3>
      <p>Name: {{ name }}</p>
      <p>Surname: {{ surname }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: "",
        formSubmitted: false
      };
    },
    methods: {
      FormSignup: function () {
        this.formSubmitted = true
      }
    },
  };
</script>
<style>
  form {
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
  }

  input {
    padding: 4px 8px;
    margin: 4px;
  }

  span {
    font-size: 18px;
    margin: 4px;
    font-weight: 500;
  }

  .submit {
    font-size: 15px;
    color: #fff;
    background: #222;
    padding: 6px 12px;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 5px;
  }

</style>