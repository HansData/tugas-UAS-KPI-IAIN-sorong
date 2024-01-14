import ReactAudioPlayer from 'react-audio-player';

const PlayAudio = (props) => {
  const { src } = props;
  return (
    <>
      <div className="w-full mb-5">
        <p className=" font-medium text-lg mb-2 font-serif">{src} :</p>
        <ReactAudioPlayer src={`/audio-file/${src}`} link controls />
      </div>
    </>
  );
};

export default PlayAudio;
