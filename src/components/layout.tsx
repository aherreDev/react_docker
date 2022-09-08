import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppProvider from "../context/app_context";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = () => {
  useEffect(() => {
    console.log("UseEffect 2");
  }, []);

  return (
    <ChakraProvider>
      <AppProvider>
        <Flex
          className="App"
          w="100%"
          minH="100%"
          bg="white"
          justifyContent="space-between"
          flexDirection="column"
          justifySelf="stretch"
          alignSelf="stretch"
        >
          <Navbar />

          <Container maxW="container.xl">
            <Outlet />
          </Container>

          <Footer />
        </Flex>
      </AppProvider>
    </ChakraProvider>
  );
};

export default Layout;
