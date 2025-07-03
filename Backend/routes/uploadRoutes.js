const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');

// Multer setup (store file temporarily)
const upload = multer({ dest: 'uploads/' });

router.post('/image', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'event_images'
    });
    fs.unlinkSync(req.file.path); // Remove file after upload
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: 'Image upload failed', details: err.message });
  }
});

module.exports = router; 