import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../context/app_context";
import { UnSavedUser } from "../types";
import UserForm from "./user_form";

const CreateUser = () => {
  const { addUser } = useContext(appContext);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    address: "",
    cellphone: "",
  };

  const createUser = (values: UnSavedUser) => {
    addUser(values);

    navigate("/users?created=true");
  };

  const cancelAction = () => {
    navigate("/users");
  };

  return (
    <Box>
      <Heading fontSize="4xl">Create User</Heading>

      <UserForm
        onSubmit={createUser}
        onCancel={cancelAction}
        initialValues={initialValues}
      />
    </Box>
  );
};

export default CreateUser;
