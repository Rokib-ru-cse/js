const express = require('express')
const { getPhotos, updatePhoto, createPhoto } = require('../controllers/photo')
const router = express.Router()
var multer  = require('multer')
const path = require('path')
const shortid = require('shortid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
  
  // const upload = multer({ storage: storage });
  const upload = multer({ storage: storage });

router.get('/getphotos',getPhotos)
router.post('/createphoto',upload.single('photo'),createPhoto)
router.put('/updatephoto',updatePhoto)

 

module.exports = router