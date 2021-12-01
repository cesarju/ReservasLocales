import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LogIn } from "./components/LogIn";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { StoreReserve } from "./components/StoreReserve";
import { DatosReserva } from "./components/Reserva/DatosReserva";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LogIn />
          </Route>
          <ProtectedRoute path="/storeReserve">
            <StoreReserve />
          </ProtectedRoute>
          <Route>
            <DatosReserva />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
