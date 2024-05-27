import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text></Text>
    </HStack>
  );
}

export default ColorModeSwitch;
