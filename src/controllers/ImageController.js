const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Specify the directory
        const pathFolder = './uploads/';

        // Create directory if not exists
        fs.mkdirSync(pathFolder, { recursive: true });

        // Directory where the file will be saved
        cb(null, pathFolder);
    },
    filename: (req, file, cb) => {
        // Filename that will be used by the uploaded file
        const filename = Date.now() + path.extname(file.originalname);
        cb(null, filename);
    },
});

const upload = multer({ storage });

// Use multer as a middleware
router.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({ success: true });
});

module.exports = (app) => app.use('/image', router);
