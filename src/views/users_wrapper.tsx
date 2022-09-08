import { Spacer } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState, memo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { appContext } from "../context/app_context";

const UsersWrapper = () => {
  const { fetchUsers } = useContext(appContext);
  const [fetchedUsers, setFetchedUsers] = useState(false);

  useEffect(() => {
    console.log("UseEffect");
    fetchUsers();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default memo(UsersWrapper);
