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
    
    res.writeHead(200,{
              'Content-Type':'application/json',
              ...CORS,
          })
   
    const xTest = req?.headers?.['x-test']
    const xBody = req?.body
    //res.json({ message: 'itmo308555', "x-result": xTest, "x-body": xBody })
     res.write(JSON.stringify({
            "message":"itmo308555",
            "x-result":xTest,
            "x-body":xBody
            }
            ))
    
      /*res.writeHead(200,{
              'Content-Type':'application/json',
              ...CORS,
          })
          let data = '';
          await req.on('data', function(chunk){
            data += chunk;
            }).on('end', () => {
          })
    
    const xTest = req?.headers?.['x-test']
    const xBody = req?.body
   
          res.write(JSON.stringify({
            "message":"itmo308555",
            "x-result":headers,
            "x-body":data
            }
            ))
      }
      res.end() */
    
    
    
    
})
app.get('/result4/', (req, res) => {
    
    
     res.writeHead(200,{
              'Content-Type':'application/json',
              ...CORS,
          })
    
    const xTest = 'baovn'
    const xBody = 'abc'
    
   res.write(JSON.stringify({
            "message":"itmo308555",
            "x-result":xTest,
            "x-body":xBody
            }
            ))
    
     //res.text({ message: 'itmo308555', "x-result": xTest, "x-body": xBody })
    
    //res.json({ message: 'itmo308555', "x-result": xTest, "x-body": xBody })
})
app.listen(PORT, () => console.log(`App is listening on ${PORT}`))
