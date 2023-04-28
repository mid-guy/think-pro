import StackRow from "../../../shared/stack/StackRow/StackRow";

export default function MainBottom() {
  return (
    <StackRow
      alignItems="center"
      justifyContent="center"
      padding={3}
      height={40}
    >
      <StackRow
        alignItems="center"
        justifyContent="space-between"
        columnGap={3}
        width={1200}
      />
    </StackRow>
  );
}
