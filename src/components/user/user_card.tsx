import { Box, Heading, Text } from "@chakra-ui/react";
import { User } from "../../types";
import UserActionButtons from "./user_action_buttons";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Box>
      <Heading fontSize="2xl">{user.name}</Heading>

      <Box>
        <Text fontSize="xl" py="2">
          <strong>Email: </strong>
          {user.address}
        </Text>

        <Text fontSize="xl" py="2">
          <strong>Cellphone: </strong>
          {user.cellphone}
        </Text>
      </Box>

      <Box>
        <UserActionButtons user={user} />
      </Box>
    </Box>
  );
};

export default UserCard;
