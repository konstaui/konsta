import React, { useRef } from 'react';
import { cls } from '../../shared/cls.js';
import { ListClasses } from '../../shared/classes/ListClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { ListColors } from '../../shared/colors/ListColors.js';
import { ListContext } from '../shared/ListContext.js';
import { getThemeSpecificProps } from '../shared/get-theme-specific-props.js';

const List = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    nested,
    menuList,

    dividers,
    dividersIos = true,
    dividersMaterial = false,

    inset,
    insetIos,
    insetMaterial,
    strong,
    strongIos,
    strongMaterial,
    outline,
    outlineIos,
    outlineMaterial,

    ios,
    material,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };
  const theme = useTheme();
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const {
    strong: isStrong,
    outline: isOutline,
    inset: isInset,
    dividers: hasDividers,
  } = getThemeSpecificProps(
    theme,
    {
      strong,
      outline,
      inset,
      dividers,
    },
    {
      strongIos,
      strongMaterial,
      outlineIos,
      outlineMaterial,
      insetIos,
      insetMaterial,
      dividersIos,
      dividersMaterial,
      ...props,
    }
  );

  const colors = ListColors(colorsProp, dark);

  const c = themeClasses(
    ListClasses(
      {
        ...props,
        inset: isInset,
        strong: isStrong,
        outline: isOutline,
        dividers: hasDividers,
      },
      colors
    )
  );

  const classes = cls(
    c.base,

    isInset && c.inset,

    menuList && c.menuList,

    className
  );

  return (
    <ListContext.Provider value={{ nested, dividers: hasDividers }}>
      <Component
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={classes}
        {...attrs}
      >
        <ul className={c.ul}>{children}</ul>
      </Component>
    </ListContext.Provider>
  );
};

List.displayName = 'List';

export default List;
