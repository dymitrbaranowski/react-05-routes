import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Dogs from './Dogs';
import Products from './Products';
import NotFound from './/NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dogs">Dogs</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
