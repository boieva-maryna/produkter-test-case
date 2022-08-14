import { FC } from "react";
import { Drawer, Button, ActionIcon, Stack, MediaQuery } from "@mantine/core";
import CheckFilter from "./CheckFilter";
import { useDisclosure } from "@mantine/hooks";
import { IconAdjustments } from "@tabler/icons";
import FreeTextSearch from "./FreeTextSearch";
import ResetButton from "./ResetButton";

const FiltersDrawer: FC = () => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={handlers.close}
        title="Filters"
        padding="xl"
        size="xl"
        position="bottom"
      >
        <Stack>
          <FreeTextSearch />
          <CheckFilter />
          <ResetButton />
        </Stack>
      </Drawer>

      <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
        <Button
          variant="outline"
          leftIcon={<IconAdjustments size={20} />}
          onClick={handlers.open}
        >
          Filters
        </Button>
      </MediaQuery>
      <MediaQuery largerThan="xs" styles={{ display: "none" }}>
        <ActionIcon color="blue" variant="outline" onClick={handlers.open}>
          <IconAdjustments size={20} />
        </ActionIcon>
      </MediaQuery>
    </>
  );
};

export default FiltersDrawer;
