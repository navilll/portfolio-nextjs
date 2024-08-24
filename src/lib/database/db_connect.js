const username = process.env.myusername;
const password = process.env.mypassword;

if(!username || !password)
{
    throw new Error("Mongo DB Creadential Error");
}

export const contactString = `mongodb+srv://${username}:${password}@cluster0.1ogeu.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0`