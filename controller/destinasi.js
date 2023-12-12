const db = require('../connection/connection.js')

const getDestinasi = async (req, res) => {
    try {
        const sql = `SELECT Place_id, Place_Name, City, urlImage FROM tourism_with_id ORDER BY RAND() LIMIT 30;`;
  
        const results = await new Promise((resolve, reject) => {
            db.query(sql, (err, results) => {
                if (err) {
                    console.error('Gagal mengeksekusi Query', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
  
        if (results.length > 0) {
            res.json(results);
        }
    } catch (error) {
        console.error('Terjadi kesalahan', error);
        res.status(500).send('Internal Server Error');
    }
};
  
const getDetailDestinasibyId = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `SELECT Place_id, Place_Name, City, Price, Description, Lat, Longi, urlImage FROM tourism_with_id WHERE Place_id = ${id}`;
  
        const results = await new Promise((resolve, reject) => {
            db.query(sql, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
  
        if (results.length > 0) {
            const ID = results[0].Place_id
            const Nama = results[0].Place_Name;
            const Kota = results[0].City;
            const htm = results[0].Price;
            const gambar = results[0].urlImage;
            const Desc = results[0].Description;
            const latitude = results[0].Lat;
            const longitude = results[0].Longi;
  
            const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
            res.json({
                ID: ID,
                urlImage: gambar,
                namaTempat: Nama,
                Lokasi: Kota,
                HTM: htm,
                Deskripsi: Desc,
                google_maps_link: googleMapsLink,
            });
        } else {
            res.status(404).send('Data tidak ditemukan');
        }
    } catch (error) {
        console.error('Terjadi kesalahan', error);
        res.status(500).send('Internal Server Error');
    }
  };
  
const searchDestination = async (req, res) => {
    try {
        const userInput = req.query.input;
        // const category = req.query.cat

        const query = `
            SELECT Place_id, Place_Name, City, urlImage
            FROM tourism_with_id
            WHERE LOWER(Place_Name) LIKE LOWER('%${userInput}%')
                OR LOWER(City) LIKE LOWER('%${userInput}%') OR LOWER(Place_name) LIKE LOWER('%${userInput}%)')
        `;
  
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    console.error('Error saat mengeksekusi query: ', err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
  
        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).send('Data tidak ditemukan');
        }
    } catch (error) {
        console.error('Terjadi kesalahan', error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const filterDestinasi = async (req, res) => {
    try {
        const category = req.query.cat;
        const city = req.query.kota;

        let sql = 'SELECT  urlImage, Place_id, Place_Name, City, Category FROM tourism_with_id  WHERE 1';
        if (category) {
            sql += ` AND LOWER(Category) LIKE LOWER('%${category}%')`;
        }
        if (city) {
            sql += ` AND LOWER(City) LIKE LOWER('%${city}%')`;
        }

        const results = await new Promise((resolve, reject) => {
            db.query(sql, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        res.json(results);
    } catch (error) {
        console.error('Error in filterDestinasi:', error);
        res.status(500).send('Internal Server Error');
    }
};


module.exports={
    getDestinasi,
    getDetailDestinasibyId,
    searchDestination,
    filterDestinasi
}