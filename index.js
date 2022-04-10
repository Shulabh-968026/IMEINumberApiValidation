import express from 'express';
import imei from 'node-imei';
const PORT = process.env.PORT || 3000;

const app = express();
const IMEI = new imei();
app.use(express.json());
//console.log(IMEI.random());
//console.log(IMEI.device("Apple","iPhone3G"));
//console.log(IMEI.isValid("860921035123120"));

app.post("/",(req,res)=>{
    console.log(req.body)
    try
    {
        const number = req.body.number;
        if(IMEI.isValid(number)){
            res.status(200).json({"success":"IMEI Number is valid."})
        }else{
            res.status(400).json({"error":"IMEI Number is Invalid."})
        }
    }
    catch(err){
        res.status(400).json({"error":"Something went Wrong!!"})
    }
    
})

app.listen(PORT,()=>{ console.log(`server is running at port ${PORT}`)})