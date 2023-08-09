import React, { useState } from "react";
import Modal from "../lib/components/Modal";

function App() {
  const messageModal = "Exemple";
  const bgColour = "white";
  const textColour = "#96ab49";
  const btColour = "#96ab49";
  const btTextColour = "white";
  const paramsModal = { bgColour: bgColour, textColour: textColour, btColour: btColour, btTextColour: btTextColour, link: "" };
  const [openModal, setOpenModal] = useState(true);

  return (
      <div style={{ width: 640, margin: "15px auto" }}>
        <Modal
            display={openModal}
            setDisplay={setOpenModal}
            message={messageModal}
            params={paramsModal}
        />
      </div>
  );
}

export default App;
