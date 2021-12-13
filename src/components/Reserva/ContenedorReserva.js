import { Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";

export const ContenedorReserva = ({ tienda }) => {
  const { nombre, direccion, sucursal, logo } = tienda;
  return (
    <>
      <Text fontSize="5xl" textAlign="center">
        <strong>{nombre}</strong>
      </Text>
      <Image src={logo} alt="tienda" />
      <Box>
        <Text>
          <strong>Direccion:</strong> {direccion}
        </Text>
        <Text>
          <strong>Sucursal: </strong>
          {sucursal}
        </Text>
        <Text>
          <strong>Fecha:</strong>{" "}
        </Text>
        <Text>
          <strong>Personas:</strong>{" "}
        </Text>
        <Text>
          <strong>Hora:</strong>{" "}
        </Text>
      </Box>
    </>
  );
};
