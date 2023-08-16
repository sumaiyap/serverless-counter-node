const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000; // Use any port you prefer

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', async (req, res) => {
    try {
        const inputString = req.body.input;
        const lambdaUrl = 'https://ru1fdmqevc.execute-api.us-east-1.amazonaws.com/calculate'; // Replace with your Lambda function's URL

        const response = await axios.post(lambdaUrl, { input: inputString });
        const length = response.data.body;

        res.send(`Length of input string: ${length}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

app.listen(port, () => {
    console.log(`Client app listening at http://localhost:${port}`);
});

