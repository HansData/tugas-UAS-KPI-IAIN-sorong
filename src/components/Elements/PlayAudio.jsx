import ReactAudioPlayer from 'react-audio-player';

const PlayAudio = (props) => {
  const { src, nama } = props;
  return (
    <>
      <div className="w-full bg-slate-100">
        <div className="p-5">
          <p className=" font-medium text-lg mb-2 font-serif">{src} :</p>
          <video width="350" height="199" controls>
            <source src={`/audio-file/${src}`} type="video/mp4" />
          </video>
        </div>
        <h1 className="font-semibold  bg-slate-200 text-center p-5">{nama}</h1>
      </div>
    </>
  );
};

export default PlayAudio;
