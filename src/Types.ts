export type DetailState = {
  url?: string;
  descr?: string
  alt_descr?: string
  likes?: number|null
  name?: string
  username?: string
  download_link?: string
  unsplash_link?: string,
  photo_link?: string
  id?: string
};

export type DetailAction = {
  type: string;
  value: DetailState;
};

export type CtxTypes = {
  imgDetail: DetailState;
  dispatchImgDetail: React.Dispatch<DetailAction>;
  addToLocalStorage: (id: string, url: string) => void;
  removeFromLocalStorage: (id: string) => void;
};
