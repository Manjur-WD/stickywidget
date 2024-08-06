import React from "react";
import StickyWidget from "./pages/StickyWidget";
import { Route, Routes } from "react-router-dom";
import PickStickyNotes from "./pages/PickStickyNotes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StickyWidget />} />
        <Route path="/stickyNotes" element={<PickStickyNotes />} />
      </Routes>
    </>
  );
};

export default App;
