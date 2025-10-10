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
  export const ActionsClasses: () => Record<string, any>;
}

declare module '../../shared/classes/ActionsButtonClasses.js' {
  export const ActionsButtonClasses: (
    props: Record<string, any>,
    colors: Record<string, any>,
    darkClasses: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/colors/ActionsButtonColors.js' {
  export const ActionsButtonColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/ActionsGroupClasses.js' {
  export const ActionsGroupClasses: (
    props: Record<string, any>,
    colors: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/ActionsGroupColors.js' {
  export const ActionsGroupColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/ActionsLabelClasses.js' {
  export const ActionsLabelClasses: (
    props: Record<string, any>,
    colors: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/ActionsLabelColors.js' {
  export const ActionsLabelColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/BlockFooterClasses.js' {
  export const BlockFooterClasses: (
    props: Record<string, any>,
    colors: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/BlockFooterColors.js' {
  export const BlockFooterColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/BlockHeaderClasses.js' {
  export const BlockHeaderClasses: (
    props: Record<string, any>,
    colors: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/BlockHeaderColors.js' {
  export const BlockHeaderColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/BreadcrumbsClasses.js' {
  export const BreadcrumbsClasses: (
    props: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/classes/BreadcrumbsCollapsedClasses.js' {
  export const BreadcrumbsCollapsedClasses: (
    props: Record<string, any>,
    colors: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/BreadcrumbsCollapsedColors.js' {
  export const BreadcrumbsCollapsedColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/BreadcrumbsItemClasses.js' {
  export const BreadcrumbsItemClasses: (
    props: Record<string, any>,
    colors: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/BreadcrumbsItemColors.js' {
  export const BreadcrumbsItemColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/BreadcrumbsSeparatorClasses.js' {
  export const BreadcrumbsSeparatorClasses: (
    props: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/BreadcrumbsColors.js' {
  export const BreadcrumbsColors: (
    colors?: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/classes/CardClasses.js' {
  export const CardClasses: (
    props: Record<string, any>,
    colors: Record<string, any>,
    baseClassName?: string
  ) => Record<string, any>;
}

declare module '../../shared/colors/CardColors.js' {
  export const CardColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/CheckboxClasses.js' {
  export const CheckboxClasses: (
    props: Record<string, any>,
    colors: Record<string, any>,
    darkClasses: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/colors/CheckboxColors.js' {
  export const CheckboxColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/ChipClasses.js' {
  export const ChipClasses: (
    props: Record<string, any>,
    colors: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/ChipColors.js' {
  export const ChipColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/TabbarLinkClasses.js' {
  export const TabbarLinkClasses: (
    props: Record<string, any>,
    colors: Record<string, any>
  ) => Record<string, any>;
}

declare module '../../shared/colors/TabbarLinkColors.js' {
  export const TabbarLinkColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/GlassClasses.js' {
  export const GlassClasses: (
    props: Record<string, any>,
    dark: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/ToolbarPaneClasses.js' {
  export const ToolbarPaneClasses: (
    props: Record<string, any>,
    colors: Record<string, any>,
    dark: (className: string) => string,
    baseClassName?: string
  ) => Record<string, any>;
}

declare module '../../shared/colors/ToolbarPaneColors.js' {
  export const ToolbarPaneColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}

declare module '../../shared/classes/ToolbarClasses.js' {
  export const ToolbarClasses: (
    props: Record<string, any>,
    colors: Record<string, any>,
    baseClassName?: string
  ) => Record<string, any>;
}

declare module '../../shared/colors/ToolbarColors.js' {
  export const ToolbarColors: (
    colors?: Record<string, any>,
    dark?: (className: string) => string
  ) => Record<string, any>;
}
