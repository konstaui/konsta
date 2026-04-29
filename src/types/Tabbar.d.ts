import { Props as ToolbarProps } from './Toolbar';

interface Props extends ToolbarProps {
  /**
   * Enables Tabbar with labels
   *
   * @default false
   */
  labels?: boolean;

  /**
   * Enables Tabbar with icons
   *
   * @default false
   */
  icons?: boolean;
}
