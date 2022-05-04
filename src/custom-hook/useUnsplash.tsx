import { useEffect, useState } from 'react';
import { API_Types, Param } from '../Types';

function useUnsplash(param: Param) {
  const [photos, setPhotos] = useState([]);
  const {query, amount, orderBy, orientation} = param;

  console.log(param);
  useEffect(() => {
    if (!query) return;
    (async () => {
      const raw = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=${amount}&order_by=${orderBy}${orientation && orientation !== 'all' ? '&orientation='+orientation : ''}&client_id=${process.env.REACT_APP_CLIENT_ID}`
      );
      const data = await raw.json();
      const filteredData = data.results.map((img: API_Types) => ({
        url: img.urls.thumb,
        descr: img.description,
        alt_descr: img.alt_description,
        likes: img.likes,
        name: img.user.name,
        username: img.user.username,
        download_link: img.links.download,
        unsplash_link: img.links.html,
        id: img.id,
        profile_link: img.user.links.html,
      }));
      console.log(filteredData);
      setPhotos(filteredData);
    })();
  }, [param, setPhotos]);
  
  return photos;
}

export default useUnsplash;
