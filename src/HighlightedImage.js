import React, { useRef, useState } from "react";

const HighlightedImage = ({ boundingBoxes, highlightColor }) => {
  const [imageUrl, setImageUrl] = useState("");
  const canvasRef = useRef(null);

  const handleImageLoad = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      // Draw bounding boxes with highlighted color
      ctx.strokeStyle = highlightColor || "red";
      ctx.fillStyle = highlightColor || "red";
      ctx.lineWidth = 2;
      boundingBoxes.forEach((box) => {
        ctx.beginPath();
        ctx.moveTo(box[0], box[1]);
        for (let i = 2; i < box.length; i += 2) {
          ctx.lineTo(box[i], box[i + 1]);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.globalAlpha = 0.3; // Set transparency for fill
        ctx.fill();
        ctx.globalAlpha = 1.0; // Reset transparency for strokes
      });
    };

    img.src = imageUrl;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageUrl && (
        <div style={{ position: "relative" }}>
          <img src={imageUrl} alt="Uploaded" onLoad={handleImageLoad} />
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HighlightedImage;
