import { Suspense, lazy } from "react";
import "./App.css";

const Button = lazy(() => import("./shared/button/Button/Button"));

const ButtonContained = lazy(
  () => import("./shared/button/ButtonContained/ButtonContained")
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense>
          <Button size="small">This HOC component</Button>
          <ButtonContained size="medium">This HOC component</ButtonContained>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
