import { Suspense, useRef } from 'react';

import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

const DogDetails = () => {
  // useEffect(() => {
  //HTTP запрос, если нужно
  // }, []);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();

  console.log(location);
  console.log(backLinkLocationRef);

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Назад</Link>
      <ul>
        <li>
          <Link to="subbreads">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
