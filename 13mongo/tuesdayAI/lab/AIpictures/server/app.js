const express = require('express')
const app = express()


function uploadFile(req, callback) {
  new formidable.IncomingForm().parse(req)
  .on('fileBegin', (name, file) => {
    uniqueFilename = `${uuidv1()}.${file.name.split('.').pop()}`
    file.name = uniqueFilename
    file.path = __basedir + '/uploads/' + file.name
  })
  .on('file', (name,file) =>{
    callback(file.name)
  })
}

router.post('/upload', (req, res) => {
  uploadFile(req, (photoURL) => {
    photoURL = `/uploads/${photoURL}`
    res.render('add-lab-result', {imageURL: photoURL, className: 'labresult-preview-image'})
  })
})