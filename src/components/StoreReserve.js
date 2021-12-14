import { Box } from "@chakra-ui/layout";
import { Center, Heading } from "@chakra-ui/layout";
import { Contenedor } from "./Contenedor";
import { Header } from "./Header";

export const StoreReserve = () => {
  return (
    <Box>
      <Header />
      <Center bg="tomato" h="70px" color="white">
        <Heading>Reservas rapidas y confiables</Heading>
      </Center>
      <Contenedor />
    </Box>
  );
};
