import { Link, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId');
  // useEffect(() => {
  //HTTP запрос, если нужно
  // }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={dogId}
        onChange={evt => setSearchParams({ dogId: evt.target.value })}
      />
      <button onClick={() => setSearchParams({ c: 'hello' })}>change sp</button>
      <ul>
        {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
          return (
            <li key={dog}>
              <Link key={dog} to={`${dog}`}>
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
