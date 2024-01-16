import { FaHome, FaUserEdit, FaPalette } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const NavbarSide = () => {
  return (
    <>
      <nav id="navbar" className="bg-slate-300 flex justify-between w-screen h-max px-4 sticky top-0">
        <div className="flex items-end py-5 gap-3">
          <img src="/logo/logo.png" alt="logo website" className="w-8 ml-5 " />
          <span className="text-2xl font-bold font-Vollkorn  leading-none">Firman</span>
        </div>
        <div className="flex justify-center items-center gap-12">
          {/* bagian card */}
          <NavLink to={'/'}>
            <button className="btn-style  border-0 focus:outline-none hover:bg-slate-400 ">
              <span>Home</span>
            </button>
          </NavLink>
          {/* #! bagian 1 */}
          <NavLink to={'/videoPage'}>
            <button className="btn-style  border-0 focus:outline-none hover:bg-slate-400 ">
              <span>Video</span>
            </button>
          </NavLink>
          {/* bagian 2 */}
          <NavLink to={'/visualPage'}>
            <button className="btn-style  border-0 focus:outline-none hover:bg-slate-400 ">
              <span>Visual</span>
            </button>
          </NavLink>
          <NavLink to={'/audiopage'}>
            <button className="btn-style  border-0 focus:outline-none hover:bg-slate-400 ">
              <span>Audio</span>
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavbarSide;
