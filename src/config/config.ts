import dotenv from 'dotenv'
dotenv.config()

const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.gxnkxvr.mongodb.net/?retryWrites=true&w=majority`

const SERVER_PORT = process.env.SERVER_PORT

export const config = {
    mongo : {
        url: MONGO_URL
    },
    port : {
        port: SERVER_PORT
    }
}