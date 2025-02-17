import React, { useState } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [dogs] = useState(['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5']);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';

  // useEffect(() => {
  //   //HTTP запрос, если нужно
  //   console.log(dogId);
  // }, [dogId]);

  const updateQuerySting = evt => {
    const dogIdValue = evt.target.value;
    if (dogIdValue === '') {
      return setSearchParams({});
    }

    setSearchParams({ dogId: dogIdValue });
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));

  console.log(location);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={dogId}
        onChange={updateQuerySting}
      />
      {/* <button onClick={() => setSearchParams({ c: 'hello' })}>change sp</button> */}
      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{ from: location }}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
