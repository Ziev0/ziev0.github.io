let currentStream; // Store the current media stream
let useFrontCamera = true; // Track whether to use the front or back camera

// Load the model and start the video stream when the page loads
async function main() {
  const model = await cocoSsd.load();
  const webcamElement = document.getElementById("webcam");
  const canvasElement = document.getElementById("canvas");
  const canvasCtx = canvasElement.getContext("2d");

  // Initialize the webcam
  await startWebcam(webcamElement);

  // Event listener for the switch camera button
  document.getElementById("switch-camera").addEventListener("click", async () => {
    useFrontCamera = !useFrontCamera; // Toggle camera
    await startWebcam(webcamElement); // Restart webcam with the new camera
  });

  webcamElement.addEventListener("loadeddata", () => detectFrame(model, webcamElement, canvasElement, canvasCtx));
}

// Start the webcam with the specified camera
async function startWebcam(webcamElement) {
  if (currentStream) {
    currentStream.getTracks().forEach(track => track.stop()); // Stop the current stream if it exists
  }

  const constraints = {
    video: {
      facingMode: useFrontCamera ? "user" : "environment" // Use front or back camera
    }
  };

  currentStream = await navigator.mediaDevices.getUserMedia(constraints);
  webcamElement.srcObject = currentStream;
}

// Perform object detection and draw bounding boxes
async function detectFrame(model, video, canvas, ctx) {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const predictions = await model.detect(video);

  // Clear the canvas before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the predictions
  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction.bbox;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.stroke();
    ctx.font = "16px Arial";
    ctx.fillText(
      `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
      x,
      y > 10 ? y - 5 : 10
    );
  });

  // Request the next frame to keep the loop running
  requestAnimationFrame(() => detectFrame(model, video, canvas, ctx));
}

// Start the main function
main();

