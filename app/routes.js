const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path');

// Add your routes here - above the module.exports line

router.get('/preview-teacher-resource', function(request, response) {
  const filename = 'Battle_of_Hastings-Preview.pdf';
  const filepath = path.join(__dirname, "assets", "resources", filename)
  console.log(filepath)

  let data = fs.readFileSync(filepath);
  response.setHeader('Content-type', 'application/pdf');
  response.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  response.send(data);
});

module.exports = router
