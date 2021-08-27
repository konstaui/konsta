interface Props {
  component?: string;
  colors?: object;

  size?: string;
  opened?: boolean;
  backdrop?: boolean;
  onBackdropClick?: (e: any) => void;
  target?: React.Ref<HTMLElement> | HTMLElement | string;
  targetX?: number;
  targetY?: number;
  targetWidth?: number;
  targetHeight?: number;
}
