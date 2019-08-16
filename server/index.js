const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const router = express.Router();
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.use('/cryptoChart', express.static(path.resolve(__dirname, '..', 'client', 'dist')));



app.listen(PORT, () => console.log(`App is listenning on port ${PORT}`))