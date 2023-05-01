import { Button as ButtonMaterial } from "@mui/material";
import withPrefixComponent from "../../../hooks/withPrefixComponent";

export default withPrefixComponent({ displayName: "Button" })(ButtonMaterial, {
  size: "large",
});
