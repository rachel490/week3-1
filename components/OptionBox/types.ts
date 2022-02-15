interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

export interface OptionBoxProps {
  options: Option[];
  originalPrice: number;
  onSelect: () => void;
}
