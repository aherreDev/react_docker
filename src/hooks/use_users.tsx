import { useEffect, useState } from "react";
import StorageService from "../services/storage_service";
import { UnSavedUser, User } from "../types";

const sourceType = import.meta.env.VITE_DATA_SOURCE;
const storageService = new StorageService(sourceType);

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: UnSavedUser) => {
    const newUser = {
      ...user,
      id: new Date().getTime().toString(),
    };

    _saveUsers([...users, newUser]);
  };

  const updateUser = (user: User) => {
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return user;
      }
      return u;
    });

    _saveUsers(updatedUsers);
  };

  const deleteUser = (user: User) => {
    const updatedUsers = users.filter((u) => u.id !== user.id);

    _saveUsers(updatedUsers);
  };

  const fetchUsers = () => {
    console.log("FETCHING USERS...");

    const users = storageService.getRecord("users");
    if (users) setUsers(JSON.parse(users));
  };

  const _saveUsers = (record: User[]) => {
    storageService.setRecord("users", JSON.stringify(record));
    setUsers(record);
  };

  return {
    users,
    addUser,
    updateUser,
    deleteUser,
    fetchUsers,
  };
};

export default useUsers;
