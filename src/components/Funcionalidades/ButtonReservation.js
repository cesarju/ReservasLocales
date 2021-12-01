import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";

export const ButtonReservation = () => {
  return (
    <>
      <Link to="/datosReserva">
        <Button colorScheme="red" variant="outline" marginLeft={4}>
          Reservar
        </Button>
      </Link>
    </>
  );
};
