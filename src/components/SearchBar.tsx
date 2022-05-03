import { useEffect, useState } from 'react';
import { API_Types } from '../Types';

type Props = {
  setPhotos: React.Dispatch<React.SetStateAction<never[]>>;
};

const SearchBar: React.FC<Props> = ({ setPhotos }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;
    (async () => {
      const raw = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`
      );
      const data = await raw.json();
      const filteredData = data.results.map((img: API_Types) => ({
        url: img.urls.regular,
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
  }, [query, setPhotos]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(((e.target as HTMLFormElement)[0] as HTMLInputElement).value);
  };

  return (
    <section className='text-center w-full bg-blue-200 py-4 max-w-[40rem] rounded-sm mx-auto md:py-6 mt-[min(5vw,2rem)]'>
      <form onSubmit={handleSubmit} className='flex items-center w-11/12 max-w-[20rem] mx-auto'>
        <input placeholder='sour peanut' className='focus:border-gray-800 box-border focus:border-2 mx-auto rounded-sm w-11/12 max-w-[18rem] px-2 outline-none sm:h-8' />
        <input className='bg-gray-800  text-white px-3 py-1' type='submit' value='browse' />
      </form>
    </section>
  );
};

export default SearchBar;
