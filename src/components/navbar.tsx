import {
  Button,
  Flex,
  Spacer,
  Icon,
  IconButton,
  Box,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaBars, FaAddressBook } from "react-icons/fa";
import { useMobileDetect } from "../hooks";
import cname from "classnames";

import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const detectMobile = useMobileDetect();

  return (
    <Box id="navbar" px="4" py="2" bg="teal">
      <Flex>
        <Heading fontSize="3xl" color="white">
          Address Book
          <Icon as={FaAddressBook} w="0.75em" h="0.75em" ml="2" />
        </Heading>

        <Spacer />

        {detectMobile.isMobile() ? <MobileNavbar /> : <DesktopNavbar />}
      </Flex>
    </Box>
  );
};

interface navLinkClassProps {
  isActive: boolean;
}

const navLinkClass = ({ isActive }: navLinkClassProps) =>
  isActive ? "nav-choice isActive" : "nav-choice";

const MobileNavbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const optionsClassName = cname("navbar__options", { hide: !showOptions });
  return (
    <>
      <IconButton
        colorScheme="teal"
        aria-label="Open navigation menu"
        flex={2}
        size="sm"
        width="auto"
        icon={<Icon as={FaBars} />}
        onClick={() => setShowOptions(!showOptions)}
      />

      <Box flex="2" className={optionsClassName}>
        <Flex>
          <Button>Home</Button>
          <Button>Add record</Button>
        </Flex>
      </Box>
    </>
  );
};

const DesktopNavbar = () => {
  return (
    <Flex alignItems="center">
      <NavLink className={navLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkClass} to="/users">
        Users
      </NavLink>
      <NavLink className={navLinkClass} to="/users/new">
        Add Record
      </NavLink>
    </Flex>
  );
};

export default Navbar;
