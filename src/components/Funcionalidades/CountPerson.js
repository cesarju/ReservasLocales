import { BsPeopleFill } from "react-icons/bs";
import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";

export const CountPerson = () => {
  const [count, setCount] = useState(1);

  //  const datos = { countPerson: count };
  return (
    <Menu>
      <MenuButton
        borderColor="whiteAlpha.100"
        colorScheme="red"
        as={Button}
        leftIcon={<BsPeopleFill />}
      >
        {count} Persona
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setCount(1)}>1</MenuItem>
        <MenuItem onClick={() => setCount(2)}>2</MenuItem>
        <MenuItem onClick={() => setCount(3)}>3</MenuItem>
        <MenuItem onClick={() => setCount(4)}>4</MenuItem>
        <MenuItem onClick={() => setCount(5)}>5</MenuItem>
        <MenuItem onClick={() => setCount(6)}>6</MenuItem>
      </MenuList>
    </Menu>
  );
};
