import { IResolvers } from '@graphql-tools/utils';
import { showAuthor, showAuthors, createAuthor, updateAuthor, deleteAuthor, addBook, books } from '../../controller/Author';
import { showBook, showBooks, createBook, updateBook, deleteBook, author } from '../../controller/Book';

const resolvers: IResolvers = {

    Author: {
        books: async parent => {
            return books(parent.books)
        }
    },
    
    Book: {
        author: async parent => {
            return author(parent.author)
        }
    },
    
    Query: {
    
        author: async (_,{id}) => {
            return await showAuthor(id)
        },
        
        authors: async () => {
            return await showAuthors()
        },

        
        book: async (_,{id}) => {
            return await showBook(id)
        },

        books: async () => {
            return await showBooks()
        }
    },

    Mutation: {
        
        createAuthor: async (_, {name}) => {
            return await createAuthor(name)
        },

        updateAuthor: async (_, {id, newName}) => {
            return await updateAuthor(id, newName)
        },

        deleteAuthor: async (_, {id}) => {
            return await deleteAuthor(id)
        },

        addBook: async (_, {id, books}) => {
            return await addBook(id, books)
        },


        createBook: async (_, {title, author}) => {
            return await createBook(title, author)
        },

        updateBook: async (_, {id, newTitle}) => {
            return updateBook(id, newTitle)
        },

        deleteBook: async (_, {id}) => {
            return deleteBook(id)
        }
    }


}

export default resolvers