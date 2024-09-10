import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumPhotos from "./components/AlbumPhotos";
import Photos from "./components/Photos";
import Albums from "./components/Albums";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/photos" element={<Photos />} />
          <Route path="/albums/photos/:albumId" element={<AlbumPhotos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
