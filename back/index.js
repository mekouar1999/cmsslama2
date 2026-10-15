const express = require('express')
const app = express();

app.get('/', (req,res)=>{
        res.send("hello from back end ")

})

app.get('/login',(req,res)=>{
    res.send("bienvenue route login")
})

app.listen(4000,()=>{
    console.log('serveur qui tourne dans le port 4000')
})