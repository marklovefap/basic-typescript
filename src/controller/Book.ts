import mongoose from "mongoose";
import Author from "../model/Author";
import Book, {IBook} from "../model/Book";

export async function showBook<IBook>(id: string) {
    
    return await Book.findById(id)
}

export async function showBooks<IBook>() {
    
    const book = await Book.find()

    return await book
}

export async function createBook<IBook>(title: string, author: string) {
    
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        author: author
    })
    await book.save()

    return await book

}

export async function updateBook<IBook>(id: string, newTitle: string) {
    
    const book = await Book.findByIdAndUpdate(id, {
        title: newTitle
    }, {new: true})
    await book?.save()
    
    return await book
}

export async function deleteBook<IBook>(id: string) {
    
    const book = await Book.findByIdAndDelete(id)
    
    return `The book id: ${book?.id} and title: ${book?.title} has been deleted`
}

export async function author(id: string) {
    
    const author = await Author.findById(id)

    return author
}