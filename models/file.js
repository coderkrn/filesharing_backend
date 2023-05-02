import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        reqiured: true
    },
    name: {
        type: String,
        reqiured: true
    },
    downloadContent: {
        type: Number,
        reqiured: true,
        default: 0
    }
})

const File = mongoose.model('file', fileSchema)

export default File;