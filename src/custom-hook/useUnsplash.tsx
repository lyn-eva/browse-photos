import { useEffect, useState } from 'react';
import { API_Types, Param } from '../Types';

function useUnsplash(param: Param) {
  const [photos, setPhotos] = useState(null);
  
  useEffect(() => {
    if (!param.query) return;
    const {query, amount, orderBy, orientation} = param;
    (async () => {
      const raw = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=${amount}&order_by=${orderBy}${orientation && orientation !== 'all' ? '&orientation='+orientation : ''}&client_id=${process.env.REACT_APP_CLIENT_ID}`
      );
      const data = await raw.json();
      const filteredData = data.results.map((img: API_Types) => ({
        width: img.width,
        height: img.height,
        regular: img.urls.regular,
        small: img.urls.small,
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
      setPhotos(filteredData);
    })();
  }, [param, setPhotos]);
  
  return photos;
}

export default useUnsplash;
