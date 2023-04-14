const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { getIdeas } = require('./businessRules/containers');

const app = express();
const port = 3003;

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    // access-control-allow-credentials:true
};
app.use(cors(corsOptions));

app.use(express.json());

// IDEAS METHODS

app.get('/ideas', (req, res) => {
    res.status(200).json(getIdeas());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
