import React from "react";
import './globals.css';
import Navbar from "./navbar.js";
import Footer from "./footer.js";

function App() {
  return (
    <div>
      <Navbar />
      
      <div id="contact">
      <div className="container">
        <div className="row">
          
          <div className="contact-left">
            <h1 className="sub-title">Contact Us</h1>
            <p>namenumber@gmail.com</p>
            <p>8007092440</p>
          </div>

          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
      
      <Footer />
    </div>
  );
}

export default App;
