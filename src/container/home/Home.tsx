import React from "react";
import MainHeader from "../../layout/header/MainHeader/MainHeader";
import TemplateProduct from "../../layout/body/TemplateProduct/TemplateProduct";
import StackColumn from "../../shared/stack/StackColumn";

export default function Home() {
  return (
    <StackColumn width={"100vw"} height={"100vh"}>
      <MainHeader />
      <TemplateProduct />
    </StackColumn>
  );
}
