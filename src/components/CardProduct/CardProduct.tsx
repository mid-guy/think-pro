import { Box, Typography } from "@mui/material";
import StackColumn from "../../shared/stack/StackColumn/StackColumn";
import { NumberRange } from "../../types/NumberRange";
import StackRow from "../../shared/stack/StackRow/StackRow";

export default function CardProduct({
  name,
  price,
  discount,
  colors,
  imgSrc,
}: {
  name: string;
  imgSrc?: string;
  price: NumberRange<0, 100>;
  discount?: number;
  colors: string[];
}) {
  return (
    <StackColumn
      display={"flex"}
      bgcolor={"#FFFFFF"}
      color={"#1C1F23"}
      borderRadius={3}
      width={230}
    >
      <Box
        bgcolor={"#1C1F23"}
        borderRadius={3}
        sx={{ aspectRatio: "1", width: "100%" }}
      />
      <StackColumn
        padding={1.5}
        textAlign={"left"}
        justifyContent={"space-between"}
        flex={1}
      >
        <Typography variant="subtitle2" children={name} fontWeight={"bold"} />
        <Typography variant={"subtitle2"} children={`từ ${price}.000`} />
        <StackRow alignItems={"center"}>
          <Typography variant={"subtitle2"} children={`Màu:`} />
          <StackRow gap={0.5}>
            {colors.map((color: string, index: number) => (
              <Box width={15} height={15} key={index} bgcolor={color} />
            ))}
          </StackRow>
        </StackRow>
      </StackColumn>
    </StackColumn>
  );
}
