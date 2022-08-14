import { Navbar, MediaQuery } from "@mantine/core";
import CheckFilter from "./CheckFilter";
import FreeTextSearch from "./FreeTextSearch";
import ResetButton from "./ResetButton";

const SideBar = () => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Navbar width={{ base: 300, lg: 450 }} p="md" hiddenBreakpoint="sm">
        <Navbar.Section>
          <FreeTextSearch />
        </Navbar.Section>
        <Navbar.Section my="lg">
          <CheckFilter />
        </Navbar.Section>
        <Navbar.Section>
          <ResetButton />
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
};

export default SideBar;
