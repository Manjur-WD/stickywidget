import React, { useRef, useState } from "react";
import { GiFountainPen } from "react-icons/gi";
import { TiPin } from "react-icons/ti";
import logo from "../assets/logo.png";
import { LuFilePlus2 } from "react-icons/lu";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const PickStickyNotes = () => {
  const [stickyNoteData, setStickyNoteData] = useState({
    title: "",
    description: "",
    bgColor: "",
    completed: false,
  });
  const [selectedColor, setSelectedColor] = useState("black"); // Default color
  const navigate = useNavigate();

  const modalRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/stickyNotes",
        stickyNoteData
      );
      if (response.status >= 200 && response.status < 300) {
        console.log(stickyNoteData);
        toast.success("Pinned Successfully");
        setStickyNoteData({ title: "", description: "", completed: false }); // Clear form after submission
        // Close the modal by removing 'show' class and setting display to none
        if (modalRef.current) {
          modalRef.current.classList.remove("show");
          modalRef.current.style.display = "none";
          document.querySelector("body").classList.remove("modal-open");
          document.querySelector(".modal-backdrop").remove();
        }

        navigate("/");
      }
    } catch (error) {
      toast.error("Failed to pin note");
      console.error("Error posting sticky note data:", error);
    }
  };

  const openModal = (color) => {
    setSelectedColor(color); // Set the selected color
    if (modalRef.current) {
      modalRef.current.style.display = "block";
      modalRef.current.classList.add("show");
      document.querySelector("body").classList.add("modal-open");
      const backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop fade show";
      document.body.appendChild(backdrop);
      setStickyNoteData({ ...stickyNoteData, bgColor: color });
      
      
    }
  };

  return (
    <>
      <section className="pick-notes vh-100">
        <div className="row position-relative">
          <div className="col-md-12">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-md-12">
            <div className="notes d-flex flex-wrap gap-3 justify-content-center px-5 mt-5">
              <div
                className="pick-note-color shadow-lg"
                onClick={() => openModal("#f8e002")} // Pass the color on click
              >
                <a
                  href="#"
                  className="text-decoration-none text-dark d-inline-block font-playpen"
                >
                  <LuFilePlus2 /> <br />
                  Pick a note
                </a>
              </div>
              <div
                className="pick-note-color shadow-lg"
                onClick={() => openModal("#f3a7dc")}
              >
                <a
                  href="#"
                  className="text-decoration-none text-dark d-inline-block font-playpen"
                >
                  <LuFilePlus2 /> <br />
                  Pick a note
                </a>
              </div>
              <div
                className="pick-note-color shadow-lg"
                onClick={() => openModal("#02f0f8")}
              >
                <a
                  href="#"
                  className="text-decoration-none text-dark d-inline-block font-playpen"
                >
                  <LuFilePlus2 /> <br />
                  Pick a note
                </a>
              </div>
              <div
                className="pick-note-color shadow-lg"
                onClick={() => openModal("#02f8a6")}
              >
                <a
                  href="#"
                  className="text-decoration-none text-dark d-inline-block font-playpen"
                >
                  <LuFilePlus2 /> <br />
                  Pick a note
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL SECTION FOR STICKY NOTES */}
      <div
        className="modal fade font-playpen"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef} // Set ref here
        style={{ display: "none" }} // Set initial display style
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <GiFountainPen />
                Write Something from your mind
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  if (modalRef.current) {
                    modalRef.current.classList.remove("show");
                    modalRef.current.style.display = "none";
                    document
                      .querySelector("body")
                      .classList.remove("modal-open");
                    document.querySelector(".modal-backdrop").remove();
                  }
                }} // Close the modal
                aria-label="Close"
              />
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="modal-body">
                <div
                  className="sticky-page"
                  style={{ backgroundColor: selectedColor }} // Set background color based on selected color
                >
                  <input
                    type="text"
                    className="form-control fs-4 bg-transparent border-0 shadow-none"
                    placeholder="ADD TITLE ....."
                    value={stickyNoteData.title}
                    onChange={(e) =>
                      setStickyNoteData({
                        ...stickyNoteData,
                        title: e.target.value,
                      })
                    }
                  />
                  <textarea
                    name="sticky-note-desc"
                    rows={10}
                    className="form-control bg-transparent border-0 shadow-none"
                    placeholder="ADD DESCRIPTION ....."
                    value={stickyNoteData.description}
                    onChange={(e) =>
                      setStickyNoteData({
                        ...stickyNoteData,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-warning">
                  <TiPin /> Pin It
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PickStickyNotes;
