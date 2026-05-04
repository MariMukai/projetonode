
const express = require("express");

const app=express();
const Port= 5001;

const contatos = ["Thor","Viuva-Negra","Homem de Ferro","Cap"]

app.get("/",(req,res)=>{
     res.send("Hello World !!!")
})
app.get("/teste",(req,res)=>{
    res.send("Teste")
});
app.get("/contatos",(req,res)=>{
    res.json(contatos)
})

app.listen(Port,()=>{
    console.log(`Servidor rodando na porta ${Port}`)
})
