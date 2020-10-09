import React from "react";
import { VideoWrapper } from "./VideoPlayer.styled";

interface Props {
  url: string;
}

const VideoPlayer = ({ url, ...props }: Props) => {
  return (
    <VideoWrapper controls autoPlay loop muted playsInline>
      <source src={url} />
      <source src="https://sample-videos.com/video312/mp4/480/big_buck_bunny_480p_1mb.mp4" />
    </VideoWrapper>
  );
};

export default VideoPlayer;
