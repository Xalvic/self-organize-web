import React, { useState, useRef } from "react";
//import Measure from 'react-measure';
import { useUserMedia } from "../Hooks/user-media";
import { useCardRatio } from "../Hooks/view-ratio";
import { useOffsets } from "../Hooks/offsets";
import './camera.scss';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" }
};

const Camera = ({ onCapture, onClear }: any) => {
  const canvasRef: any = useRef();
  const videoRef: any = useRef();

  const [container, setContainer] = useState({ width: 200, height: 200 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  );

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {

    videoRef.current.srcObject = mediaStream;

    console.log(videoRef);
  }

  function handleResize(contentRect: any) {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio)
    });
  }

  function handleCanPlay() {
    //calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleCapture() {
    const context = canvasRef.current.getContext("2d");

    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height
    );

    canvasRef.current.toBlob((blob: any) => onCapture(blob), "image/jpeg", 1);
    setIsCanvasEmpty(false);
    setIsFlashing(true);
  }

  function handleClear() {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsCanvasEmpty(true);
    onClear();
  }

  if (!mediaStream) {
    return null;
  }

  return (
    <div className="camera-container">

      Hellooo FRom Cameraaa

        <div className="wrapper">
asdasd
        <div className="container">
zxczxvzvv
          <video
            className="video"
            width="320"
            height="240"
            ref={videoRef}
            // hidden={!isVideoPlaying}
            // hidden={!isVideoPlaying}
            // onCanPlay={handleCanPlay}
            autoPlay
            playsInline
            muted
            src="">

            </video>

            <div className="overlay" hidden={!isVideoPlaying}></div>

            <canvas
            className="canvas"
            ref={canvasRef}
            width='200'
            height='200'
            ></canvas>

            {/* <button onClick={() => setIsVideoPlaying(!isVideoPlaying)}>Start</button> */}

        </div>

          {isVideoPlaying && (
            <button className="button" onClick={isCanvasEmpty ? handleCapture : handleClear}>
              {isCanvasEmpty ? "Take a picture" : "Take another picture"}
            </button>
          )}

        </div>

    </div>

  );
}

export default Camera;