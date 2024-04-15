import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegPenToSquare } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300">
      <Link to="/">
        <img
          src="logo.png"
          alt="logo"
          style={{ width: '150px', height: '150px' }}
        ></img>
      </Link>

      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">
          <span>Products</span>
        </Link>
        <Link to="/carts">
          <span>Carts</span>
        </Link>
        <Link to="/products/new" className="text-2xl">
          <FaRegPenToSquare />
        </Link>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </nav>
    </header>
  );
}
