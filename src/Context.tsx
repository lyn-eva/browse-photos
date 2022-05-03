import React, { createContext, useContext, useState, useReducer } from 'react';
import { CtxTypes, DetailAction, DetailState } from './Types';

const ctx = createContext<CtxTypes | null>(null);
export const useCtx = () => useContext(ctx);

const detailReducer = (state: DetailState, action: DetailAction): DetailState => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...action.value };
    default:
      return state;
  }
};

interface Props {
  children: any;
}

const Context: React.FC<Props> = ({ children }) => {
  const [detailState, dispatchDetail] = useReducer(detailReducer, {} as DetailState);

  const addToLocalStorage = (id: string, url: string) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    const value = favorites.length ? [...favorites, {id, url}] : [{id, url}];
    localStorage.setItem('favorites', JSON.stringify(value));
  }
  
  const removeFromLocalStorage = (id: string) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    const value = favorites.filter((obj: {url: string, id: string}) => obj.id === id)
    localStorage.setItem('favorites', JSON.stringify(value));
  }


  const value: CtxTypes = { imgDetail: detailState, dispatchImgDetail: dispatchDetail, addToLocalStorage,removeFromLocalStorage };
  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};

export default Context;
