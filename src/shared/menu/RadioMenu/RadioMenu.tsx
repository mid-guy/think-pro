import React, { Fragment } from "react";
import {
  FormControlLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import ButtonContained from "../../button/ButtonContained/ButtonContained";
import useToggleMenu from "../../../hooks/useToggleMenu";

export default function RadioMenu({ label }: { label: string }) {
  const { handleClick, handleClose, open, anchorEl } = useToggleMenu();
  return (
    <Fragment>
      <ButtonContained
        size="small"
        id={label}
        aria-controls={open ? label : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {label}
      </ButtonContained>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={0}
        name="radio-buttons-group"
      >
        <Menu
          id={label}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": label,
          }}
        >
          <MenuItem>
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Nổi bật nhất"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Giá thấp -> cao"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="Giá cao -> thấp"
            />
          </MenuItem>
        </Menu>
      </RadioGroup>
    </Fragment>
  );
}
