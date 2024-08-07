import React from "react";
import StickyWidget from "./pages/StickyWidget";
import { Route, Routes } from "react-router-dom";
import PickStickyNotes from "./pages/PickStickyNotes";
import { RenderCheckProvider } from "./context/RenderContext";

const App = () => {
  return (
    <>
      <RenderCheckProvider>
        <Routes>
          <Route path="/" element={<StickyWidget />} />
          <Route path="/stickyNotes" element={<PickStickyNotes />} />
        </Routes>
      </RenderCheckProvider>
    </>
  );
};

export default App;
