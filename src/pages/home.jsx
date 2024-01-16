import ImageSwipe from '../components/Elements/ImageSwipe';
import NavbarSide from '../components/Fragments/NavbarSide';
import Artikel from '../components/Elements/Aritikel';
import YoutubeIframe from '../components/Elements/YoutubeIframe';
import ViewPdf from '../components/Elements/ViewPdf';
import PlayAudio from '../components/Elements/PlayAudio';
import data from '../json/tugas_mahasiswa.json';

const Home = () => {
  return (
    <>
      <main className="bg-white w-screen h-max">
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
        <section>
          <NavbarSide></NavbarSide>
        </section>
        <article className="px-16">
          <Artikel></Artikel>
        </article>
        <section className="bg-slate-200 px-16 pt-10 pb-10">
          <div className="w-full text-center mb-10">
            <h1 className=" text-2xl font-bold font-Acme">PENGUMPULAN TUGAS UAS</h1>
          </div>
          <div>
            <div className="relative mb-10 border-b-2 border-black/10 pb-1.5">
              <h1 className="font-2xl font-bold">TUGAS VIDEO</h1>
              <span className="inline-block w-[50px] bg-blue-400 h-1.5 rounded-lg absolute buttom-0"></span>
            </div>
            <div className="flex flex-wrap gap-5 mt-5 justify-center">
              {data.map((item) => {
                return (
                  <>
                    {item.type == 'video' && (
                      <div key={item.id} className="mb-5 shadow-xl rounded-md">
                        <YoutubeIframe src={item.tugas} nama={item.name} />
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-white p-16">
          <div className="">
            <div className="relative mb-10 border-b-2 border-black/10 pb-1.5">
              <h1 className="font-2xl font-bold">TUGAS VISUAL</h1>
              <span className="inline-block w-[50px] bg-blue-400 h-1.5 rounded-lg absolute buttom-0"></span>
            </div>
            <div className="flex flex-wrap gap-5 mt-5 justify-center">
              {data.map((item) => {
                return (
                  <>
                    {item.type == 'visual' && (
                      <div key={item.id} className="mb-5 shadow-xl rounded-md">
                        <ViewPdf href={item.tugas} nama={item.name} />
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-slate-200 p-16">
          <div className="">
            <div className="relative mb-10 border-b-2 border-black/10 pb-1.5">
              <h1 className="font-2xl font-bold">TUGAS AUDIO</h1>
              <span className="inline-block w-[50px] bg-blue-400 h-1.5 rounded-lg absolute buttom-0"></span>
            </div>
            <div className="flex flex-wrap gap-5 mt-5 justify-start ml-10">
              {data.map((item) => {
                return (
                  <>
                    {item.type == 'audio' && (
                      <div key={item.id} className="mb-5 shadow-xl rounded-md overflow-hidden">
                        <PlayAudio src={item.tugas} nama={item.name}></PlayAudio>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
