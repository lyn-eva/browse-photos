import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <section className='text-center w-full bg-blue-200 py-4 max-w-[40rem] rounded-sm mx-auto md:py-6 mt-[min(5vw,2rem)]'>
      <label>browse photos </label>
      <input className='shadow-md foucs:outline-none block mx-auto mt-4 rounded-sm w-11/12 max-w-[18rem] px-2 outline-none sm:h-8'/>
    </section>
  );
};

export default SearchBar;
