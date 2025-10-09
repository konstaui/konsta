declare module '../../shared/classes/AppClasses.js' {
  export function AppClasses(
    props: Record<string, any>,
    theme: string,
    className?: string
  ): string;
}

declare module '../../shared/classes/BlockTitleClasses.js' {
  export function BlockTitleClasses(
    props: Record<string, any>,
    colors: Record<string, string>
  ): Record<string, string>;
}

declare module '../../shared/colors/BlockTitleColors.js' {
  export function BlockTitleColors(
    colors?: Record<string, string>,
    dark?: (className: string) => string
  ): Record<string, string>;
}

declare module '../../shared/classes/LinkClasses.js' {
  export function LinkClasses(
    props: Record<string, any>,
    config: { textColor: string; needsTouchRipple: boolean }
  ): Record<string, any>;
}

declare module '../../shared/colors/LinkColors.js' {
  export function LinkColors(
    colors?: Record<string, string>,
    dark?: (className: string) => string
  ): Record<string, string>;
}

declare module '../../shared/classes/ListClasses.js' {
  export function ListClasses(
    props: Record<string, any>,
    colors: Record<string, string>
  ): Record<string, any>;
}

declare module '../../shared/colors/ListColors.js' {
  export function ListColors(
    colors?: Record<string, string>,
    dark?: (className: string) => string
  ): Record<string, string>;
}

declare module '../../shared/classes/ListItemClasses.js' {
  export function ListItemClasses(
    props: Record<string, any>,
    colors: Record<string, string>,
    context: Record<string, any>,
    baseClassName?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/ListItemColors.js' {
  export function ListItemColors(
    colors?: Record<string, string>,
    dark?: (className: string) => string
  ): Record<string, string>;
}

declare module '../../shared/classes/NavbarClasses.js' {
  export function NavbarClasses(
    props: Record<string, any>,
    colors: Record<string, string>,
    className?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/NavbarColors.js' {
  export function NavbarColors(
    colors?: Record<string, string>,
    dark?: (className: string) => string
  ): Record<string, string>;
}

declare module '../../shared/classes/PageClasses.js' {
  export function PageClasses(
    props: Record<string, any>,
    colors: Record<string, string>,
    className?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/PageColors.js' {
  export function PageColors(
    colors?: Record<string, string>,
    dark?: (className: string) => string
  ): Record<string, string>;
}

declare module '../../shared/classes/RadioClasses.js' {
  export function RadioClasses(
    props: Record<string, any>,
    colors: Record<string, string>,
    darkClasses: (className: string) => string,
    className?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/RadioColors.js' {
  export function RadioColors(
    colors?: Record<string, string>,
    dark?: (className: string) => string
  ): Record<string, string>;
}

declare module '../../shared/classes/ToggleClasses.js' {
  export function ToggleClasses(
    props: Record<string, any>,
    colors: Record<string, string>,
    darkClasses: (className: string) => string,
    className?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/ToggleColors.js' {
  export function ToggleColors(
    colors?: Record<string, string>,
    dark?: (className: string) => string
  ): Record<string, string>;
}

declare module '../../shared/calc-popover-position.js' {
  export interface PopoverPosition {
    set: boolean;
    angleTop?: string;
    angleLeft?: string;
    anglePosition?: string;
    popoverTop: string;
    popoverLeft: string;
    popoverPosition: string;
  }
  export function calcPopoverPosition(options: {
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
}
