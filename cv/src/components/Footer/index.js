import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = (props) => (
  <footer className="page-footer font-small">
    <div className="footer-copyright text-center py-3">© {CURRENT_YEAR}
      <a href="https://dtodo1paco.github.io/cv/"> @dtodo1paco</a>
    </div>
  </footer>
);
export default Footer;