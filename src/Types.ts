// export type DetailValue = {
//   url: string
//   descr: string
//   alt_descr: string
//   likes: number|null
// }

export type DetailState = {
  url: string;
  isActive: boolean;
  descr: string
  alt_descr: string
  likes: number|null
};

export type DetailAction = {
  type: string;
  value: DetailState;
};

export type CtxTypes = {
  imgDetail: DetailState;
  dispatchImgDetail: React.Dispatch<DetailAction>;
};
