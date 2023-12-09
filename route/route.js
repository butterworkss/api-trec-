const { 
    getDestinasi,
    getDetailDestinasibyId,
    searchDestination,
    filterDestinasi
} = require('../controller/destinasi')

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('INI ADALAH API T-REC')
})
router.get('/destinasi', getDestinasi),
router.get('/detailDestinasi/:id', getDetailDestinasibyId),
router.get('/search', searchDestination)
router.get('/filter', filterDestinasi)


module.exports = router     