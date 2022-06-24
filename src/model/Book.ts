import mongoose from "mongoose";

export interface IBook {
    ID: string,
    title: string,
    author: string
}

export interface IBookModel extends IBook, mongoose.Document {} 

const bookSchema = new mongoose.Schema({
    title: {type: String, require: true},
    author: {type: mongoose.Types.ObjectId, ref: 'Author', require: true}
})

export default mongoose.model<IBookModel>('Book', bookSchema)
