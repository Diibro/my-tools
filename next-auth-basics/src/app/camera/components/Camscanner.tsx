
import { useEffect, useRef, useState } from "react";

const CamScreen = () => {
     const videoRef = useRef<HTMLVideoElement | null >(null);
     const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
     const canvasRef = useRef<HTMLCanvasElement | null>(null);
     const [capturedImage, setCapturedImage] = useState<string | null>(null);
     
     // const sendVideoData = (data: string) => {
     //      socket.emit("videoData", data);
     // }

     const takePicture = () => {
          if(videoRef.current && canvasRef.current) {
               const video = videoRef.current;
               const canvas = canvasRef.current;
               canvas.width = video.videoWidth
               canvas.height = video.videoHeight

               const context = canvas.getContext('2d');

               if(context) {
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);

                    const imageDataUrl = canvas.toDataURL("image/png");
                    console.log(imageDataUrl);
                    setCapturedImage(imageDataUrl);
               }
          }
     }

     useEffect(() => {
          const enableVideoStream = async () => {
               try {
                    const stream = await navigator.mediaDevices.getUserMedia({video: true});
                    setMediaStream(stream);
               } catch (error) {
                    console.log(error);
               }
          }
          enableVideoStream();
     },[]);

     useEffect(() => {
          if(videoRef.current && mediaStream) {
               videoRef.current.srcObject = mediaStream;
          }
     },[videoRef, mediaStream])

     useEffect(() => {
          return () => {
               if(mediaStream) {
                    mediaStream.getTracks().forEach(track => {
                         track.stop();
                    })
               }
          }
     },[mediaStream]);
     return (
          <div className="w-full h-auto flex flex-col justify-center items-center gap-[10px] ">
               <video className="w-[80%] h-auto m-auto" ref={videoRef} autoPlay={true} />
               <div className="w-[80%] p-[10px] grid grid-cols-4 gap-[20px] " >
                    <button onClick={takePicture}  className="text-white bg-blue-500 rounded-[5px] p-[10px] " >Take Picture</button>
               </div>
               <canvas ref={canvasRef} className="hidden" />
               <div>
                    {capturedImage && 
                         // eslint-disable-next-line @next/next/no-img-element
                         <img src={capturedImage} alt="capturedimage" width={400} height={300}   />
                    }
               </div>
               
          </div>
     )
}

export default CamScreen;
