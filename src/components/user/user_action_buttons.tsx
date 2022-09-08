import { Button, Icon, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { appContext } from "../../context/app_context";
import { User } from "../../types";

interface UserActionButtonsProps {
  user: User;
  onEdit?: () => void;
  onDelete?: () => void;
}

const UserActionButtons = ({ user }: UserActionButtonsProps) => {
  const { openUserModal, deleteUser, fetchUsers } = useContext(appContext);

  const fireOpenUserModal = () => {
    openUserModal(user);
  };

  const fireDeleteUser = () => {
    deleteUser(user);
    fetchUsers();
  };

  return (
    <Stack direction="row" spacing={4}>
      <Button
        rightIcon={<Icon as={FaEdit} />}
        colorScheme="blue"
        size="sm"
        onClick={fireOpenUserModal}
      >
        Edit
      </Button>
      <Button
        rightIcon={<Icon as={FaTrash} />}
        colorScheme="red"
        size="sm"
        onClick={fireDeleteUser}
      >
        Delete
      </Button>
    </Stack>
  );
};

export default UserActionButtons;
