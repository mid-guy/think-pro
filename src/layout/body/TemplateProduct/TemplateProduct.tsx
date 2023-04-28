import { Chip, Typography } from "@mui/material";
import StackColumn from "../../../shared/stack/StackColumn/StackColumn";
import StackRow from "../../../shared/stack/StackRow/StackRow";
import RadioMenu from "../../../shared/menu/RadioMenu/RadioMenu";
import CheckboxMenu from "../../../shared/menu/CheckboxMenu/CheckboxMenu";
import TemplateBackground from "../TemplateBackground/TemplateBackground";
import CardProduct from "../../../components/CardProduct/CardProduct";
import { Fragment } from "react";

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
    <TemplateBackground>
      <DescribeProduct category={category} />
      <FilterProduct />
      <StackRow gap={2}>
        {keyboards.map((keyboard: any, index: number) => (
          <Fragment key={index}>
            <CardProduct
              name={keyboard.name}
              colors={keyboard.colors}
              price={keyboard.price}
            />
          </Fragment>
        ))}
      </StackRow>
    </TemplateBackground>
  );
}

export function FilterProduct() {
  return (
    <StackRow paddingY={2} gap={1}>
      <RadioMenu label="Sắp xếp: Nổi bật nhất" />
      <CheckboxMenu label="Thương hiệu" options={companies} />
      <CheckboxMenu label="Màu sắc" options={colorsPalette} />
      <CheckboxMenu label="Khoảng giá" options={rangePrice} />
    </StackRow>
  );
}

function DescribeProduct({
  category,
}: {
  category: { name: string; describe: string };
}) {
  const { name, describe } = category;
  return (
    <StackColumn
      padding={3}
      color={"#1C1F23"}
      bgcolor={"#FFFFFF"}
      textAlign={"left"}
      borderRadius={2}
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

const keyboards = [
  {
    name: "Bàn phím cơ AKKO 3068B Plus World Tour Tokyo R2",
    price: 1899,
    colors: ["white", "pink", "red", "blue"],
  },
  {
    name: "Bàn phím cơ AKKO 5075B Plus Blue on White",
    price: 2199,
    colors: ["pink", "red", "blue"],
  },
  {
    name: "Bàn phím Keychron K3 v2",
    price: 1799,
    colors: ["pink", "black", "red", "blue"],
  },
  {
    name: "Bàn phím cơ keydous NJ80 AP - Case White",
    price: 899,
    colors: ["pink", "red", "blue"],
  },
];

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

const rangePrice = [
  { label: `Dưới 0,6tr` },
  { label: `từ 0,6tr đến 1,2tr` },
  { label: `từ 1,2r đến 1,8tr` },
  { label: `từ 1,8tr đến 2,4tr` },
  { label: `từ 2,4tr đến 3tr` },
  { label: `trên 3tr` },
];
