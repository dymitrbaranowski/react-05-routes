import { useParams } from 'react-router-dom';

export const Subbreads = () => {
  const { dogId } = useParams();
  return <div> Subbreads: {dogId}</div>;
};
