import { InputAdornment, TextField } from "@mui/material";
import withPrefixComponent from "../../../utils/withPrefixComponent";
import Search from "../../../assets/Search";
export default withPrefixComponent({ displayName: "SearchField" })(TextField, {
  size: "small",
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
    ),
  },
});
