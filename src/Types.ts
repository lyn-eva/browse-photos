export type DetailState = {
  isActive?: boolean;
  url?: string;
  descr?: string;
  alt_descr?: string;
  likes?: number | null;
  name?: string;
  username?: string;
  download_link?: string;
  unsplash_link?: string;
  photo_link?: string;
  id?: string;
};

export type API_Types = {
  urls: { thumb: string };
  description: string;
  alt_description: string;
  likes: number;
  user: { name: string; username: string, links: {html: string} };
  links: { download: string; html: string };
  id: string;
};

export type DetailAction = {
  type: string;
  value: DetailState;
};

export type CtxTypes = {
  imgDetail: DetailState;
  dispatchImgDetail: React.Dispatch<DetailAction>;
  addToLocalStorage: () => void;
  removeFromLocalStorage: (id: string) => void;
};

export type Param = {
  query: string,
  amount: string,
  orderBy: string,
  orientation: string

}