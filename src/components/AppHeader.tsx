import { MediaQuery, Header, Group, Title, Box } from "@mantine/core";
import FiltersDrawer from "./FiltersDrawer";

const AppHeader = () => {
  return (
    <Header p="md" height={70}>
      <Group position="apart">
        <Title order={3}>FalskeProdukter.dk</Title>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Box>
            <FiltersDrawer />
          </Box>
        </MediaQuery>
      </Group>
    </Header>
  );
};

export default AppHeader;
