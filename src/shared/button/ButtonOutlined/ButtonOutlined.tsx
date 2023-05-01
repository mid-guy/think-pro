import withPrefixComponent from "../../../hooks/withPrefixComponent";
import Button from "../Button/Button";

export default withPrefixComponent({ displayName: "ButtonOutlined" })(Button, {
  variant: "outlined",
});
