import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Home'
import {About} from './components/About'
import NotFoundPage from './components/NotFound'
import Header from './components/Header';

function App() {

  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
