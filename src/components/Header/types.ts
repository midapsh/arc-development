export interface IProps {
  /**
   * Injected by the documentation to work in an iframe.
   */
  window?: () => Window;
  children: React.ReactElement;
}
