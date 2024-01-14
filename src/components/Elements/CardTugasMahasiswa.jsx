import data from '../../json/tugas_mahasiswa.json';
import { FaUser } from 'react-icons/fa';
import ViewPdf from './ViewPdf';
import PlayAudio from './PlayAudio';
import YoutubeIframe from './YoutubeIframe';

const CardTugasMahasiswa = (props) => {
  const { input } = props;
  const filterData = data.filter((elemen) => {
    if (input === '') {
      return elemen;
    } else {
      return elemen.name.toLowerCase().includes(input);
    }
  });

  return (
    <>
      {filterData.map((item) => {
        return (
          <section key={item.id} className="self-start md:ml-5 lg:ml-10 flex mb-10">
            <div className={`mr-5 w-[50px] h-[50px] rounded-full ${item.theme_bg} flex justify-center items-center border-slate-700 border-2`}>
              <FaUser className="text-[25px] text-white" />
            </div>
            <article className="artikel relative bg-slate-200 rounded-md rounded-tl-none p-4 pt-0 shadow-xl">
              <h1 className={`py-2 font-semibold ${item.theme_text}`}>{item.name}</h1>
              <div className="p-2 rounded-md overflow-hidden">
                {item.youtube !== '' && (
                  <div className="mb-5">
                    <YoutubeIframe src={item.youtube} />
                  </div>
                )}
                {item.audio_mp3 !== '' && (
                  <div>
                    <PlayAudio src={item.audio_mp3}></PlayAudio>
                  </div>
                )}
                {item.filePDF !== '' && (
                  <div>
                    <ViewPdf href={item.filePDF} />
                  </div>
                )}
              </div>
            </article>
          </section>
        );
      })}
    </>
  );
};

export default CardTugasMahasiswa;
