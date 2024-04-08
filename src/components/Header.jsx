import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-row justify-between mx-4">
      <div>
        {/* 쇼피 로고 */}
        <Link to="/home">
          <img
            src="./img/logo.png"
            alt="logo"
            style={{ width: '200px', height: '100px' }}
          ></img>
        </Link>
      </div>

      <div className="space-x-3">
        {/* products : 상품 */}
        <Link to="/products">
          <span>products</span>
        </Link>
        {/* 장바구니 아이콘 */}
        <Link to="/cart">
          <span>Cart</span>
        </Link>
        {/* Login */}
        <Link to="/login">
          <span>products</span>
        </Link>
      </div>
    </div>
  );
}
