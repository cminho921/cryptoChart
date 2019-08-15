const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is listenning on port ${PORT}`))