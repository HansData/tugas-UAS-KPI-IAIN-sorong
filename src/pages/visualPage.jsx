import NavbarSide from '../components/Fragments/NavbarSide';
import InputSearch from '../components/Elements/InputSearch';

const VisualPage = () => {
  return (
    <>
      <div>
        <NavbarSide></NavbarSide>

        <InputSearch identitas="search" type="search" placeholder="Cari Nama Mahasiswa..." typeTugas="visual"></InputSearch>
      </div>
    </>
  );
};

export default VisualPage;
