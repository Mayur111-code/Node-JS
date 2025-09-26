const express = require('express');
const app = express();

app.use(express.static('public/')); // public folder for style.css & images

// Reusable header
const header = `
<header class="site-header">
  <div class="container">
    <a href="/" class="logo" aria-label="Homepage">
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
        <li><a href="/" class="active">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="contact">Contact</a></li>
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
`;

// Home Page
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Home - MySite</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  ${header}

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>Welcome to MySite</h1>
      <p>Your trusted partner for web development, design, and digital solutions.</p>
      <a href="/services" class="btn-primary">Explore Services</a>
    </div>
  </section>

  <!-- Features Section -->
  <section class="services">
    <div class="container">
      <h2 style="text-align:center; color:#0b72ff; margin-bottom:2rem;">Our Core Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Web Development" />
          <h3>Web Development</h3>
          <p>Fast, responsive, and scalable websites tailored to your needs.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Mobile Apps" />
          <h3>Mobile Apps</h3>
          <p>High-performance mobile applications for Android & iOS.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="UI/UX Design" />
          <h3>UI / UX Design</h3>
          <p>Engaging and user-friendly interface designs for your business.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <p>© 2025 MySite. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
  `);
});

// About Page
app.get('/about', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>About Us - MySite</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  ${header}

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>About Us</h1>
      <p>Learn more about our team, mission, and vision for delivering quality digital solutions.</p>
    </div>
  </section>

  <!-- About Section -->
  <section class="about-section">
    <div class="container about-content">
      <div class="about-text">
        <h2>Who We Are</h2>
        <p>MySite is a leading digital solutions company focused on building beautiful, fast, and secure web experiences. Our team of expert developers and designers are passionate about delivering quality solutions for businesses of all sizes.</p>
        <p>We specialize in web development, mobile app development, UI/UX design, and digital marketing services that help your brand grow.</p>
      </div>
      <div class="about-image">
        <img src="https://via.placeholder.com/500x300" alt="About Us Image" />
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <p>© 2025 MySite. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
  `);
});

// Services Page
app.get('/services', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Our Services - MySite</title>
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
          <p>Fast, responsive, and scalable websites tailored to your needs.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Mobile Apps" />
          <h3>Mobile App Development</h3>
          <p>High-performance mobile applications providing a seamless user experience.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="UI/UX Design" />
          <h3>UI / UX Design</h3>
          <p>Engaging interfaces and experiences that delight users and enhance brand presence.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Digital Marketing" />
          <h3>Digital Marketing</h3>
          <p>SEO, social media campaigns, and marketing strategies to reach your audience.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Cloud Solutions" />
          <h3>Cloud Solutions</h3>
          <p>Secure and scalable cloud services supporting your business growth.</p>
        </div>
        <div class="service-card">
          <img src="https://via.placeholder.com/100" alt="Consulting" />
          <h3>IT Consulting</h3>
          <p>Expert advice and strategies for optimizing digital transformation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <p>© 2025 MySite. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
  `);
});

// Contact Page
app.get('/contact', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Contact Us - MySite</title>
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
  <footer class="site-footer">
    <div class="container">
      <p>© 2025 MySite. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
  `);
});

const PORT = 3000;
const HOST = '127.0.0.1';
app.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`));
