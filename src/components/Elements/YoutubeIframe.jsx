const YoutubeIframe = (props) => {
  const { src, nama } = props;
  return (
    <>
      <div className="bg-white rounded-md overflow-hidden">
        <iframe
          className=" rounded-md overflow-hidden w-[350px] h-[199px]"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        <h1 className="font-semibold p-5  text-center">{nama}</h1>
      </div>
    </>
  );
};

export default YoutubeIframe;
