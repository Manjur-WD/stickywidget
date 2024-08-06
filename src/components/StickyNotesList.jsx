import React, { useEffect, useState } from "react";
import StickyNote from "./StickyNote";
import axios from "axios";

const StickyNotesList = () => {
  const [stickyNotes, setStickyNotes] = useState([]);

  const loadStickyNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/stickyNotes");
      setStickyNotes(response.data); // Directly set the data from the response
    } catch (error) {
      console.error("Error loading sticky notes:", error);
    }
  };

  useEffect(() => {
    loadStickyNotes();
  }, []);

  return (
    <>
      <div className="container-fluid sticky-board bg-white shadow">
        <div className="row py-3">
          {stickyNotes.length === 0 ? (
            <div className="col-12">
              <p className="fs-1 font-playpen text-white fw-bolder" style={{fontSize: "100px"}}>No sticky notes available</p>
            </div>
          ) : (
            stickyNotes.map((note) => (
              <div className="col-xl-4 mb-4" key={note.id}>
                <StickyNote note={note} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default StickyNotesList;
