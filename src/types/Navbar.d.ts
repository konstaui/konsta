interface Props {
  component?: string;
  colors?: object;

  bgClassName?: string;
  innerClassName?: string;
  leftClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  rightClassName?: string;
  subnavbarClassName?: string;

  translucent?: boolean;
  hairlines?: boolean;

  left?: string | number | React.ReactNode;
  title?: string | number | React.ReactNode;
  subtitle?: string | number | React.ReactNode;
  right?: string | number | React.ReactNode;
  subnavbar?: string | number | React.ReactNode;
}
