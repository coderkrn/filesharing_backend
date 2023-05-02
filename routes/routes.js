import express from 'express'
const router = express.Router();
import File from '../models/file.js';
import multer from "multer";

const upload = multer({dest: "uploads"});

// Upload Image API
router.post('/upload', upload.single('file') , async (req, res)=>{
    // return res.status(200).json({msg: "Hello"})
    // console.log(req)
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try {
        const file = await File.create(fileObj)
        console.log(file)
        res.status(200).json({path: `http://localhost:8000/file/${file._id}`})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
})

// Download Image API

router.get(`/file/:fileid`, async (req, res)=>{
    try {
        const DFile = await File.findById(req.params.fileid)
        DFile.downloadContent++;

        await DFile.save();

        res.download(DFile.path, DFile.name);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    } 
})

export default router;