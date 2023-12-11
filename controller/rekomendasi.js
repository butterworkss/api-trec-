const axios = require('axios')
const db = require('../connection/connection.js')

const predict = (req, res) => {
    const prediksi = req.body

    if (!prediksi) {
		return res.status(400).json({ message: 'Question undefined' })
	}

    const getRekomendasi = axios.post(
        'https://api-ml-trec-sxk5htqkea-et.a.run.app/', res
    )

    console.log(getRekomendasi)
    
}

module.exports=predict