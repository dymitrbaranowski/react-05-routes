import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Dogs from '../pages/Dogs';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dogs" element={<Dogs />} /> */}
        <Route path="/dogs" element={<div>Коллекция</div>} />
        <Route path="/dogs/:dogId" element={<div>Элемент коллекции</div>} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
