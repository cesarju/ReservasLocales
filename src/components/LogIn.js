import {
  Flex,
  Heading,
  Input,
  Button,
  Box,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { iniApp } from "../firebase/firebaseCongi";
import { useEffect, useState } from "react";
import { useUser } from "../provider/UseProvider";

const auth = getAuth(iniApp);

export const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useUser();
  const handleGoogleSingIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        setUser({
          name: userCredentials.user.displayName,
          profileImage: userCredentials.user.photoURL,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      const user = auth.currentUser;
      if (user) {
        setUser({
          name: user.displayName,
          profileImage: user.photoURL,
        });
      }
    });
  }, [user.displayName, user.photoURL]);

  return (
    <Box
      backgroundImage="https://i.imgur.com/gT4MsMl.jpg"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box
          bg="#fefefe"
          borderRadius="lg"
          boxShadow="dark-lg"
          borderWidth="2px"
        >
          <Flex direction="column" p={12}>
            <Heading mb={6}>Log In</Heading>
            {/* validar si un componente existe */}

            <FormControl id="email" mb={3}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Link to="/storeReserve">
              <Button
                colorScheme="red"
                mt={3}
                color="white"
                pl={"28"}
                pr={"28"}
              >
                Log-In
              </Button>
            </Link>
            <Link to="/storeReserve">
              <Button
                onClick={handleGoogleSingIn}
                colorScheme="red"
                variant="solid"
                mt={3}
                pl={"10"}
                pr={"12"}
              >
                Iniciar sesión con Google
              </Button>
            </Link>
            {errorMessage && <Text>{errorMessage}</Text>}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
