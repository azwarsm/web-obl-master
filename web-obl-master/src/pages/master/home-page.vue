<template>
    <div class="bg-gray-100 min-h-screen p-4">
      <div class="bg-white rounded-lg shadow-md p-4">
        <h1 class="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h1>
        <div class="grid grid-cols-2 gap-4">
          <!-- Menampilkan data -->
          <div v-for="(item, index) in data" :key="index" class="bg-gray-200 p-4 rounded-lg">
            <h2 class="text-lg font-semibold text-gray-700">{{ item.title }}</h2>
            <p class="text-sm text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          { title: "Item 1", description: "Deskripsi Item 1" },
          { title: "Item 2", description: "Deskripsi Item 2" },
          { title: "Item 3", description: "Deskripsi Item 3" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya sesuai kebutuhan Anda */
  </style>
  