import { HStack, Image } from "@chakra-ui/react";
import pirate from "../assets/priate.png";
import ColorModeSwitch from "./colorModeSwitch";

function NavBar() {
  return (
    <>
      <HStack justifyContent="space-between">
        <Image src={pirate} boxSize="40px" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
