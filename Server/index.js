const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { v4 } = require('uuid');
const md5 = require('md5');
const { getIdeas, getContainers } = require('./businessRules/containers');
const { getUsers, setUsers } = require('./utils/storage');
const { createNewUser } = require('./controllers');

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

// Container METHODS

app.get('/containers', (req, res) => {
    res.status(200).json(getContainers());
});

//REGISTERED USERS

app.get('/register', (req, res) => {
    res.status(200).json(getUsers());
});

app.post('/register', (req, res) => {
    createNewUser(req.body.userName, req.body.password, req.body.firstName);
    res.status(201).json({
        message: 'User has been successfully registered',
        status: 'OK',
    });
});

// login

app.get('/login', (req, res) => {
    let users = getUsers();

    const user = req.cookies.userLoginSession
        ? users.find((u) => u.session === req.cookies.userLoginSession)
        : null;

    if (user) {
        res.status(200).json({
            status: 'OK',
            name: user.name,
            role: user.role,
        });
    } else {
        res.status(401).json({ status: 'error', message: 'Not Logged in.' });
    }
});

app.post('/login', (req, res) => {
    let users = getUsers();

    const userName = req.body.userName;
    const password = md5(req.body.password);

    const user = users.find(
        (u) => u.userName === userName && u.password === password
    );

    if (user) {
        const sessionId = md5(v4()); //Should be REAL cryptography.
        user.session = sessionId;
        setUsers(users);
        res.cookie('userLoginSession', sessionId, {
            sameSite: 'None',
            secure: true,
            httpOnly: true,
            maxAge: 900000,
        });
        res.status(200).json({ status: 'OK', userName: user.userName });
    } else {
        res.json({ status: 'No such user.' });
    }
});

//logout
app.post('/logout', (req, res) => {
    // res.cookie('userLoginSession', '', { maxAge: -3600 });
    res.clearCookie('userLoginSession', {
        sameSite: 'None',
        secure: true,
        httpOnly: true,
        sameSite: 'None',
    });
    res.json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
