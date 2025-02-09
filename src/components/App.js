import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dogs from '../pages/Dogs';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import DogDetails from 'pages/DogDetails';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />} />
        {/* <Route path="products" element={<Products />} /> */}
      </Route>
    </Routes>
  );
};
