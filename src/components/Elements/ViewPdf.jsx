import { FaFilePdf } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';

const ViewPdf = (props) => {
  const { href, nama } = props;
  return (
    <>
      <div className="flex justify-start  gap-5 flex-col bg-slate-300 p-5 rounded-md">
        <h1 className="font-semibold w-max text-start border-b-2 border-black/20 pr-4">{nama}</h1>
        <article className=" rounded-md overflow-hidden">
          <iframe src={`/file-pdf/${href}`} width="400px" height="228px" />
        </article>
        <section className="flex gap-10">
          <div className="text-center">
            <p className=" font-medium mb-1">Lihat Full PDF</p>
            <div className="bg-[#53BF0F] rounded-lg w-50 ">
              <a href={`/file-pdf/${href}`} target="_blank" className="flex justify-center gap-2 p-5">
                <FaFilePdf className="text-white text-[20px]" />
                <p className="text-white">View Full PDF</p>
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className=" font-medium mb-1">Unduh PDF</p>
            <div className="bg-[#0F7ABF] rounded-lg w-50">
              <a href={`/file-pdf/${href}`} download className="flex items-center justify-center gap-2 p-5">
                <FaDownload className="text-white text-[20px]" />
                <p className="text-white">Download File</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewPdf;
