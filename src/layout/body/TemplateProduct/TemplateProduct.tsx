import { Box, Chip, Typography } from "@mui/material";
import StackColumn from "../../../shared/stack/StackColumn/StackColumn";
import StackRow from "../../../shared/stack/StackRow/StackRow";
import RadioMenu from "../../../shared/menu/RadioMenu/RadioMenu";
import CheckboxMenu from "../../../shared/menu/CheckboxMenu/CheckboxMenu";
const category = {
  name: "Bàn phím",
  describe: `
  Bàn phím là một thiết bị đầu vào cho máy tính, được sử dụng để nhập dữ
  liệu và điều khiển các chức năng của máy tính. Bàn phím bao gồm một
  loạt các phím nhấn, các phím chữ, số, các ký tự đặc biệt và các phím
  chức năng để thực hiện các tác vụ.`,
};

export default function TemplateProduct() {
  return (
    <StackRow flex={1}>
      <Box flex={1} bgcolor={"#dfe9f2"}>
        <DescribeProduct category={category} />
        <FilterProduct />
      </Box>
    </StackRow>
  );
}

export function FilterProduct() {
  return (
    <StackColumn flex={1} alignItems={"center"}>
      <Box width={1200} padding={3} display={"flex"} gap={1}>
        <RadioMenu label="Sắp xếp: Nổi bật nhất" />
        <CheckboxMenu label="Thương hiệu" options={companies} />
        <CheckboxMenu label="Màu sắc" options={colorsPalette} />
      </Box>
    </StackColumn>
  );
}

function DescribeProduct({
  category,
}: {
  category: { name: string; describe: string };
}) {
  const { name, describe } = category;
  return (
    <StackColumn alignItems={"center"} padding={3}>
      <Box
        width={1200}
        color={"#1C1F23"}
        bgcolor={"#FFFFFF"}
        borderRadius={2}
        padding={3}
        display={"flex"}
        flexDirection={"column"}
        textAlign={"left"}
        gap={1}
      >
        <Typography variant="h5" fontWeight={700}>
          {name}
        </Typography>
        <Typography variant="subtitle2" width={"50%"}>
          {describe}
        </Typography>
        <Divider />
        <CompanyCreateProduct />
      </Box>
    </StackColumn>
  );
}

function Divider() {
  return <div style={{ border: "1px solid #e6e8ea", margin: "0.5rem 0" }} />;
}

function CompanyCreateProduct() {
  return (
    <StackRow gap={1}>
      {companies.map((company: { label: string }, index: number) => (
        <Chip key={index} label={company.label} />
      ))}
    </StackRow>
  );
}

const companies = [
  {
    label: "Akko",
  },
  {
    label: "Newmen",
  },
  {
    label: "Lenovo",
  },
  {
    label: "Keydous",
  },
  {
    label: "Logitech",
  },
  {
    label: "Dell",
  },
  {
    label: "Acer",
  },
  {
    label: "Asus",
  },
];

const colorsPalette = [
  { label: "red" },
  { label: "blue" },
  { label: "black" },
  { label: "white" },
  { label: "pink" },
];
