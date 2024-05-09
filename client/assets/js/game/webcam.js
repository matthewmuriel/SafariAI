const video = document.getElementById('video');

// Create a webcam capture
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    video.srcObject = stream;
    video.play();
  });