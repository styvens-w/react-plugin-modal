import React, { useState } from "react";
import Modal from "../lib/components/Modal";

function App() {
  const messageModal = "Exemple";
  const bgColor = "white";
  const textColor = "#96ab49";
  const btColor = "#96ab49";
  const btTextColor = "white";
  const paramsModal = { bgColor: bgColor, textColor: textColor, btColor: btColor, btTextColor: btTextColor, link: "" };
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
