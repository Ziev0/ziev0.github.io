// Load the model and start the video stream when the page loads
async function main() {
  const model = await cocoSsd.load();
  const webcamElement = document.getElementById("webcam");
  const canvasElement = document.getElementById("canvas");
  const canvasCtx = canvasElement.getContext("2d");

  // Initialize the webcam with constraints for the back camera
  const constraints = {
    video: {
      facingMode: { exact: "environment" }, // Use the back camera
    },
  };

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        webcamElement.srcObject = stream;
        webcamElement.addEventListener("loadeddata", () => detectFrame(model, webcamElement, canvasElement, canvasCtx));
      })
      .catch((err) => console.error("Error accessing webcam:", err));
  } else {
    alert("Webcam not supported on this browser.");
  }
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
