import { AiTwotoneCalendar } from "react-icons/ai";
import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

export const DateReservation = () => {
  const fechaActual = Date.now();
  const event = new Date(fechaActual);
  const day = event.getDate();
  const month = event.getMonth() + 1;
  const year = event.getUTCFullYear();

  event.setUTCDate(day + 1);
  let nextDay = event.getUTCDate();
  event.setUTCDate(nextDay + 1);
  let twoDay = event.getUTCDate();
  event.setUTCDate(twoDay + 1);
  let threeDay = event.getUTCDate();

  let oneDay = `${day}/${month}/${year}`;
  let twoDays = `${nextDay}/${month}/${year}`;
  let threeDays = `${twoDay}/${month}/${year}`;
  let fourDays = `${threeDay}/${month}/${year}`;

  const [date, setDate] = useState("Fecha");

  return (
    <>
      <Menu>
        <MenuButton
          borderColor="whiteAlpha.100"
          colorScheme="red"
          as={Button}
          leftIcon={<AiTwotoneCalendar />}
          marginLeft={4}
        >
          {date}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setDate(oneDay)}>{oneDay}</MenuItem>
          <MenuItem onClick={() => setDate(twoDays)}>{twoDays}</MenuItem>
          <MenuItem onClick={() => setDate(threeDays)}>{threeDays}</MenuItem>
          <MenuItem onClick={() => setDate(fourDays)}>{fourDays}</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
