const axios = require('axios')
const db = require('../connection/connection.js')

const predict = (req, res) => {

    const destinasi = axios.get('https://api-trec-sxk5htqkea-et.a.run.app/destinasi')
    .then(response => {
      // Handle the response data
      res.json(response.data)
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });

}



module.exports=predict