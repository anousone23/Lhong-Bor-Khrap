import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
