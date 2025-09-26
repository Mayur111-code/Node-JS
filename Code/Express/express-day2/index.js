// // const express = require('express');

// // const app = express();

// // app.use('public')

// // app.get("/", (req, res)=>{
// //     // res.send(`<h1>Express js Home page</h1>`);
// //     res.send(`<img src ='/about_1.jpg'`);
// // });
// // app.get("/contact",(req,res)=>{
// //     res.send(`<h1>contact page</h1>`)
// // })

// // const PORT = 3000;
// // const HOST = '127.0.0.1';


// // app.listen(PORT,HOST,()=>{
// //     console.log(`http://${HOST}:${PORT}`);
// // });


// const express = require('express');
// const app = express();

// app.use(express.static('public'));

// const navbar = `        <nav>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </nav>`

// app.get((req,res)=>{
//    res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Header Example</title>
//       <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//       <header>
//         <div class="logo">My Website</div>
//         ${navbar}
//       </header>
//     </body>
//     </html>
//     `)
// }) 


// app.get('/', (req, res) => {
 
// res.send(`<h1>Home ${navbar}</h1>`)
// });


// app.get('/about', (req, res) => {
//   res.send('<h1>About</h1>');
// });

// app.get('/services', (req, res) => {
//   res.send('<h1>Services</h1>');
// });

// app.get('/contact', (req, res) => {
//   res.send('<h1>Contact</h1>');
// });

// const PORT = 3000;
// const HOST = '127.0.0.1';
// app.listen(PORT, HOST, () => {
//   console.log(`Server running at http://${HOST}:${PORT}`);
// });



// // const express = require('express');
// // const app = express();

// // app.use(express.static('public/'));

// // // Footer variable
// // const footer = `
// // <footer>
// //   <p>&copy; 2025 My Website. All rights reserved.</p>
// //   <p>Follow us: 
// //     <a href="#">Facebook</a> | 
// //     <a href="#">Twitter</a> | 
// //     <a href="#">Instagram</a>
// //   </p>
// // </footer>
// // `;

// // // Navbar HTML (reuse to avoid repetition)
// // const navbar = `
// // <header>
// //   <div class="logo">My Website</div>
// //   <nav>
// //     <ul>
// //       <li><a href="/">Home</a></li>
// //       <li><a href="/about">About</a></li>
// //       <li><a href="/service">Services</a></li>
// //       <li><a href="/contact">Contact</a></li>
// //     </ul>
// //   </nav>
// // </header>
// // `;

// // // Home page
// // app.get('/', (req, res) => {
// //   res.send(`
// //     <!DOCTYPE html>
// //     <html lang="en">
// //     <head>
// //       <meta charset="UTF-8">
// //       <title>Home</title>
// //       <link rel="stylesheet" href="style.css">
// //     </head>
// //     <body>
// //       ${navbar}
// //       <div style="padding:20px">
// //         <h1>Welcome to Web Development</h1>
// //         <p>Web development is the process of creating websites and web applications.</p>
// //       </div>
// //       ${footer}
// //     </body>
// //     </html>
// //   `);
// // });

// // // About page
// // app.get('/about', (req, res) => {
// //   res.send(`
// //     <!DOCTYPE html>
// //     <html lang="en">
// //     <head>
// //       <meta charset="UTF-8">
// //       <title>About</title>
// //       <link rel="stylesheet" href="style.css">
// //     </head>
// //     <body>
// //       ${navbar}
// //       <div style="padding:20px">
// //         <h1>About Us</h1>
// //         <p>Learn more about our web development journey.</p>
// //       </div>
// //       ${footer}
// //     </body>
// //     </html>
// //   `);
// // });

// // // Services page
// // app.get('/service', (req, res) => {
// //   res.send(`
// //     <!DOCTYPE html>
// //     <html lang="en">
// //     <head>
// //       <meta charset="UTF-8">
// //       <title>Services</title>
// //       <link rel="stylesheet" href="style.css">
// //     </head>
// //     <body>
// //       ${navbar}
// //       <div style="padding:20px">
// //         <h1>Our Services</h1>
// //         <p>We provide web development, design, and SEO services.</p>
// //       </div>
// //       ${footer}
// //     </body>
// //     </html>
// //   `);
// // });

