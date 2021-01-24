import React, { useState } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { PhotoModal } from './photos-modal';
import './styles.css'

export const PhotosList = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

const photos = useFetchPhotos();

  return (
    <>
    <div className="photos-list">
      {photos &&
        photos.map((photo) => {
          const { id, download_url, author } = photo;
          return (
            <img
              key={id}
              src={download_url}
              alt={author}
              width={500}
              onClick={() => setSelectedPhoto(photo)}
            />
          );
        })}
    </div>
    {
        selectedPhoto &&  <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}/> 
    }
    </>
  );
};
