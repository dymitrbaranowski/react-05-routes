import { useParams, Link, Outlet } from 'react-router-dom';

const DogDetails = () => {
  // useEffect(() => {
  //HTTP запрос, если нужно
  // }, []);

  const { dogId } = useParams();

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreads">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
