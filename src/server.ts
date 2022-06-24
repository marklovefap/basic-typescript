import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose';
import express from 'express'
import { createServer } from 'http';
import { config } from './config/config'
import schema from './graphql/schema'

mongoose
    .connect(config.mongo.url)
    .then(() => {
        console.log('Database Connected')
        startServer()
    })
    .catch((error) => console.log({ error }))


const startServer = async (): Promise<void> => {
    
    const app = express()
    
    const apolloServer = new ApolloServer({
        schema
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({ app, path: '/graphql' });

    const httpServer = createServer(app);

    httpServer.listen({ port: config.port.port }, (): void =>
    console.log(`\n🚀 GraphQL is now running on http://localhost:${config.port.port}/graphql`))
}


