import React, { createContext, useContext, useState, useReducer } from 'react';
import { CtxTypes, DetailAction, DetailState } from './Types';

const ctx = createContext<CtxTypes | null>(null);
export const useCtx = () => useContext(ctx);

const detailReducer = (state: DetailState, action: DetailAction): DetailState => {
  console.log('s', state.isActive);
  switch (action.type) {
    case 'TOGGLE':
      return { ...action.value };
    default:
      return state;
  }
};

const initialDetail: DetailState = {
  url: '',
  isActive: false,
  descr: '',
  alt_descr: '',
  likes: null,
};

interface Props {
  children: any;
}

const Context: React.FC<Props> = ({ children }) => {
  // const [detailIsActive, setDetailIsActive] = useState(false);
  const [detailState, dispatchDetail] = useReducer(detailReducer, initialDetail);

  const value: CtxTypes = { imgDetail: detailState, dispatchImgDetail: dispatchDetail };
  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};

export default Context;
