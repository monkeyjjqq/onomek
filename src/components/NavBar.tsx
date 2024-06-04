import { HStack, Image } from "@chakra-ui/react";
import pirate from "../assets/priate.png";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <>
      <HStack justifyContent="space-between">
        <Image src={pirate} boxSize="40px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
