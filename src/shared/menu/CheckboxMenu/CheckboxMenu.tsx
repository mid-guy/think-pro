import React, { Fragment } from "react";
import { Box, Checkbox, FormControlLabel, Menu } from "@mui/material";
import ButtonContained from "../../button/ButtonContained/ButtonContained";
import useToggleMenu from "../../../hooks/useToggleMenu";
import StackRow from "../../stack/StackRow/StackRow";
import useToggleCheckbox from "../../../hooks/useToggleCheckbox";
import DetailsMenu from "../../../assets/DetailsMenu";

export default function CheckboxMenu({
  label,
  options,
}: {
  label: string;
  options: Array<{ label: string }>;
}) {
  const { handleClick, handleClose, open, anchorEl } = useToggleMenu();
  const { handleChange, checked } = useToggleCheckbox();
  return (
    <>
      <ButtonContained
        size="small"
        id={label}
        aria-controls={open ? label : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<DetailsMenu />}
      >
        {label}
      </ButtonContained>
      <Menu
        id={label}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": label,
        }}
      >
        <Box padding={1}>
          <FormControlLabel
            label="Tất cả"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange}
              />
            }
          />
          <StackRow maxWidth={{ xs: 350 }} flexWrap="wrap">
            {options.map((option: { label: string }, index: number) => (
              <FormControlLabel
                key={index}
                label={option.label}
                control={
                  <Checkbox checked={checked[0]} onChange={handleChange} />
                }
              />
            ))}
          </StackRow>
        </Box>
      </Menu>
    </>
  );
}
