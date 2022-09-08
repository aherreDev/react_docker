import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import WelcomePicture from "../components/images/welcome";

const HomeView = () => {
  return (
    <Box textAlign="center" py="10">
      <Heading>Welcome to Online Address Book Website</Heading>
      <p>
        With this awesome tool you can save and generate new records of your
        friends and colleges
      </p>

      <Flex justifyContent="center" py="3">
        <WelcomePicture height="45%" width="45%" />
      </Flex>

      <Link to="users">
        <Button
          colorScheme="teal"
          size="lg"
          mt="3"
          rightIcon={<Icon as={FaArrowRight} />}
        >
          Get started!
        </Button>
      </Link>
    </Box>
  );
};

export default HomeView;
