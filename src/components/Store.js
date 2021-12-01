import { Image } from "@chakra-ui/image";
import { HStack, Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { CountPerson } from "./Funcionalidades/CountPerson";
import { DateReservation } from "./Funcionalidades/DateReservation";
import { ButtonReservation } from "./Funcionalidades/ButtonReservation";

export const Store = ({ local }) => {
  const { nombre, direccion, sucursal, telefono, logo } = local;
  return (
    <HStack borderWidth="1.5px" borderRadius="lg" boxShadow="xl">
      <Image
        src={logo}
        alt="pizza"
        h={200}
        v={200}
        borderRadius="lg"
        marginRight={4}
      />

      <Box>
        <Heading> {nombre} </Heading>
        <Text>
          <strong>Direccion: </strong>
          {direccion}
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
        <ButtonReservation />
      </Box>
    </HStack>
  );
};
