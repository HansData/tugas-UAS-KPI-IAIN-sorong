import NavbarSide from '../components/Fragments/NavbarSide';
import InputSearch from '../components/Elements/InputSearch';

const VideoPage = () => {
  return (
    <>
      <div>
        <NavbarSide></NavbarSide>

        <InputSearch identitas="search" type="search" placeholder="Cari Nama Mahasiswa..." typeTugas="video"></InputSearch>
      </div>
    </>
  );
};

export default VideoPage;
