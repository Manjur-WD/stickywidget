import React from "react";
import Header from "../components/Header";
import StickyNotesList from "../components/StickyNotesList";
import Sidebar from "../components/Sidebar";

const StickyWidget = () => {
  return (
    <>
      <Header />
      <main>
        <section className="stickyWidgetWrapper pt-0 p-4">
          <div className="row">
            <div className="sidebarArea col-md-3">
              <Sidebar />
            </div>
            <div className="stickyNotesArea col-md-9">
              <StickyNotesList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StickyWidget;
