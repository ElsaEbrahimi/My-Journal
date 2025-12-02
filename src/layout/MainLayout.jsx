import { Outlet } from "react-router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
const MainLayout = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    async function loeadDefaultEntries() {
      const res = await fetch("/entries.json");
      const data = await res.json();
      setEntries(data);
    }
    loeadDefaultEntries();
  }, []);

  return (
    <>
      <Header />
      <Outlet context={{ entries, setEntries }} />
    </>
  );
};
export default MainLayout;
