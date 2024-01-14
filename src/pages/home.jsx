import InputSearch from '../components/Elements/InputSearch';
import ImageSwipe from '../components/Elements/ImageSwipe';
import NavbarSide from '../components/Fragments/NavbarSide';

const Home = () => {
  return (
    <>
      <NavbarSide></NavbarSide>
      <main className="bg-white w-full h-screen overflow-y-scroll flex flex-col items-center bg-[url('/image/bg-utama.jpeg')]">
        <header className="w-full">
          <div className=" flex justify-between  px-5 py-2 bg-[#013e02]">
            <img src="/logo/logo_1.png" alt="logo kelas" className="w-16" />
            <img src="/logo/logo_2.png" alt="logo universitas" className="w-16" />
          </div>
          <div className="bg-[url('/image/bg-IAIN.png')] ">
            <ImageSwipe></ImageSwipe>
            <div className="text-center py-5 text-5xl font-Acme flex flex-col justify-center items-center text-white mt-5 gap-10">
              <h2 className=" w-[70%]">Tugas UAS Program Studi Komunikasi Penyiaran Islam</h2>
              <h4 className="text-3xl">Mata Kuliah Teknologi Komunikasi</h4>
            </div>
          </div>
        </header>

        <section className="mt-10 mb-20 w-full flex flex-col gap-16">
          <InputSearch identitas="search" type="search" placeholder="Cari Nama Mahasiswa..." />
        </section>
      </main>
    </>
  );
};

export default Home;
