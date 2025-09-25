// const express = require('express');

// const app = express();

// app.use('public')

// app.get("/", (req, res)=>{
//     // res.send(`<h1>Express js Home page</h1>`);
//     res.send(`<img src ='/about_1.jpg'`);
// });
// app.get("/contact",(req,res)=>{
//     res.send(`<h1>contact page</h1>`)
// })

// const PORT = 3000;
// const HOST = '127.0.0.1';


// app.listen(PORT,HOST,()=>{
//     console.log(`http://${HOST}:${PORT}`);
// });


const express = require('express');
const app = express();

app.use(express.static('public'));

const navbar = 


app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Header Example</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <div class="logo">My Website</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </body>
    </html>
  `);
});


app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/services', (req, res) => {
  res.send('<h1>Services</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1>');
});

const PORT = 3000;
const HOST = '127.0.0.1';
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});