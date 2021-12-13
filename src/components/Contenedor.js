import { SimpleGrid, Box } from "@chakra-ui/layout";
import { Store } from "./Store";
import { db } from "../firebase/firebaseCongi";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";

export const Contenedor = () => {
  //Crear referencia de la db tiendas
  // const tiendasRef = collection(db, "tiendas");

  const [locales, setLocales] = useState([]);
  const documentos = [];
  const leerTiendas = async () => {
    try {
      const query = await getDocs(collection(db, "tiendas"));
      query.forEach((doc) => {
        documentos.push({ id: doc.id, ...doc.data() });
      });
      console.log("documento completo", documentos);
      setLocales(documentos);
    } catch (err) {
      console.log(err);
    }
  };
  const [res, setRes] = useState([]);
  const reserva = [];
  const obtenerTienda = async () => {
    try {
      const q = query(
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
      <Box>Pizzeria </Box>
      {res.map((local) => {
        return <Store local={local} />;
      })}
    </>
  );
};
