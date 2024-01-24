import { Link } from 'react-router-dom';
const CardArtikel = () => {
  return (
    <>
      <div className="flex gap-5 pb-5 border-b-2 border-dashed border-black/20">
        <Link to={'/artikelPage'}>
          <div className="inline-block rounded-sm w-[120px] h-[120px] bg-[url('/image/digitaltech.png')] bg-center bg-cover"></div>
        </Link>
        <div className="w-[400px] flex flex-col gap-1">
          <Link to={'/artikelPage'} className="hover:text-sky-600">
            <h1 className="font-bold text-2xl">Peran Teknologi Komunikasi dalam Transformasi Digital</h1>
          </Link>
          <p className="text-sm font-medium text-black/30">Teknologi | Januari 16, 2024</p>

          <p className="truncate  w-[400px]">
            <span className=" font-normal text-xl">Sorong</span>
            <span className="text-xl px-2">-</span>saat ini kita telah berada dalam zaman yang dimana didalam zaman tersebut, teknologi semakin canggih. seperti yang kita ketahui, teknologi dan komunikasi menjadi objek penting dalam proses
            canggihnya zaman sekarang. untuk lebih paham akan teknologi komunikasi zaman sekarang, mari kita bahas satu persatu.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardArtikel;
