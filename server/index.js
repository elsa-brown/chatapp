const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const DIST_DIR = path.join(__dirname, '../dist');
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

app.use(express.static(DIST_DIR));

app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(port, () => console.log('listening on port ' + port));