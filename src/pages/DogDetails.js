import { useParams } from 'react-router-dom';

const DogDetails = () => {
  // useEffect(() => {
  //HTTP запрос, если нужно
  // }, []);

  const { dogId } = useParams();
  console.log(dogId);
  return <>DogDetails: {dogId}</>;
};

export default DogDetails;
