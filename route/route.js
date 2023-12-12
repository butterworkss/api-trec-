const { 
    getDestinasi,
    getDetailDestinasibyId,
    searchDestination,
    filterDestinasi
} = require('../controller/destinasi')

const predict = require('../controller/rekomendasi.js')

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('INI ADALAH API T-REC')
})
router.get('/destinasi', getDestinasi),
router.get('/detailDestinasi/:id', getDetailDestinasibyId),
router.post('/search', searchDestination)
router.post('/filter', filterDestinasi)
router.post('/recommendation', predict)


module.exports = router     