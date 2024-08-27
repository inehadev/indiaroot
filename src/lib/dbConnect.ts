import mongoose from "mongoose";

type isConnection ={
    connection? :number
}

const connected : isConnection={}

async function dbConnect (): Promise<void>{

    if(connected.connection){
        console.log("database is already connected ")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '' , {})
        connected.connection= db.connections[0].readyState
        console.log("database connected successfully")
        
    } catch (error) {
        console.error("dtabase connection failed " , error);
        process.exit(1)
        
    }

}

export default dbConnect;