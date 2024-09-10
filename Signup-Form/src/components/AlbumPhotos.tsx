import { useParams } from "react-router";
import { useEffect, useState } from "react";

interface AlbumsPhotosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
}
const url = "https://jsonplaceholder.typicode.com/photos";
function AlbumPhotos() {
  const { albumId } = useParams();
  console.log(albumId);
  const [photos, setPhotos] = useState<AlbumsPhotosProps[]>([]);
  useEffect(() => {
    async function fetchAlbumPhotos() {
      const response = await fetch(`${url}?albumId=${albumId}`);
      const photoResponse = await response.json();

      setPhotos(photoResponse);
    }
    fetchAlbumPhotos();
  }, [albumId]);
  return photos.map((photo) => (
    <div key={photo.id}>
      <img src={photo.url} alt={photo.title} />
    </div>
  ));
}

export default AlbumPhotos;
