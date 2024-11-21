import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SEVENTEEN</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><a href="https://pledis.co.kr">Official Site</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
