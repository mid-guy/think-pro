import React from 'react'

export default function useToggleCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  return {
    checked, handleChange
  }
}
