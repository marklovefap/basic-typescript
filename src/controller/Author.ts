import mongoose from "mongoose";
import Author, { IAuthor } from '../model/Author'
import Book from "../model/Book";

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

export async function addBook(id: string, books: string[] ) {
    
    const author = await Author.findById(id) 
    for(let i = 0; i<books.length; i++) {
        await author?.books.push(books[i])
    }
    await author?.save()

    return author
}

export async function books(books: string[]) {
    const book = []
    for(let i = 0; i<books.length; i++) {
        await book.push(await Book.findById(books[i]))
    }

    return book
}

