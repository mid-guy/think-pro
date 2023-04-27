import { Suspense, lazy } from "react";
import "./App.css";
const Home = lazy(() => import("./container/home/Home"));
//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense>
          <Home />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
