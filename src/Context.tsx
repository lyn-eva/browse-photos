import React, { createContext, useContext, useState, useReducer } from 'react';
import { CtxTypes, DetailAction, DetailState } from './Types';

const ctx = createContext<CtxTypes | null>(null);
export const useCtx = () => useContext(ctx);

const detailReducer = (state: DetailState, action: DetailAction): DetailState => {
  switch (action.type) {
    case 'ON':
      return { ...state, url: state.url, isActive: !state.isActive };
    case 'OFF':
      return {...state, isActive: false}
      default:
      return state;
  }
};

const initialDetail: DetailState = {
  url: '',
  isActive: false,
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
