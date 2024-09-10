import { Outlet } from "react-router";

function Photos() {
  return (
    <>
      <h1>Photos page</h1>
      <Outlet />
    </>
  );
}

export default Photos;
