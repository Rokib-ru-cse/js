const express = require('express')
const router = express.Router()
var multer  = require('multer')
const path = require('path')
const shortid = require('shortid')
const {createRoom,getRoom,bookRoom} = require('../controllers/room')

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

router.post('/createroom',upload.single('image'),createRoom)
router.get('/getroom',getRoom)
router.put('/bookroom',bookRoom)

 

module.exports = router