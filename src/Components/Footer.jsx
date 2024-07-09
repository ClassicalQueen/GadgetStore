import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>
          Gadget<span class="store">Store</span>
        </h3>
        <p>Get awesome gadgets from us any day any time.</p>
        <div className="social-media">
          <a href="#">
            <img src="./src/assets/facebook.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="./src/assets/insta.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="./src/assets/tweet.svg" alt="Twitter" />
          </a>
          <a href="#">
            <img src="./src/assets/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact us</a>
          <a href="#">Support</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer-column">
          <h4>Quick Link</h4>
          <a href="#">Share Location</a>
          <a href="#">Orders Tracking</a>
          <a href="#">Size Guide</a>
          <a href="#">FAQs</a>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;