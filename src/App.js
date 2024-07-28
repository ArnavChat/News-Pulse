import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/UserContext"
import AppRoutes from "./components/AppRoutes"; // Update the import


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;