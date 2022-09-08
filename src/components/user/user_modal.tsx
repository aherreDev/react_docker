import { useContext } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { appContext } from "../../context/app_context";
import UserForm from "../user_form";
import { UnSavedUser, User } from "../../types";

const UserModal = () => {
  const {
    isUserModalOpen,
    closeUserModal,
    currentUser,
    updateUser,
    fetchUsers,
  } = useContext(appContext);

  const onSubmit = (user: UnSavedUser) => {
    const newUser = { ...currentUser, ...user } as User;

    updateUser(newUser);
    closeUserModal();
    fetchUsers();
  };

  return (
    <Modal isOpen={isUserModalOpen} onClose={closeUserModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UserForm
            initialValues={{ ...(currentUser as UnSavedUser) }}
            onSubmit={onSubmit}
            onCancel={closeUserModal}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
