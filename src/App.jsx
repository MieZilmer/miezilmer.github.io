import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Links from "./pages/Links";

function App() {
  return (
    <Routes>
      {/* Routes go here */}
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  );
}

export default App;
