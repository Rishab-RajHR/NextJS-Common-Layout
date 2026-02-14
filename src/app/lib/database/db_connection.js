const username = process.env.myusername
const password = process.env.mypassword

if(!username || !password){
    throw new Error("Missing MongoDB Credentials")
}

export const connectionString = `mongodb+srv://${username}:${password}@cluster0.3nfqjnb.mongodb.net/student?appName=Cluster0`;