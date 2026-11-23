import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Signup', to: '/signup' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Support', to: '/support' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-navbar">
      <nav className="site-navbar__inner" aria-label="Main navigation">
        <Link className="site-navbar__brand" to="/" aria-label="Zerodha home">
          <img src="/media/images/logo.svg" alt="Zerodha" />
        </Link>

        <button
          className="site-navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navbar-links"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`site-navbar__links${menuOpen ? ' site-navbar__links--open' : ''}`}
          id="site-navbar-links"
        >
          {navLinks.map(({ label, to }) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
