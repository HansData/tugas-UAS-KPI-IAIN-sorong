import NavbarSide from '../components/Fragments/NavbarSide';
import InputSearch from '../components/Elements/InputSearch';

const AudioPage = () => {
  return (
    <>
      <div>
        <NavbarSide></NavbarSide>

        <InputSearch identitas="search" type="search" placeholder="Cari Nama Mahasiswa..." typeTugas="audio"></InputSearch>
      </div>
    </>
  );
};

export default AudioPage;
