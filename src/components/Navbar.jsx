import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { FaRegPenToSquare } from 'react-icons/fa6';
import Button from './ui/Button';
import User from './User';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 mb-2">
      <Link to="/">
        <img
          src="logo.png"
          alt="logo"
          style={{ width: '250px', height: '250px' }}
        ></img>
      </Link>

      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <FaRegPenToSquare />
          </Link>
        )}
        {user && <User user={user} />}
        {!user ? (
          <Button text={'로그인'} onClick={login} />
        ) : (
          <Button text={'로그아웃'} onClick={logout} />
        )}
      </nav>
    </header>
  );
}
