import StackRow from "../../../shared/stack/StackRow/StackRow";
import { ReactNode } from "react";
import StackColumn from "../../../shared/stack/StackColumn/StackColumn";

export default function TemplateBackground({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StackRow flex={1} bgcolor={"#dfe9f2"} justifyContent="center">
      <StackColumn width={1200} paddingY={2}>
        {children}
      </StackColumn>
    </StackRow>
  );
}
