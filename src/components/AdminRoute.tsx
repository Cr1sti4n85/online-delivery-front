import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";

type AdminRouteProps = PropsWithChildren;

const AdminRoute = ({ children }: AdminRouteProps) => {
  const isAdmin = false;

  return isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;
