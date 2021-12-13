import { Box, Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import { query, collection, where, getDocs } from "@firebase/firestore";
import { db } from "../../firebase/firebaseCongi";
import { ContenedorReserva } from "../Reserva/ContenedorReserva";
import {
  Table,
  Thead,
  TableCaption,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/table";
import { Grid } from "@chakra-ui/layout";
import { Header } from "../Header";

export const DatosReserva = () => {
  const [res, setRes] = useState([]);
  const reserva = [];
  const obtenerTienda1 = async () => {
    try {
      const q = await query(
        collection(db, "tiendas"),
        where("nombre", "==", "Italy")
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        reserva.push(doc.data());
        setRes(reserva);
        console.log("impreeeee", doc.data());
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log("coleccion de: ", res[0]);

  useEffect(() => {
    obtenerTienda1();
  }, []);

  return (
    <>
      <Header />
      <Center bg="tomato" h="60px" color="white">
        <Heading>Confirmacion de reserva </Heading>
      </Center>
      <Center>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={1}
          m={4}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
        >
          <Heading textAlign="center" fontSize="2xl" mt={2}>
            Confirma tu reservaen el restaurante
          </Heading>
          <Heading textAlign="center" fontSize="2xl" mt={2}>
            Tenemos los siguites platos que puedes disfrutar
          </Heading>
          <Box>
            <Box>
              {res.map((e) => {
                return <ContenedorReserva tienda={e} />;
              })}
              <Button colorScheme="red">Confirmar</Button>
            </Box>
          </Box>
          <Box>
            <Table variant="simple" mt="2">
              <TableCaption>
                Los precios pueden variar en días de promociones
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Productos</Th>
                  <Th>Precio</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Margarita</Td>
                  <Td>40$</Td>
                </Tr>
                <Tr>
                  <Td>Napolitana o romana</Td>
                  <Td>35$</Td>
                </Tr>
                <Tr>
                  <Td>Cuatro quesos</Td>
                  <Td>55$</Td>
                </Tr>
                <Tr>
                  <Td>Carbonara</Td>
                  <Td>40 $</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Grid>
      </Center>
    </>
  );
};
