import { Stack } from "@mui/material";
import withPrefixComponent from "../../../hooks/withPrefixComponent";

export default withPrefixComponent({ displayName: "StackColumn" })(Stack, { direction: "column" });