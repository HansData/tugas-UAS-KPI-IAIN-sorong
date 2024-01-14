import NavbarSide from '../components/Fragments/NavbarSide';
import ComingSoon from '../components/Elements/ComingSoon';
const Theme = () => {
  return (
    <>
      <NavbarSide></NavbarSide>
      <div className=" w-full h-screen overflow-y-scroll flex flex-col items-center justify-center bg-slate-700">
        <ComingSoon></ComingSoon>
      </div>
    </>
  );
};

export default Theme;
