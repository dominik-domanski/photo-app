import React from 'react';
const photosUrl = "https://picsum.photos/v2/list";

export function useFetchPhotos() {
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch(photosUrl);
          response = await response.json();
          setPhotos(response);
        }
    
        fetchMyAPI();
    }, [setPhotos])

    return photos;
}