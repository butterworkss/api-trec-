const axios = require('axios')
const db = require('../connection/connection.js');

const predict = async (req, res) => {

	const { question } = req.body

  console.log(question)
  res.json(question)

  const apiurl = "http://127.0.0.1:5000/predict"

  // const getAnswer = await axios.post(
  //   apiurl,
  //   {
  //     text: "saya ingin pergi ke tempat wisata yang dekat dengan alam, karena saya ingin melihat banyak pemandangan yang menyejukkan mata",
  //   }
  // )

  // console.log(getAnswer.data)
  // res.send(getAnswer.data)
}



module.exports=predict