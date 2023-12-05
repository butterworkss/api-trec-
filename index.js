const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const db = require('./connection/connection.js')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get("/halamanutama", (req,res) => {
    res.send('Ini adalah halaman utama')
})

//mendapatkan data yang akan ditampilkan pada halaman utama
app.get("/halamanutama/:id", (req,res) => {
    const id = req.params.id
    const sql = `SELECT Place_Name, City, urlImage FROM tourism_with_id WHERE Place_id = ${id}`

    db.query(sql, (err, results) => {
        if(err) {
            console.error('Gagal mengeksekusi Query', err)
            res.status(500).send('Internal Server Error: Masukkan paramaeter dengan benar')
        } else if (results.length > 0) {
            //mengembalikan data Foto nama tempat dan kota
            res.json(results) 
        }
    })
})

app.get("/halamandetail/:id", (req, res) => {
    const id = req.params.id
    const sql = `SELECT Place_Name, City, Price, Description, Lat, Longi, urlImage FROM tourism_with_id WHERE Place_id = ${id}`

    db.query(sql, (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Internal Server Error');
        } else  {
          if (results.length > 0) {
            // Mengembalikan data jika ditemukan
            const Nama = results[0].Place_Name
            const Kota = results[0].City
            const htm = results[0].Price
            const gambar = results[0].urlImage
            const Desc = results[0].Description
            const latitude = results[0].Lat
            const longitude = results[0].Longi

            console.log(results.length)
      
            // Membuat link Google Maps dengan latitude dan longitude
            const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
      
            // Mengirim respons JSON dengan nama tempat dan link Google Maps
            res.json({
              urlImage: gambar,
              namaTempat: Nama,
              Lokasi: Kota,
              HTM: htm,
              Deskripsi: Desc,
              google_maps_link: googleMapsLink,
            });

          } else {
            // Mengembalikan 404 jika data tidak ditemukan
            res.status(404).send('Data tidak ditemukan');
          }
        }
    });
})


app.post("/", (req, res) => {})

app.delete("/", (req, res) => {})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})