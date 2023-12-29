const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const port= process.env.PORT
app.get('/',(req,res)=>{
    res.send("Hello ! Welcome to the Home Page")
})
app.get('/about', (req, res) => {
    res.send("Hello ! Welcome to the About Page")
})
app.get('/contact', (req, res) => {
    res.send("Hello ! Welcome to the Contact Us Page")
})

app.listen(port,()=>{
    console.log(`App is started and running live at port ${port}`)
})