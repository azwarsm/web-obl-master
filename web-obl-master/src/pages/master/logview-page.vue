<template>
    <div class="min-h-screen flex justify-center items-center" style="background: linear-gradient(to bottom, rgb(200, 0, 0), white);">
      <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        <div class="text-center">
          <img src="../master/logotelkom.png" alt="Logo" class="w-24 h-16 mx-auto mb-4">
          <h2 class="text-2xl font-bold">Login</h2>
        </div>
        <form @submit="onSubmit" class="mt-4">
          <input v-model="email" type="email" placeholder="Enter your email" class="w-full mt-4 border-2 border-gray-300 rounded-md p-2 text-black">
          <input v-model="password" type="password" placeholder="Enter your password" class="w-full mt-4 border-2 border-gray-300 rounded-md p-2 text-black">
          <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-4">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        if (this.email.indexOf('@') === -1) {
          alert('Alamat email harus mengandung karakter "@"');
          return;
        }
  
        if (this.password === '') {
          alert('Password is required.');
          return;
        }
  
        // Simulasi login sukses
        alert('Login berhasil');
        this.$router.push('/dashview');
      }
    }
  }
  </script>
  