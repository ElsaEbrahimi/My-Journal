import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Journals from "./pages/Journals";
import AddJournal from "./components/AddJournal";
import SingleJournal from "./pages/SingleJournal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="journals" element={<Journals />} />
          <Route path="addjournal" element={<AddJournal />} />
          <Route path="/journals/:id" element={<SingleJournal />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
