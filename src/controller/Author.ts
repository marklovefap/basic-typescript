import mongoose from "mongoose";
import Author, { IAuthor } from '../model/Author'

export async function showAuthor<IAuthor>(id: string) {
    
    return await Author.findById(id)
}

export async function showAuthors<IAuthor>() {
    
    return await Author.find()
}

export async function createAuthor<IAuthor>(name: string) {
    
    const author = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: name
    })

    return await author.save()

}

export async function updateAuthor<IAuthor>(id: string, newName: string) {
    
    const author = await Author.findByIdAndUpdate(id, {
        name: newName
    }, {new: true})
    
    await author?.save()
    
    return author
}

export async function deleteAuthor<IAuthor>(id: string) {
    
    const author = await Author.findByIdAndDelete(id)

    return `the author id: ${author?._id} and name: ${author?.name} has been deleted`
}

