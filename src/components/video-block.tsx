import { FC } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface VideoBlockProps {
  videoId: string;
}

const VideoBlock: FC<VideoBlockProps> = ({ videoId }) => {
  const opts: YouTubeProps["opts"] = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoBlock;
