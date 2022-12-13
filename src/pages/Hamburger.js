// import { useContext } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { HashLink as Link } from 'react-router-hash-link';
import '../Sidebar.css';
import useMenuStatus from '../App.js';

export default function Hamburger() {
  const ctx = useMenuStatus();
  // console.log('ctx.props.value.toggleMenu: ', ctx.props.value.toggleMenu);

  // const toggleMenuVisibility = () => {
  //   ctx.props.value.toggleMenu();
  // };

  return (
    <Menu right width={'100%'}>
      <Link to="/#work" smooth className="font-semibold text-xl pb-4">
        Work
      </Link>
      <Link to={`about`} className="font-semibold text-xl pb-4">
        About
      </Link>
      <Link to={`coming-soon`} className="font-semibold text-xl pb-4">
        Resume
      </Link>
    </Menu>
  );
}
