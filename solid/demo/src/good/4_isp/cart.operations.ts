export type AccountOperation = {
  changeDefaultCarrier: (carrier: string) => void;
};

export type CartOperation = {
  applyDiscount: (coupon: string) => void;
  changeCarrier: (carrier: string) => void;
};
