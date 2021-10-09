const express = require('express');
const router = express.Router();
const Model = require('../models/taskModel');

router.get('/home', (req, res) => {
    console.log('request in task router');
    res.send('a request to user home')
})

router.post('/add', (req, res) => {
    let data = req.body;
    console.log(data);
    new Model(data).save()
        .then(() => {
            console.log('User Data Saved');
            res.status(200).json({ message: 'success' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/update/:id', (req, res) => {

    Model.findOne({ email: req.params.email })
        .then((data) => {
            console.log('User Data fetched by email');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {

    Model.find({})
        .then((data) => {
            console.log('..');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;