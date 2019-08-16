const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => res.send('Hello World'));
app.use('/cryptoChart', express.static(path.resolve(__dirname, '..', 'client', 'dist')));


app.listen(PORT, () => console.log(`App is listenning on port ${PORT}`))