import { useRef } from 'react';
import { Param } from '../Types';

type Props = {
  setParam: React.Dispatch<React.SetStateAction<Param>>;
};

const SearchBar: React.FC<Props> = ({ setParam }) => {
  const queryRef = useRef<HTMLInputElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);
  const orderRef = useRef<HTMLSelectElement>(null);
  const orientRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParam({
      query: queryRef.current?.value || '',
      amount: amountRef.current?.value || '10',
      orderBy: orderRef.current?.value || 'relevant',
      orientation: orientRef.current?.value || '',
    });
  };

  return (
    <section className='text-center w-full bg-blue-200 py-4 max-w-[40rem] rounded-sm mx-auto md:py-6 mt-[min(5vw,2rem)]'>
      <form onSubmit={handleSubmit} className='flex items-center w-11/12 max-w-[20rem] mx-auto'>
        <input
          ref={queryRef}
          placeholder='sour peanut'
          className='focus:border-gray-800 box-border focus:border-2 mx-auto rounded-sm w-11/12 max-w-[18rem] px-2 outline-none sm:h-8'
        />
        <input
          className='bg-gray-800  text-white px-3 py-1'
          type='submit'
          value='browse'
        />
      </form>
      <div className='flex justify-evenly mt-4'>
        <div className='flex items-center gap-2'>
          <label className=''>amount</label>
          <input defaultValue='10' ref={amountRef} className='max-w-[5rem] pl-2' type='number' />
        </div>
        <div className='flex items-center gap-2'>
          <label>order by</label>
          <select ref={orderRef}>
            <option>relevant</option>
            <option>latest</option>
          </select>
        </div>
        <div className='flex items-center gap-2'>
          <label>orientation</label>
          <select ref={orientRef}>
            <option>all</option>
            <option>landscape</option>
            <option>potrait</option>
            <option>squarish</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
