import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksContainer from './Components/BookContainer';
import CategoriesContainer from './Components/CategoriesContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<CategoriesContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
