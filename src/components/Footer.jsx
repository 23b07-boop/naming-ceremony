import React from 'react';
import { AlertCircle, Mail, Shield } from 'lucide-react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      <a href="#" className="footer__link">
        <AlertCircle size={14} className="footer__link-icon" /> Report a Problem
      </a>
      <a href="#" className="footer__link">
        <Mail size={14} className="footer__link-icon" /> Contact Support
      </a>
      <a href="#" className="footer__link">
        <Shield size={14} className="footer__link-icon" /> Privacy Policy
      </a>
    </div>
  </footer>
);

export default Footer;
