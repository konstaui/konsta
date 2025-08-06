import { Ref, ComponentOptionsMixin, DefineComponent } from 'vue';
// IMPORT_COMPONENTS

// PROVIDER
declare const kProvider: DefineComponent<
  {
    /**
     * App theme. If set to `'parent'` it will look for `ios` or `md` class on root `<html>` element, useful to use with parent framework like Framework7 or Ionic
     *
     * @default 'material'
     */
    theme: {
      type: StringConstructor;
      default: 'material';
    };
    /**
     * Include `dark:` variants (if dark theme is in use)
     *
     * @default false
     * */
    dark: {
      type: BooleanConstructor;
      default: false;
    };
    /**
     * Enables touch ripple effect in Material theme. Allows to globally disable touch ripple for all components
     *
     * @default true
     */
    materialTouchRipple: {
      type: BooleanConstructor;
      default: true;
    };
    /**
     * Enables touch highlight effect in iOS theme. Allows to globally disable touch highlight for all components
     *
     * @default true
     */
    iosHoverHighlight: {
      type: BooleanConstructor;
      default: true;
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {}
>;

// HELPERS
declare const useTheme: () => Ref<'material' | 'ios'>;

// EXPORT_COMPONENTS
export { useTheme, kProvider, kProvider as Provider };
