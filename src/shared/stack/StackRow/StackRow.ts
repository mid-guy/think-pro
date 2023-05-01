import { Stack } from "@mui/material";
import withPrefixComponent from "../../../hooks/withPrefixComponent";

export default withPrefixComponent({ displayName: "StackRow" })(Stack, { direction: "row" });