import { MongoClient } from 'mongodb';
import "dotenv/config";

const client = new MongoClient(process.env.URI)

export const dataBase = client.db(process.env.DB_NAME);

