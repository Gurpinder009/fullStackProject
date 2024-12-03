import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <div>
        <footer className="footer">
        <section className="footer-content">
          <section>
            <h2>Useful Links</h2>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="*">Collections</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              
            </ul>
          </section>

          <section>
            <h2>Collections</h2>
            <ul>
              <li><NavLink to="/collections/rings">Rings</NavLink></li>
              <li><NavLink to="/collections/necklaces">Necklaces</NavLink></li>
              <li><NavLink to="/collections/bracelets">Bracelets</NavLink></li>
              <li><NavLink to="/collections/Earings">Earings</NavLink></li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <ul>
              <li>Email Me</li>
              <li>+12349238729</li>
              <li>New Westminster</li>
            </ul>
          </section>
        </section>

        <div className="copyright-txt">
          © 2024 Iconic Jewellers Limited. All Rights Reserved. | <NavLink to="/admin"style={{color:'#bbb'}}> Admin Login</NavLink>
        </div>
      </footer>
    </div>
  )
}

export default Footer
