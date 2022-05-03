import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='flex justify-end pt-5 sm:text-lg gap-8'>
      <NavLink className='hover:text-sky-500 hover:underline' to='../'>Home</NavLink>
      <NavLink className='hover:text-sky-500 hover:underline' to='favorites'>Favorites</NavLink>
    </header>
  );
};

export default Header;
