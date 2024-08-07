import React from "react";
import stickyPin from "../assets/pngimg.com_-_pin_PNG64-removebg-preview.png";
import completedImage from "../assets/completed.png";
import { SiTicktick } from "react-icons/si";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useContext } from "react";
import { RenderCheck } from "../context/RenderContext";

const StickyNote = ({ note }) => {
  const { isRendered, setRender } = useContext(RenderCheck);

  const markAsComplete = async (note) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/stickyNotes/${note.id}`,
        {
          ...note,
          completed: true,
        }
      );
      if (response.status >= 200 && response.status < 300) {
        setRender(!isRendered);
        toast.success("Note marked as completed");
      }
    } catch (error) {
      toast.error("Failed to update note");
      console.error("Error updating sticky note data:", error);
    }
  };

  const handleDelete = async (note) => {
    try {
      const confirmation = confirm("Are you sure to delete this note?");
      if (confirmation) {
        const response = await axios.delete(
          `http://localhost:3001/stickyNotes/${note.id}`
        );
        if (response.status >= 200 && response.status < 300) {
          setRender(!isRendered);
        }
      }
    } catch (error) {
      toast.error("Failed to Delete");
      console.error("Error deleting sticky note data:", error);
    }
  };

  return (
    <>
      <div
        className="sticky-note position-relative font-playpen p-3 fw-bolder"
        style={{ backgroundColor: note.bgColor }}
      >
        {note.completed ? (
          <img
            src={completedImage}
            alt="image"
            className="img-fluid completed"
          />
        ) : null}
        <img
          src={stickyPin}
          alt="stickypinimage"
          width={60}
          className="sticky-pin"
        />
        <p className="sticky-note-title fs-5 font-bold pt-4">{note.title}</p>
        <p className="sticky-note-description font-calli">{note.description}</p>
        <div className="action-btns text-center">
          {!note.completed ? (
            <button
              className="mark-completed w-100 mb-2 bg-success text-white border-0 p-2"
              onClick={() => {
                markAsComplete(note);
              }}
            >
              <SiTicktick /> Mark as completed
            </button>
          ) : null}
          <button
            className="mark-completed w-100 bg-danger text-white border-0 p-2"
            onClick={() => {
              handleDelete(note);
            }}
          >
            <FaTrash /> Remove Note
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default StickyNote;
