import express from "express"
import cors from "cors"

const app =  express();
app.use(cors()); 
const PORT = process.env.PORT || 8000;


app.listen(PORT, (error)=>{
    if(error) throw error;
    console.log(`Server is running at http://localhost:${PORT}`);
 });