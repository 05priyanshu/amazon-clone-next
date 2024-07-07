import mongoose from "mongoose"

export const connectToDatabase = async () => {
 try{
    if(mongoose.connections&&mongoose.connections[0].readyState){
        console.log("already connected");
        return
    };

    const {connection} = await mongoose.connect(process.env.MONGODB_URI,{DbName:"nextauth",});
    console.log(`connected to database ${connection.host}`)

 }catch(error){
    throw new Error("error while connecting to database");
 }

}