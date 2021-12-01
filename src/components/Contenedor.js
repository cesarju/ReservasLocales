import { SimpleGrid, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Store } from "./Store";
import { db } from "../firebase/firebaseCongi";
import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "@firebase/firestore";

export const Contenedor = () => {
  const [locales, setLocales] = useState([]);
  const documentos = [];
  const leerTiendas = async () => {
    try {
      const query = await getDocs(collection(db, "tiendas"));
      query.forEach((doc) => {
        documentos.push({ id: doc.id, ...doc.data() });
      });
      console.log(documentos);
      setLocales(documentos);
    } catch (err) {
      console.log(err);
    }
  };
  const [res, setRes] = useState([]);
  const reserva = [];
  const obtenerTienda = async () => {
    try {
      const docRef = doc(db, "tiendas", "OlBj5UhFGNex82r1vwc6");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        reserva.push(docSnap.data());
        console.log(reserva);
        setRes(reserva);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* recuperar un documento*/

  useEffect(() => {
    leerTiendas();
  }, []);

  useEffect(() => {
    obtenerTienda();
  }, []);

  return (
    <>
      <SimpleGrid
        columns={2}
        spacing={5}
        margin={8}
        marginLeft={50}
        marginRight={30}
      >
        {locales.map((local) => {
          return <Store key={local.id} local={local} />;
        })}
      </SimpleGrid>
      {/*       <Box>Pizzeria </Box>
      {res.map((local) => {
        return <Store key={local.id} local={local} />;
      })} */}
    </>
  );
};
