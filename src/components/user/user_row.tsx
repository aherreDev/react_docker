import { Td, Tr } from "@chakra-ui/react";
import { User } from "../../types";
import UserActionButtons from "./user_action_buttons";

interface UserRowProps {
  user: User;
}

const UserRow = ({ user }: UserRowProps) => {
  return (
    <Tr>
      <Td>{user.name}</Td>
      <Td>{user.address}</Td>
      <Td>{user.cellphone}</Td>
      <Td>
        <UserActionButtons user={user} />
      </Td>
    </Tr>
  );
};

export default UserRow;
