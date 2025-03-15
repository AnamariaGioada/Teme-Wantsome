import { Navigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return children;
}

export default ProtectedRoute;
