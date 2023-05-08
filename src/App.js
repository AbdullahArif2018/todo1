import logo from './logo.svg';
import './App.css';
import MapTodo from './components/maptodo';
import AddTodo from './components/addtodo';
import Todos from './components/paginatedTodo';
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  return (
    <div className="App">
      <AddTodo />
      <MapTodo />
      <hr />
      <Todos />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import Webcam from 'react-webcam';
// import Measure from 'react-measure';

// function App() {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const [image, setImage] = useState('');


//   const handleMeasure = (contentRect) => {
//     console.log(contentRect.entry?.width);
//     setDimensions({
//       width: contentRect.entry?.width,
//       height: contentRect.entry?.height
//     });
//   };
//   const videoConstraints = {
//     width: 1280,
//     height: 720,
//     facingMode: "user"
//   };
//   const webcamRef = React.useRef(null);
//   const capture = React.useCallback(
//     () => {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setImage(imageSrc)
//     },

//     [webcamRef]
//   );
//   return (
//     <div>
//       <Webcam
//         audio={false}
//         height={720}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         videoConstraints={videoConstraints}
//       />
//       <button onClick={capture}>Capture photo</button>
//       <Measure onResize={handleMeasure}>
//         {({ measureRef }) => <img ref={measureRef} />}
//       </Measure>

//       <img src={image} />
//       <p>Image dimensions: {dimensions.width} x {dimensions.height}</p>
//     </div>
//   );
// }

// import React, { useState, useRef } from 'react';

// function App() {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const videoRef = useRef(null);

  // const handleCaptureClick = () => {
  //   const video = videoRef.current;

  //   // Get the video stream from the webcam
  //   navigator.mediaDevices.getUserMedia({ video: true })
  //     .then(stream => {
  //       video.srcObject = stream;
  //       video.play();

  //       // Wait for the video to play and capture an image
  //       video.onplay = () => {
  //         const canvas = document.createElement('canvas');
  //         const ctx = canvas.getContext('2d');
  //         canvas.width = video.videoWidth;
  //         canvas.height = video.videoHeight;
  //         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  //         // Measure the size of the captured image
  //         const image = new Image();
  //         image.src = canvas.toDataURL();
  //         image.onload = () => {
  //           setDimensions({ width: image.width, height: image.height });
  //           stream.getTracks()[0].stop(); // Stop the video stream
  //         };
  //       };
  //     })
  //     .catch(error => console.log(error));
  // };

//   return (
//     <div>
//       {/* <video ref={videoRef} />
//       <button onClick={handleCaptureClick}>Capture Image</button>
//       <p>Image dimensions: {dimensions.width} x {dimensions.height}</p> */}
//     </div>
//   );
// }
// export default App;