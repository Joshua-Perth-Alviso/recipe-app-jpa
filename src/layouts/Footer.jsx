import React from 'react';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>©{currentYear} PantryPal. All rights Reserved.</p>
    </footer>
  );
};

export default Footer;
