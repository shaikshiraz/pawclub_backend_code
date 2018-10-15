var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
 const router=express.Router();

// var app = express()

router.post('/', upload.single('image'), function (req, res, next) {
    res.send(req.file);
   
    // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})