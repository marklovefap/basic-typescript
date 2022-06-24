import mongoose from "mongoose";

export interface IAuthor {
    ID: string,
    name: string,
    books: string[]
}

export interface IAuthorModel extends IAuthor, mongoose.Document {}

const authorSchema = new mongoose.Schema({
    name: {type: String, require: true},
    books: [{type: mongoose.Types.ObjectId, ref: 'Book', require: true}]
})

export default mongoose.model<IAuthorModel>('Author', authorSchema)

