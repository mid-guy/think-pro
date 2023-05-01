import { ReactNode, forwardRef } from "react";

const withPrefixComponent = ({ displayName }: { displayName: string }) =>
  function <T>(Component: React.ComponentType<T>, prefixProps?: T) {
    const WithStyles = forwardRef(function WithStyles<
      P extends { children?: ReactNode } & T
    >(props: P, ref: React.Ref<HTMLElement>) {
      if (process.env.NODE_ENV !== "production") {
        if (Component === undefined) {
          throw new Error(
            [
              "You are calling withStyles(styles)(Component) with an undefined component.",
              "You may have forgotten to import it.",
            ].join("\n")
          );
        }
      }
      if (displayName) {
        Component.displayName = displayName;
      }
      return <Component {...prefixProps} {...props} ref={ref} />;
    });
    return WithStyles;
  };
export default withPrefixComponent;
