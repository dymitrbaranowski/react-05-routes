import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
// import { Gallery } from './Gallery';
// import { Subbreads } from './Subbreads';

const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const DogDetails = lazy(() => import('../pages/DogDetails'));
const Gallery = lazy(() =>
  import('./Gallery').then(module => ({
    ...module,
    default: module.Gallery,
  }))
);
const Subbreads = lazy(() =>
  import('./Subbreads').then(module => ({
    ...module,
    default: module.Subbreads,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreads" element={<Subbreads />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
