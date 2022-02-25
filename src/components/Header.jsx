import { Box, Heading, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ProfileImage } from "./ProfileImage";
import { useUser } from "../provider/UseProvider";
import { getAuth } from "@firebase/auth";
import { iniApp } from "../firebase/firebaseCongi";
import { Spacer } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const auth = getAuth(iniApp);

export const Header = () => {
  const { user, setUser } = useUser();

  //Salir de la sesion
  const handleSingUp = () => {
    setUser({});
    auth
      .signOut()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box>
      <Flex
        backgroundImage="https://i.imgur.com/JEb82WN.jpg"
        h={350}
        w="100%"
        mt={-16}>
        <Box p="2" mt={16}>
          <Heading size="xl" color="white">
            Bienvenido
          </Heading>
          <Text color="white">{user.name}</Text>
        </Box>
        <Spacer />
        {/* foto de perfin y sing up */}
        <Flex direction="row" mt={20}>
          <Link to="/" onClick={handleSingUp}>
            <Button colorScheme="red" mt={3} color="white" mr="4">
              Sing Up
            </Button>
          </Link>
          <Box mr="4">
            <ProfileImage />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
