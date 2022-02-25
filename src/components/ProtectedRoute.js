import { Route, Redirect } from "react-router";
import { useUser } from "../provider/UseProvider";

export const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user.name
          ? children
          : setTimeout(
              <Redirect to={{ pathname: "/", state: location }} />,
              2000
            );
      }}
    />
  );
};
