import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router";
import Journals from "./pages/Journals";
import AddJournal from "./components/AddJournal";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="journals" element={<Journals />} />
          <Route path="addjournal" element={<AddJournal />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
