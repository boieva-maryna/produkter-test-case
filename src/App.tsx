import { AppShell } from "@mantine/core";
import AppHeader from "./components/AppHeader";
import ProductsList from "./components/ProductsList";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      navbar={<SideBar />}
      header={<AppHeader />}
    >
      <ProductsList />
    </AppShell>
  );
};

export default App;
