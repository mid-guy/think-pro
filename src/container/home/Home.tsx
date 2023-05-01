import MainHeader from "../../layout/header/MainHeader/MainHeader";
import TemplateProduct from "../../layout/body/TemplateProduct/TemplateProduct";
import StackColumn from "../../shared/stack/StackColumn";
import MainBottom from "../../layout/bottom/MainBottom/MainBottom";
import NavbarProduct from "../../layout/body/NavbarProduct/NavbarProduct";

export default function Home() {
  return (
    <StackColumn width={"100vw"} height={"100vh"}>
      <MainHeader />
      <NavbarProduct />
      <TemplateProduct />
      <MainBottom />
    </StackColumn>
  );
}
