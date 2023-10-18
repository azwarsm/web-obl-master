const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Konfigurasi MySQL
const db = mysql.createConnection({
host: 'localhost',
user: 'root', 
password: '', 
database: 'web-obl',
});

// Koneksi ke MySQL
db.connect((err) => {
if (err) {
    throw err;
}
console.log('Terhubung ke MySQL');
});

// Menggunakan body-parser middleware untuk mengakses data dari body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Menambahkan Dokumen (Create)
app.post('/dokumen', (req, res) => {
const {
    OBL,
    AM,
    SPPH,
    P0,
    P1,
    Quotation,
    Surat_Penunjukan,
    Kontrak,
    KL_WO,
    Mitra_OBL,
    Berkas_Pendukung,
} = req.body;

const insertQuery = `INSERT INTO Dokumen (OBL, AM, SPPH, P0, P1, Quotation, Surat_Penunjukan, Kontrak, KL_WO, Mitra_OBL, Berkas_Pendukung) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

db.query(
    insertQuery,
    [OBL, AM, SPPH, P0, P1, Quotation, Surat_Penunjukan, Kontrak, KL_WO, Mitra_OBL, Berkas_Pendukung],
    (err, result) => {
    if (err) {
        console.error(err);
        res.status(500).send('Terjadi kesalahan saat menambahkan dokumen.');
    } else {
        res.status(201).send('Dokumen berhasil ditambahkan.');
    }
    }
);
});

// Mendapatkan Dokumen (Read)
app.get('/dokumen', (req, res) => {
  const selectQuery = 'SELECT * FROM Dokumen';

db.query(selectQuery, (err, results) => {
    if (err) {
    console.error(err);
    res.status(500).send('Terjadi kesalahan saat mengambil data dokumen.');
    } else {
    res.json(results);
    }
});
});

// Memperbarui Dokumen (Update)
app.put('/dokumen/:id', (req, res) => {
const id = req.params.id;
const {
    OBL,
    AM,
    SPPH,
    P0,
    P1,
    Quotation,
    Surat_Penunjukan,
    Kontrak,
    KL_WO,
    Mitra_OBL,
    Berkas_Pendukung,
} = req.body;

const updateQuery = `UPDATE Dokumen SET OBL=?, AM=?, SPPH=?, P0=?, P1=?, Quotation=?, Surat_Penunjukan=?, Kontrak=?, KL_WO=?, Mitra_OBL=?, Berkas_Pendukung=? WHERE ID=?`;

db.query(
    updateQuery,
    [OBL, AM, SPPH, P0, P1, Quotation, Surat_Penunjukan, Kontrak, KL_WO, Mitra_OBL, Berkas_Pendukung, id],
    (err, result) => {
    if (err) {
        console.error(err);
        res.status(500).send('Terjadi kesalahan saat memperbarui dokumen.');
    } else {
        res.status(200).send('Dokumen berhasil diperbarui.');
    }
    }
);
});

// Hapus Dokumen (Delete)
app.delete('/dokumen/:id', (req, res) => {
const id = req.params.id;

const deleteQuery = 'DELETE FROM Dokumen WHERE ID = ?';

db.query(deleteQuery, [id], (err, result) => {
    if (err) {
    console.error(err);
    res.status(500).send('Terjadi kesalahan saat menghapus dokumen.');
    } else {
    res.status(200).send('Dokumen berhasil dihapus.');
    }
});
});

app.listen(port, () => {
console.log(`Server berjalan di http://localhost:${port}`);
});
