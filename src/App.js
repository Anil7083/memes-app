import { Route,Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/Home';
import EditPage from './pages/edit';
function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/edit' element={<EditPage />}/>
      </Routes>
    </div>
  );
}

export default App;