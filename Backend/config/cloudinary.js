const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dytynz3pr', // <-- Replace with your Cloudinary cloud name
  api_key: '131484598976726',
  api_secret: 'ABZ5LMR0pJv6mxgkIEEmbgfynCk'  // <-- Replace with your Cloudinary API secret
});

module.exports = cloudinary;