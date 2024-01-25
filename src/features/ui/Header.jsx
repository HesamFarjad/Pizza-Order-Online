import { Link } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';
import Username from '../user/Username';

function Header() {
  return (
    <header className=" flex items-center justify-between border-y-2 border-stone-400 bg-yellow-400 px-4 py-3 uppercase sm:px-6 ">
      <Link to="/" className="tracking-widest">
        {' '}
        Fast react pizza.co{' '}
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
