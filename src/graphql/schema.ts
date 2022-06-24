import 'graphql-import-node'
import { makeExecutableSchema } from '@graphql-tools/schema'
import * as rootDefs from './schemas/schema.graphql'
import resolvers from './resolvers/resolvers'

const schema = makeExecutableSchema({
    typeDefs: [rootDefs],
    resolvers
})

export default schema