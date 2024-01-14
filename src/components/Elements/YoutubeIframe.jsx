const YoutubeIframe = (props) => {
  const { src } = props;
  return (
    <>
      <div>
        <iframe
          className=" rounded-md overflow-hidden w-[300px] h-[169px] sm:w-[420px] sm:h-[236px] md:w-[460px] md:h-[259px] lg:w-[614px] lg:h-[345px]"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </>
  );
};

export default YoutubeIframe;
