const VideoPlayer = ({ videoUrl, thumbnail, alt, className, style }) => {
  return (
    <div className={`video-container ${className || ''}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={thumbnail}
        style={style}
        className="video-player"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;