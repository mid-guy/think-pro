import { Button as ButtonMaterial } from "@mui/material";
import withPrefixComponent from "../../../utils/withPrefixComponent";

export default withPrefixComponent({ displayName: "Button" })(ButtonMaterial, {
  size: "large",
});
