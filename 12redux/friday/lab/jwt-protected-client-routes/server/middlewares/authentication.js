const jwt = require('jsonwebtoken')

//database goes here
const users = [{username: 'johndoe', password: 'password'}]

const authentication = (req, res, next) => {
  //get the headers from the request
  const headers = req.headers['authorization']
  
  if(headers) {
    const token = headers.split(' ')[1]
      //now verify the token
      jwt.verify(token, 'SOMESECRETKEY', (error, decoded) => {
        if(error) {
          //unable to decode the token
          res.json({success:false, message: 'Unable to verify'})
        } else if(decoded){
          next()
        }
          else {
            res.json({success: false, message: 'Unable to verify'})
          }
      })
  }
}

module.exports = authentication