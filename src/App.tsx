import { Suspense, lazy } from "react";
import "./App.css";
const ButtonContained = lazy(() => import("./shared/button/ButtonContained"));
const ButtonOutlined = lazy(() => import("./shared/button/ButtonOutlined"));
const ButtonText = lazy(() => import("./shared/button/ButtonText"));
const StackRow = lazy(() => import("./shared/stack/StackRow"));
//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense>
          <StackRow columnGap={1}>
            <ButtonContained size="medium">This HOC component</ButtonContained>
            <ButtonOutlined size="medium">This HOC component</ButtonOutlined>
            <ButtonText size="medium">This HOC component</ButtonText>
          </StackRow>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
