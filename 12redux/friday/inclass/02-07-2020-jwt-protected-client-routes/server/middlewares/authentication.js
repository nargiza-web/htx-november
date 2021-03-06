
const jwt = require('jsonwebtoken')

// database 
const users = [{username: 'johndoe', password: 'password'}]

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
           // const username = decoded.username // use userid instead 
            // check for the username in the database 
           // const persisedUser = users.find((u) => u.username == username)
           // if(persisedUser) {
                next() 
            } 
            else {
                res.json({success: false, message: 'Unable to verify'})
            }

        })
    }
}



module.exports = authentication 