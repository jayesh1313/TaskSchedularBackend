const multer = require('multer');
const express = require('express');
const router = express.Router();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const uploader = multer({ storage: fileStorage })

router.post('/addfile', uploader.single('file'), (req, res) => {
    res.json({ message: 'file upload success' });
})

module.exports = router;