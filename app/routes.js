const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path');

// Add your routes here - above the module.exports line

router.get('/preview-teacher-resource', function(request, response) {
  const filename = 'slide_1_keyword_match_up.odp';
  const filepath = path.join(__dirname, "assets", "resources", filename)
  const contentType = 'application/vnd.oasis.opendocument.presentation';

  let data = fs.readFileSync(filepath);
  response.setHeader('Content-Type', contentType);
  response.setHeader('Content-Disposition', 'inline; filename="' + filename + '"');
  response.send(data);
});

module.exports = router
