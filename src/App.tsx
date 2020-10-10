import React, { useState } from "react";
import "./App.css";
import Modal from "./components/common/Modal/Modal";
import VideoPlayer from "./components/common/VideoPlayer/VideoPlayer";
import ModalVideo from "./components/Modals/ModalVideo/ModalVideo";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useOnClickOutside } from "./utils/useOnClickOutside";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModalVideo, setShowModalVideo] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={toggleSidebar} />
      <Navbar onMobileMenu={toggleSidebar} />
      <ModalVideo title="Testing title" url="/videos/1.mp4" visible={showModalVideo} onClose={() => setShowModalVideo(false)}/>
      <button onClick={() => setShowModalVideo(true)}>Modal</button>
    </>
  );
}

export default App;
