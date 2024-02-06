const EmbedSpotify = ({ src }) => {
  return (
    <iframe
      className="rounded-md"
      src={src}
      width="100%"
      height="352"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};
export default EmbedSpotify;
