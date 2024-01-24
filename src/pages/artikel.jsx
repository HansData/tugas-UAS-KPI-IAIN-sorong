import ArtikelText from '../components/Elements/ArtikelText';
import NavbarSide from '../components/Fragments/NavbarSide';

const Artikel = () => {
  return (
    <>
      <div>
        <NavbarSide></NavbarSide>
        <div className="px-16">
          <ArtikelText></ArtikelText>
        </div>
      </div>
    </>
  );
};

export default Artikel;
