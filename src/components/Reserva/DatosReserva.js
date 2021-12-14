import { Box, Center, Heading, Grid } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
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
import { Header } from "../Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export const DatosReserva = () => {
  const toast = useToast();
  const pizzeria = "Mr. Pizza";
  const [res, setRes] = useState([]);
  const reserva = [];
  const obtenerTienda1 = async () => {
    try {
      const q = await query(
        collection(db, "tiendas"),
        where("nombre", "==", pizzeria)
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
          h="650px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 3fr)"
          gap={5}
          m={4}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="xl"
        >
          <Heading textAlign="center" fontSize="3xl" bg="#f3f6f9" pt={5}>
            Pizzeria
          </Heading>
          <Heading textAlign="center" fontSize="3xl" bg="#f3f6f9" pt={5}>
            Menú
          </Heading>
          <Box>
            <Box pl={2}>
              {res.map((e) => {
                return <ContenedorReserva tienda={e} />;
              })}
              <Button
                colorScheme="red"
                onClick={() =>
                  toast({
                    marginLeft: "12px",
                    render: () => (
                      <Box color="white" p={3} bg="tomato" fontSize="xl">
                        Reserva exitosa, lo esperamos :)
                      </Box>
                    ),
                  })
                }
              >
                Confirmar
              </Button>
              <Link to="/storeReserve">
                <Button colorScheme="red" variant="outline" marginLeft={4}>
                  Cancelar
                </Button>
              </Link>
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
