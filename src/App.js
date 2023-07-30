import React from "react";
import HighlightedImage from "./HighlightedImage";

const App = () => {
  const boundingBoxes = [
    [7, 1001, 2812, 1001, 2812, 1032, 7, 1032],
    [6, 1056, 2435, 1056, 2435, 1088, 6, 1088],
    [6, 1113, 2051, 1113, 2051, 1143, 6, 1143],
    [7, 1169, 2038, 1169, 2038, 1200, 7, 1200],
    [9, 1225, 2604, 1225, 2604, 1257, 9, 1257],
    [9, 1281, 114, 1281, 114, 1311, 9, 1311],
    [10, 1337, 224, 1337, 224, 1367, 10, 1367],
    [8, 1394, 181, 1394, 181, 1421, 8, 1421],
    [5, 1421, 356, 1421, 356, 1452, 5, 1452]
  ];

  return (
    <HighlightedImage boundingBoxes={boundingBoxes} highlightColor="yellow" />
  );
};

export default App;
