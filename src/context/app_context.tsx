import { useDisclosure } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks";
import { UnSavedUser, User } from "../types";

interface AppContext {
  users: User[];
  addUser: (user: UnSavedUser) => void;
  updateUser: (user: User) => void;
  deleteUser: (user: User) => void;
  currentUser?: User;
  setCurrentUserById: (userId: string) => void;
  fetchUsers: () => void;
  isUserModalOpen: boolean;
  closeUserModal: () => void;
  openUserModal: (user: User) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const appContext = createContext<AppContext>({
  users: [],
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
  setCurrentUserById: () => {},
  fetchUsers: () => {},
  isUserModalOpen: false,
  closeUserModal: () => {},
  openUserModal: () => {},
});

const AppProvider = ({ children }: AppProviderProps) => {
  const { users, addUser, updateUser, deleteUser, fetchUsers } = useUsers();
  const [currentUser, setCurrentUser] = useState<User>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const setCurrentUserById = (userId: string) => {
    setCurrentUser(users.find((record) => record.id == userId));
  };

  const openUserModal = (user: User) => {
    setCurrentUser(user);
    onOpen();
  };

  return (
    <appContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        currentUser,
        setCurrentUserById,
        fetchUsers,
        isUserModalOpen: isOpen,
        closeUserModal: onClose,
        openUserModal,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
