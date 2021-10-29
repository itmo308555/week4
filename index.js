const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()
app.use(bodyParser.text())
app.use(cors())

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
  };


app.post('/result4/', (req, res) => {
    
   
    const xTest = req?.headers?.['x-test']
    const xBody = req?.body
    res.json({ message: 'id71293382', "x-result": xTest, "x-body": xBody })
})
app.get('/result4/', (req, res) => {
    
    
     res.writeHead(200,{
              'Content-Type':'application/json',
              ...CORS,
          })
    
    const xTest = 'baovn'
    const xBody = 'abc'
    res.json({ message: 'itmo308555', "x-result": xTest, "x-body": xBody })
})
app.listen(PORT, () => console.log(`App is listening on ${PORT}`))
