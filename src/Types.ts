export type DetailValue = {
  url: string
}

export type DetailState = {
  url: string;
  isActive: boolean;
};

export type DetailAction = {
  type: string;
  value: DetailValue;
};

export type CtxTypes = {
  imgDetail: DetailState;
  dispatchImgDetail: React.Dispatch<DetailAction>;
};
