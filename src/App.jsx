import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* <Route path="journals" element={<Journals />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
