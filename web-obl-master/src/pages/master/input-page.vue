<template>
    <div class="background-container">
    <h1>
      <div class="heading1">
        <center>Input Data Disini</center>
      </div>
    </h1>
    <div class="table">
    <div class="table-row">
      <div class="table-cell header">Keterangan</div>
      <div class="table-cell header">Dokumen</div>
      <div class="table-cell header">Aksi</div>
    </div>

    <div class="table-row">
      <div class="table-cell">OBL</div>
      <div class="table-cell">
        <input type="text" id="nama" name="nama" placeholder="Masukkan Nama OBL" value="">
      </div>   
      <div class="table-cell">
        <button class="btn-delete">Delete</button>
      </div>
    </div>


    <div class="table-row">
      <div class="table-cell">AM</div>
      <div class="table-cell">
        <input type="text" id="nama" name="nama" placeholder="Masukkan Nama Anda" value="">
      </div>
      <div class="table-cell">
    
        <button class="btn-delete">Delete</button>
      </div>
    </div>

    <div class="table-row">
      <div class="table-cell">SPPII/BA Visit</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
  <div class="table-cell"> 
        <button class="btn-delete">Delete</button> 
      </div>
    </div>

    <div class="table-row">
      <div class="table-cell">P0</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell">
        <button class="btn-delete">Delete</button>
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell">P1</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell">
        <button class="btn-delete">Delete</button>
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell">Quotation</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell">
        <button class="btn-delete">Delete</button>
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell">Surat Penunjukan</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell">
        <button class="btn-delete">Delete</button>
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell">Kontrak KD</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell"> 
        <button class="btn-delete">Delete</button>
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell">KL/WC</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell"> 
        <button class="btn-delete">Delete</button>
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell">Mitra OBL</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell"> 
        <button class="btn-delete">Delete</button>
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell">Mitra OBL</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell"> 
        <button class="btn-delete">Delete</button>
      </div>
    </div>
      <div class="table-row">
      <div class="table-cell">Dokumen Pendukung Lainnya</div>
      <div class="table-cell">
        <div class="file-upload">
    <label for="fileInput" class="custom-file-input">
      <i class="fas fa-cloud-upload-alt"></i> Pilih File
    </label>
    <input
      type="file"
      id="fileInput"
      class="hidden-input"
      @change="handleFileUpload"
    />

    <div v-if="selectedFile" class="selected-file-info">
      <i class="fas fa-check-circle"></i> {{ selectedFile.name }}
    </div>
  </div>
</div> 
      <div class="table-cell"> 
        <button class="btn-delete">Delete</button>
      </div>
    </div>
    <!-- Tambahkan lebih banyak baris sesuai kebutuhan -->

  </div>
  
  <center>
      <button class="btn-upload">Upload</button>
  </center>
  
    <div class="back-button-container">
      <router-link to="/dashboard" class="back-button">Kembali</router-link>
    </div>
    </div>
  </template>
  
  
// js input data
<script>
export default {
  data() {
    return {
      selectedFile: null,
      displayedFileName: '', // Tambahkan displayedFileName
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        const fileName = this.selectedFile.name;
        this.displayedFileName = fileName.substring(0, 1); // Menampilkan 10 karakter pertama
        console.log(this.displayedFileName);

        // Lakukan sesuatu dengan file yang dipilih
      }
    },
  },
};
</script>

//css input data//
<style scoped>
.file-upload {
  display: flex;
  align-items: center;
  gap: 10px;
}

.custom-file-input {
  background-color: #0070bb;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.hidden-input {
  display: none;
}

.selected-file-info {
  display: flex;
  align-items: center;
  background-color: #d52b25;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}

.selected-file-info i {
  margin-right: 5px;
}

.custom-file-input:hover {
  background-color: #2980b9;
}
</style>



//tombol back
  <style scoped>
  .back-button-container {
    position: fixed;
    top: 20px;
    left: 20px;
  }
  
  .back-button {
    background: #b80404;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .back-button:hover {
    background: #dc3434;
  }
  </style>

  
  //kolom keterangan dan tombol delete
  <style scoped>
  .table {
    display: flex;
    flex-direction: column;
    width: 1000px; /* Lebar tabel vertikal */
    border: 1px solid #ccc;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.9);
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 20px;
  }
  
  .table-row {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    justify-content: space-between;
  }
  

  .table-cell {
    flex: 1;
    padding: 10px;
    text-align: center;
    border-right: 1px solid #ccc;
  }

  .table-cell:last-child {
  border-right: none;
}

  .header {
    font-weight: bold;
  }
  
  .btn-update, .btn-delete {
    background-color: #b80505; /* Warna merah */
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 5px;
  }
  
  .btn-update:hover, .btn-delete:hover {
    background-color: #ff0000; /* Warna merah yang lebih terang */
  }
  
  .heading1 {
    background-color: #b80505; /* Warna merah */
    color: #fff;
    border: none;
    background-position: center;
    width: 100%;
    position: fixed;
    top: 0; /* Menempatkan elemen di atas halaman */
    left: 0; /* Menempatkan elemen di kiri halaman */
    padding: 20px 100px;
    border-radius: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
    
    
  }
  
  .background-container {
    background-image: url('logotelkom.png'); /* Ganti dengan path gambar Anda */
    background-size: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 200vh; /* Mengisi seluruh tinggi tampilan layar */
  }
  </style>


// tombol upload 
<style>
  .btn-upload {
    background-color: #26a300; /* Warna latar belakang merah */
    color: white; /* Warna teks putih */
    border: none; /* Tidak ada border */
    padding: 10px 20px; /* Padding tombol */
    border-radius: 5px; /* Sudut tombol dibulatkan */
    cursor: pointer; /* Kursor berubah saat diarahkan ke tombol */
    transition: background-color 0.3s; /* Transisi ketika tombol berubah warna saat dihover */
  }

  .btn-upload:hover {
    background-color: #23d82c; /* Warna latar belakang saat tombol dihover */
  }
</style>

//input text
<style>
  /* Gaya input teks */
  input[type="text"] {
    width: 100%; /* Lebar input 100% */
    padding: 10px; /* Padding input */
    border: 1px solid #ccc; /* Border dengan warna abu-abu */
    border-radius: 5px; /* Sudut input dibulatkan */
    font-size: 16px; /* Ukuran teks */
  }

  /* Gaya placeholder (teks dalam input saat kosong) */
  input[type="text"]::placeholder {
    color: #999; /* Warna teks placeholder */
  }

  /* Gaya input saat dihover atau aktif (fokus) */
  input[type="text"]:hover, input[type="text"]:focus {
    border-color: #3498db; /* Border warna biru saat dihover atau aktif */
  }
</style>
