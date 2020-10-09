import React, { useState } from "react";
import "./App.css";
import Modal from "./components/common/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useOnClickOutside } from "./utils/useOnClickOutside";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const modalRef = useOnClickOutside<HTMLDivElement>(() => setShowModal(false));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={toggleSidebar} />
      <Navbar onMobileMenu={toggleSidebar} />
      <Modal
        visible={showModal}
        divRef={modalRef}
        onClose={() => setShowModal(false)}
      />
      <button onClick={() => setShowModal(true)}>Modal</button>
    </>
  );
}

export default App;
