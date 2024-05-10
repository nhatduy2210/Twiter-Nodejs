
import { Collection, Db, MongoClient } from 'mongodb';
import User from '~/models/schemas/User.schema';
import dotenv from 'dotenv'
dotenv.config()
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
console.log(process.env.DB_USERNAME)
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@facebook.cfrzj7k.mongodb.net/?retryWrites=true&w=majority&appName=Facebook`;

//class viết hoa chữ cái đầu
class DatabaseService{
private client:MongoClient
private db:Db
  constructor(){
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)

  }
  async connect(){
    try { 
  
      // Send a ping to confirm a successful connection
      //await this.client.db("admin").command({ ping: 1 });
      await this.db.command({ping:1})
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(error) {
      console.log('error',error)
      throw error
    }
  }

  get users():Collection<User>{
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }

}
//tạo object từ class DatabaseServiece
const databaseService = new DatabaseService()
export default databaseService
