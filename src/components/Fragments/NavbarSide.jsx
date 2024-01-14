import { FaHome, FaUserEdit, FaPalette } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const NavbarSide = () => {
  return (
    <>
      <nav id="navbar" className="bg-slate-300 flex flex-col left-0 w-[200px] h-screen">
        <div className="flex items-end py-5 mb-16 gap-3">
          <img src="/logo/logo.png" alt="logo website" className="w-8 ml-5 " />
          <span className="text-2xl font-bold font-Vollkorn  leading-none">Firman</span>
        </div>

        {/* bagian card */}
        <NavLink to={'/'}>
          <button className="btn-style flex justify-start items-center border-0 focus:outline-none hover:bg-slate-400 w-full">
            <span className="inline-block mr-5">
              <FaHome className="text-blue-300 text-2xl" />
            </span>
            <span>Home</span>
          </button>
        </NavLink>
        {/* #! bagian 1 */}
        <NavLink to={'/editData'}>
          <button className="btn-style flex justify-start items-center border-0 focus:outline-none hover:bg-slate-400 w-full">
            <span className="inline-block mr-5">
              <FaUserEdit className="text-blue-300 text-2xl" />
            </span>
            <span>Edit</span>
          </button>
        </NavLink>
        {/* bagian 2 */}
        <NavLink to={'/theme'}>
          <button className="btn-style flex items-center justify-start border-0 focus:outline-none hover:bg-slate-400 w-full">
            <span className=" inline-block mr-5">
              <FaPalette className="text-blue-300 text-2xl" />
            </span>
            <span>Theme</span>
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default NavbarSide;
