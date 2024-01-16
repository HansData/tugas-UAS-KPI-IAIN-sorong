import data from '../../json/tugas_mahasiswa.json';
import { FaUser } from 'react-icons/fa';
import ViewPdf from './ViewPdf';
import PlayAudio from './PlayAudio';
import YoutubeIframe from './YoutubeIframe';

const CardTugasMahasiswa = (props) => {
  const { input, typeTugas } = props;
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
        if (typeTugas == item.type) {
          return (
            <section key={item.id}>
              <div className="mb-5 shadow-xl rounded-md">
                {item.type == 'video' ? <YoutubeIframe src={item.tugas} nama={item.name} /> : item.type == 'visual' ? <ViewPdf href={item.tugas} nama={item.name} /> : <PlayAudio src={item.tugas} nama={item.name}></PlayAudio>}
              </div>
            </section>
          );
        }
      })}
    </>
  );
};

export default CardTugasMahasiswa;
