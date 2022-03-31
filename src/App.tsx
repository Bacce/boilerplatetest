import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import 'normalize.css';
import './App.css';
import "./i18n";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
