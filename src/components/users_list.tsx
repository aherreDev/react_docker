import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Icon,
} from "@chakra-ui/react";
import { appContext } from "../context/app_context";
import NoDataImage from "./images/no_data";
import { User } from "../types";
import { useMobileDetect } from "../hooks";
import { UserCard, UserRow } from "./user";

const UsersList = () => {
  const { users } = useContext(appContext);
  const detectMobile = useMobileDetect();

  if (users.length === 0)
    return (
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <Heading fontSize="4xl" mb="4">
          No users found
        </Heading>

        <NoDataImage width="50%" height="50%" />

        <Text fontSize="2xl" py="2">
          No users found, try to{" "}
          <Link as={RouterLink} to="/users/new" color="teal.500">
            create a new user.
          </Link>
        </Text>
      </Flex>
    );

  if (detectMobile.isMobile()) return <MobileList users={users} />;

  return <DesktopList users={users} />;
};

interface ListProps {
  users: User[];
}

const MobileList = ({ users }: ListProps) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

const DesktopList = ({ users }: ListProps) => {
  return (
    <Box w="full">
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>
            This is your contacts list. Total count:{" "}
            <strong>{users.length}</strong>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>Address</Th>
              <Th>Cellphone</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <UserRow user={user} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersList;
