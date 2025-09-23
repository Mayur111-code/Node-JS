const http=require('http')
const Myapp = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("Welcome to Node Js Module")
    res.write(`<h1>Mayur</h1>`)
    res.end()


})
 const PORT =5000;
const HOST = 123.218
Myapp.listen(5000,()=>{
    console.log(`server is running ${PORT}`)
})