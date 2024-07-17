let express=require('express');
let cors=require('cors')
let mongoose=require('mongoose')

let app=express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/BharatinternSignup")
.then(()=>{console.log('Connect to mongodb')})
.catch((err)=>{console.log('Not connected',err)})

let USER=require('./model/model')
app.get("/",(req,res)=>{
    res.send('hello from backend')
})

//signup
app.post("/signup",(req,res)=>{
    const {fullname,username,email,password}=req.body
    if(!fullname||!username||!email||!password){
       return res.status(404).send('fill all the feilds')
    }
  
    let user=new USER({
        fullname,
        username,
        email,
        password
    })
    let result=user.save()
    console.log(result)
    res.send(result)
    console.log("signup successfully")
})
//signin
app.post("/signin",(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
       return res.status(404).send('fill all the feilds')
    }

    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
          return  res.status(404).send('not a Registrated member')
        }
        console.log(savedUser)
        res.send(savedUser)
    })
    USER.findOne({password:password}).then((savedUser)=>{
        if(!savedUser){
           return res.status(404).send('not a Registrated member')
        }
        console.log(savedUser)
        res.send(savedUser)
        console.log('signin successfully')
    })
})


let port=process.env.PORT||3000
app.listen(port,()=>{console.log(`App is running at ${port}`)})