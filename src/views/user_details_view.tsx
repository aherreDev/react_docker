import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { appContext } from "../context/app_context";
import ErrorView from "./error_view";

const UserDetailsView = () => {
  const { userId } = useParams();
  const { currentUser, setCurrentUserById } = useContext(appContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (userId) setCurrentUserById(userId);
  }, [userId]);

  if (!userId) navigate("/error");

  if (!currentUser) return <ErrorView />;

  return (
    <div className="user-details-view">
      <h1>User Details</h1>

      <div className="user-details">
        <div className="user-details__name">
          <span className="user-details__label">Name:</span>
          {/* <span className="user-details__value">{currentUser?.name}</span> */}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsView;
