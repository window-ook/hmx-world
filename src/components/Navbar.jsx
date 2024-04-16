import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);
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
        {user && <User user={user} />}
        {!user ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </nav>
    </header>
  );
}
