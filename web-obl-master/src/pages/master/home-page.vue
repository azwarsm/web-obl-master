<template>
  <div class="container">
    <div class="content">
    
      <div class="logo-center">
        <img src="../master/logotelkom.png" alt="Logo" class="w-48 h-32 mx-auto mb-4">
      </div>
   
      <h1>Selamat Datang di TELOTIC</h1>
      <p>Silakan pilih jenis pengguna Anda</p>
      <div class="option" @click="redirectTo('admin')">Admin</div>
      <div class="option" @click="redirectTo('guest')">Visitor</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectTo(userType) {
      if (userType === 'admin') {
        this.$router.push('/login'); // Ganti dengan rute ke halaman login admin
      } else if (userType === 'guest') {
        this.$router.push('/logview'); // Ganti dengan rute ke halaman login tamu
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, rgb(200, 0, 0), white) /* Warna merah */
}

.content {
  text-align: center;
  color: #fff; /* Warna teks putih */
  padding: 20px;
}

h1 {
  font-size: 36px;
  margin: 0;
}

.option {
  background-color:  rgb(200, 0, 0);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.option:hover {
  background-color:  rgb(500, 0, 0);
}
</style>
