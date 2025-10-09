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
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/BlockTitleColors.js' {
  export function BlockTitleColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/LinkClasses.js' {
  export function LinkClasses(
    props: Record<string, any>,
    config: { textColor: string; needsTouchRipple: boolean }
  ): Record<string, any>;
}

declare module '../../shared/colors/LinkColors.js' {
  export function LinkColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/ListClasses.js' {
  export function ListClasses(
    props: Record<string, any>,
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/ListColors.js' {
  export function ListColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/ListItemClasses.js' {
  export function ListItemClasses(
    props: Record<string, any>,
    colors: Record<string, any>,
    context: Record<string, any>,
    baseClassName?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/ListItemColors.js' {
  export function ListItemColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/NavbarClasses.js' {
  export function NavbarClasses(
    props: Record<string, any>,
    colors: Record<string, any>,
    className?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/NavbarColors.js' {
  export function NavbarColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/PageClasses.js' {
  export function PageClasses(
    props: Record<string, any>,
    colors: Record<string, any>,
    className?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/PageColors.js' {
  export function PageColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/RadioClasses.js' {
  export function RadioClasses(
    props: Record<string, any>,
    colors: Record<string, any>,
    darkClasses: (className: string) => string,
    className?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/RadioColors.js' {
  export function RadioColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/ToggleClasses.js' {
  export function ToggleClasses(
    props: Record<string, any>,
    colors: Record<string, any>,
    darkClasses: (className: string) => string,
    className?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/ToggleColors.js' {
  export function ToggleColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
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

declare module '../../shared/classes/ActionsClasses.js' {
  export function ActionsClasses(): Record<string, any>;
}

declare module '../../shared/classes/ActionsButtonClasses.js' {
  export function ActionsButtonClasses(
    props: Record<string, any>,
    colors: Record<string, any>,
    darkClasses: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/colors/ActionsButtonColors.js' {
  export function ActionsButtonColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/ActionsGroupClasses.js' {
  export function ActionsGroupClasses(
    props: Record<string, any>,
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/ActionsGroupColors.js' {
  export function ActionsGroupColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/ActionsLabelClasses.js' {
  export function ActionsLabelClasses(
    props: Record<string, any>,
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/ActionsLabelColors.js' {
  export function ActionsLabelColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/BlockFooterClasses.js' {
  export function BlockFooterClasses(
    props: Record<string, any>,
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/BlockFooterColors.js' {
  export function BlockFooterColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/BlockHeaderClasses.js' {
  export function BlockHeaderClasses(
    props: Record<string, any>,
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/BlockHeaderColors.js' {
  export function BlockHeaderColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/BreadcrumbsClasses.js' {
  export function BreadcrumbsClasses(
    props: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/classes/BreadcrumbsCollapsedClasses.js' {
  export function BreadcrumbsCollapsedClasses(
    props: Record<string, any>,
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/BreadcrumbsCollapsedColors.js' {
  export function BreadcrumbsCollapsedColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/BreadcrumbsItemClasses.js' {
  export function BreadcrumbsItemClasses(
    props: Record<string, any>,
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/BreadcrumbsItemColors.js' {
  export function BreadcrumbsItemColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/BreadcrumbsSeparatorClasses.js' {
  export function BreadcrumbsSeparatorClasses(
    props: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/BreadcrumbsColors.js' {
  export function BreadcrumbsColors(
    colors?: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/classes/CardClasses.js' {
  export function CardClasses(
    props: Record<string, any>,
    colors: Record<string, any>,
    baseClassName?: string
  ): Record<string, any>;
}

declare module '../../shared/colors/CardColors.js' {
  export function CardColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/CheckboxClasses.js' {
  export function CheckboxClasses(
    props: Record<string, any>,
    colors: Record<string, any>,
    darkClasses: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/colors/CheckboxColors.js' {
  export function CheckboxColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}

declare module '../../shared/classes/ChipClasses.js' {
  export function ChipClasses(
    props: Record<string, any>,
    colors: Record<string, any>
  ): Record<string, any>;
}

declare module '../../shared/colors/ChipColors.js' {
  export function ChipColors(
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ): Record<string, any>;
}
