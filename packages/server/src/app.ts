const express = require('express');
const app = express();
const config = require('./config');

const PORT: number = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;