// // // Contact page
// // app.get('/contact', (req, res) => {
// //   res.send(`
// //     <!DOCTYPE html>
// //     <html lang="en">
// //     <head>
// //       <meta charset="UTF-8">
// //       <title>Contact</title>
// //       <link rel="stylesheet" href="style.css">
// //     </head>
// //     <body>
// //       ${navbar}
// //       <div style="padding:20px">
// //         <h1>Contact Page</h1>
// //         <p>Get in touch with us.</p>
// //       </div>
// //       ${footer}
// //     </body>
// //     </html>
// //   `);
// // });

// // app.listen(2000, () => {
// //   console.log('Server running at http://localhost:2000');
// // });




const express = require('express');
const app = express();

app.use(express.static('public/'))

const header = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>MySite Header</title>
    
  </head>
  <body>
    <header class="site-header">
      <div class="container">
        <a href="#" class="logo" aria-label="Homepage">
          <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect width="24" height="24" rx="5" fill="currentColor"></rect>
          </svg>
          <span class="brand">MySite</span>
        </a>

        <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-hidden="true" />
        <label for="nav-toggle" class="nav-toggle-label" aria-hidden="true">
          <span class="hamburger"></span>
        </label>

        <nav class="nav" aria-label="Primary">
          <ul class="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="form">Form</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <form class="search" role="search" aria-label="Site search">
            <label for="site-search" class="visually-hidden">Search</label>
            <input id="site-search" type="search" placeholder="Search..." />
          </form>
          <a href="#" class="btn-primary">Get Started</a>
        </div>
      </div>
    </header>
  </body>
</html>
 
`

const footer=`

<footer class="site-footer">
    <div class="container">
      <p>© 2025 MySite. All rights reserved.</p>
    </div>
  </footer>
`

app.get('/', (req, res) => {
  
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Responsive Header Example</title>
  <!-- Link to the separate CSS file -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Header -->
${header}

  <!-- Example page content so header spacing can be seen -->
  <main style="padding:2rem;">
    <h1>Page content</h1>
    <p>This is an example page to show the header behavior.</p>
  </main>
    ${footer}
</body>
</html>
`)
});

app.get('/about', (req, res) => {
  res.send(`
    
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>About Us</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
${header}
  

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>About Us</h1>
      <p>Learn more about who we are and what we do.</p>
    </div>
  </section>
  ${footer}
</body>
</html>
    `)
})

app.get('/services', (req, res) => {
  res.send(`
    
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Our Services</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  ${header}

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>Our Services</h1>
      <p>Discover the wide range of services we offer to help you succeed.</p>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services">
    <div class="container">
      <div class="services-grid">
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Web Development" />
          <h3>Web Development</h3>
          <p>
            We build fast, responsive, and scalable websites tailored to your needs using the latest technologies.
          </p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Mobile Apps" />
          <h3>Mobile App Development</h3>
          <p>
            Our team creates high-performance mobile applications that provide a seamless user experience.
          </p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="UI/UX Design" />
          <h3>UI / UX Design</h3>
          <p>
            We design engaging interfaces and experiences that delight users and enhance brand presence.
          </p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Digital Marketing" />
          <h3>Digital Marketing</h3>
          <p>
            From SEO to social media campaigns, we help your brand reach the right audience effectively.
          </p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Cloud Solutions" />
          <h3>Cloud Solutions</h3>
          <p>
            We provide secure and scalable cloud services to support your business growth and operations.
          </p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Consulting" />
          <h3>IT Consulting</h3>
          <p>
            Get expert advice and strategies to optimize your digital transformation journey.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
    ${footer}
  
</body>
</html>

    `)
})

app.get('/contact', (req, res) => {
  res.send(`
    
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Contact Us</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
 ${header}

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Get in touch with our team today.</p>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact-section">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Info -->
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>Reach us through any of the following ways:</p>
          <ul>
            <li><strong>Email:</strong> support@mysite.com</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Address:</strong> 123, Business Street, Mumbai, India</li>
          </ul>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <h2>Send a Message</h2>
          <form>
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div class="form-group">
              <label for="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" rows="5" placeholder="Type your message..." required></textarea>
            </div>
            <button type="submit" class="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
    ${footer}
</body>
</html>

    
    `)
})

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT,HOST,()=>{
  console.log(`http://${HOST}:${PORT}`);
})