import { Link as RouterLink } from "react-router-dom";
import { Flex, Heading, Text, Link, Box } from "@chakra-ui/react";
import ErrorImage from "../components/images/error";

const ErrorView = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column">
      <Heading fontSize="4xl">This is embarrassing</Heading>

      <Text fontSize="2xl" py="2">
        We run into issues, try to{" "}
        <Link as={RouterLink} to="/" color="teal.500">
          go to home view
        </Link>
      </Text>

      <Flex py="4" justifyContent="center" alignItems="center">
        <ErrorImage height="75%" width="75%" />
      </Flex>
    </Flex>
  );
};

export default ErrorView;
