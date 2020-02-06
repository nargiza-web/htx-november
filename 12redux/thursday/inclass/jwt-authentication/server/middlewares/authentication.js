
const jwt = require('jsonwebtoken')

const authentication = (req,res,next) => {
     // get the headers from the request 
     const headers = req.headers['authorization'] // Bearer eyJnbGci
     if(headers) {
         const token = headers.split(' ')[1]
          // verify the token 
         jwt.verify(token, 'SOMESECRETKEY',(error,decoded) => {
         if(error) {
             // unable to decode the token 
             res.json({success: false, message: 'Unable to verify'})
         } else if(decoded) {
             next() // go and execute the original request 
         }
     })
     } else {
         res.json({success: false, message: 'Unable to verify'})
     }

}

module.exports = authentication 