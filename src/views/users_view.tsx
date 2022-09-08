import { Box, Flex, Heading, useToast, Text, ToastId } from "@chakra-ui/react";
import { useContext, useEffect, memo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { UserModal } from "../components/user";
import UsersList from "../components/users_list";
import { appContext } from "../context/app_context";

const UsersView = () => {
  const { users, fetchUsers } = useContext(appContext);
  const toastIdRef = useRef<ToastId | null>();
  const [searchParams, setSearchParams] = useSearchParams();
  const toast = useToast();

  const presentUsers = users.length > 0;

  const launchToast = (action: "created" | "updated" | "deleted") => {
    setSearchParams("");

    if (toastIdRef.current) return;

    fetchUsers();

    toastIdRef.current = toast({
      title: "User has been " + action,
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (searchParams.get("created")) launchToast("created");
    if (searchParams.get("updated")) launchToast("updated");
    if (searchParams.get("deleted")) launchToast("deleted");
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column" h="100%">
      {presentUsers && <ViewTitle />}

      <UsersList />

      <UserModal />
    </Flex>
  );
};

const ViewTitle = () => (
  <Box textAlign="left" w="full">
    <Heading fontSize="2xl">Users</Heading>

    <Text fontSize="2xl" py="2">
      Here you can add/edit/delete your user's contacts
    </Text>
  </Box>
);

export default memo(UsersView);
