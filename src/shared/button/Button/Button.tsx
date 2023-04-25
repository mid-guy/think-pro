import { Button as ButtonMaterial, ButtonProps } from "@mui/material";
import React from "react";

export default function Button(props: ButtonProps) {
  return <ButtonMaterial {...props} />;
}
