// // server create 

// const http=require('http')
// const app=http.createServer((req,res)=>{
//     //must be passed string
//     res.write("Welcome TO Node JS Server");
    
//     res.end()
// })

// // we nned to pass port number compulsory to listen server incoming request using app.listen() -method
// //port no betwwen 0-65535



// const PORT =3000;
// const HOST = 123.216
// app.listen(1000,()=>{
//     // console.log(`server is running on http://localhost:1000`);
//     console.log(`server is running ${PORT}`);
//     console.log("hello");
    
    
    
// })

const http = require('http');

const App2 = http.createServer((req, res) => {
    res.write("good morning");
    res.end(); // Fixed: call the function
});

const PORT = 2000;
App2.listen(2000, () => { // Fixed: use App2 instead of app
    console.log(`server is start ${PORT}`);
});