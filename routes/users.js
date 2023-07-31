const express = require('express');
const multer = require('multer')

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() +  '-' + file.originalname);
  }
});

const upload = multer({ storage: storageConfig});
const router = express.Router();

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

router.post('/profiles', upload.single('image')  , (req,res) => {
  const uploadedImagesFile = req.file;
  const userData = req.body;

  console.log(uploadedImagesFile);
  console.log(userData);

  res.redirect('/');
})

module.exports = router;