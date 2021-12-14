import { Image } from "@chakra-ui/image";
import { HStack, Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { CountPerson } from "./Funcionalidades/CountPerson";
import { DateReservation } from "./Funcionalidades/DateReservation";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Link as Li } from "@chakra-ui/react";

//importtaciondes de consultas

export const Store = ({ local }) => {
  //Consulta de nombre

  //fin de la consulta

  const handleName = () => {
    prompt(nombre);
  };

  const { nombre, direccion, sucursal, telefono, logo } = local;

  return (
    <HStack borderWidth="1.5px" borderRadius="lg" boxShadow="xl">
      <Image
        src={logo}
        alt="pizza"
        h={200}
        w={220}
        borderRadius="lg"
        marginRight={4}
      />

      <Box>
        <Heading> {nombre} </Heading>
        <Text>
          <strong>Direccion: </strong>
          {direccion}
          <Li
            color="red"
            href="https://goo.gl/maps/Tg5w8fWMefsagSFb8"
            isExternal
          >
            {" "}
            Visitar
          </Li>
        </Text>
        <Text>
          <strong>Sucursal: </strong>
          {sucursal}
        </Text>
        <Text mb={3}>
          <strong>Teléfono: </strong>
          {telefono}
        </Text>
        <CountPerson />
        <DateReservation />
        <Link to="/datosReserva">
          <Button
            colorScheme="red"
            variant="outline"
            marginLeft={4}
            onClick={handleName}
          >
            Reservar
          </Button>
        </Link>
      </Box>
    </HStack>
  );
};
