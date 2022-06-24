import { IResolvers } from '@graphql-tools/utils';
import { showAuthor, showAuthors, createAuthor, updateAuthor, deleteAuthor } from '../../controller/Author';

const resolvers: IResolvers = {

    Query: {
    
        author: async (_,{id}) => {
            return await showAuthor(id)
        },
        
        authors: async () => {
            return await showAuthors()
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
        }
    }


}

export default resolvers