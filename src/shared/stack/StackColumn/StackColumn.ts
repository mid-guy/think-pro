import { Stack } from "@mui/material";
import withPrefixComponent from "../../../utils/withPrefixComponent";

export default withPrefixComponent({ displayName: "StackColumn" })(Stack, { direction: "column" });