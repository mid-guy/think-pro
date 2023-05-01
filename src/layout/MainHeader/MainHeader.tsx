import StackRow from "../../shared/stack/StackRow/StackRow";
import ButtonText from "../../shared/button/ButtonText/ButtonText";
import LocationService from "../../assets/LocationService";
import PhoneService from "../../assets/PhoneService";
import SupportService from "../../assets/SupportService";
import withPrefixComponent from "../../hooks/withPrefixComponent";
import SearchField from "../../shared/field/SearchField";

const ButtonTextSmall = withPrefixComponent({ displayName: "ButtonTextSmall" })(
  ButtonText,
  { size: "small" }
);

export default function MainHeader() {
  return (
    <StackRow alignItems="center" justifyContent="center" padding={3}>
      <StackRow
        alignItems="center"
        justifyContent="space-between"
        columnGap={3}
        width={1200}
      >
        <StackRow alignItems="center" justifyContent="center" columnGap={3}>
          <div style={{ width: 50, height: 50, background: "red" }}></div>
          <SearchField />
          <ButtonTextSmall startIcon={<PhoneService />}>
            1900.63.3579
          </ButtonTextSmall>
          <ButtonTextSmall startIcon={<SupportService />}>
            Địa chỉ cửa hàng
          </ButtonTextSmall>
          <ButtonTextSmall startIcon={<LocationService />}>
            Khiếu nại
          </ButtonTextSmall>
        </StackRow>
      </StackRow>
      <ButtonTextSmall>Khiếu nại</ButtonTextSmall>
    </StackRow>
  );
}
