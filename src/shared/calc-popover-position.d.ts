export interface PopoverPosition {
  set: boolean;
  angleTop?: string;
  angleLeft?: string;
  anglePosition?: string;
  popoverTop: string;
  popoverLeft: string;
  popoverPosition: string;
}

export declare function calcPopoverPosition(options: {
  popoverEl: HTMLElement;
  targetEl: HTMLElement | string | null;
  angleEl?: HTMLElement | null;
  needsAngle?: boolean;
  targetX?: number;
  targetY?: number;
  targetWidth?: number;
  targetHeight?: number;
  theme: string;
}): PopoverPosition;
