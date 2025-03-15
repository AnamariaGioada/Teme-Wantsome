import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <>
      <nav>
        <Link to="albums">Albums</Link>
        <button onClick={logout}>Logout</button>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;
