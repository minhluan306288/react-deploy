import '@Assets/less/layoutMenuHeader.less';
import { routes } from '@Router/router';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function MenuHeader(){
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div id='menu-header' className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-blue-500 rounded">
            <div className="w-full flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-2 lg:static lg:block lg:justify-start">
                <Link
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  to="/"
                >
                  HLStore
                </Link>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col gap-2 lg:flex-row list-none lg:ml-auto">
                  {routes.filter(i => i.isShowMenu).map(i => 
                     <li className="nav-item" key={i.path}>
                        <NavLink
                           className={
                            ({ isActive, isPending }) =>
                              `${isPending ? "pending" : isActive ? "active" : ""} transition-all rounded-md menu-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-500 hover:bg-white`}
                           to={i.path}
                           >
                           <span>{i.title}</span>
                        </NavLink>
                     </li>
                     )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}