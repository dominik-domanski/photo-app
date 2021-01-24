/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import { useOutsideClick } from "../hooks/useClickOutside";

import "./styles.css";

export const PhotoModal = ({ photo, onClose }) => {
  const imageRef = useRef();
  useOutsideClick(imageRef, onClose);

  return (
    <>
    <div className="photo-modal">
      <span className="photo-card-delete" onClick={onClose}>
        X
      </span>
      <div className="photo-wrapper" ref={imageRef}>
        <img
          className="photo-image"
          src={photo.download_url}
        />
      </div>
    </div>
    <div className="photo-modal-overlay"></div>
    </>
  );
};
