import { useEffect, useState } from "react";
// import TitlesList from "./TitlesList";
// import { TitleInterface } from "./TitlesList";
import { Link } from "react-router-dom";

interface TitleInterface {
  title: string;
  id: number;
}
// interface TitlesListProps {
//   titles: TitleInterface[];
// }
const url = "https://jsonplaceholder.typicode.com/albums";
function Albums() {
  const [titles, setTitles] = useState<TitleInterface[]>([]);
  useEffect(() => {
    async function getTitle() {
      const response = await fetch(url);
      const titleResponse = await response.json();
      console.log(titleResponse);

      setTitles(titleResponse.slice(0, 20));
    }
    getTitle();
  }, []);
  return (
    <ul>
      {titles.map((title) => {
        return (
          <li>
            <Link to={`photos/${title.id}`} key={title.id}>
              {title.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Albums;
