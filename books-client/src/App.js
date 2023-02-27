import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookDetails from './views/BookDetails';



import Slidersview from './views/Slidersview';
import SimpleSlider from './views/Slidersview';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>     
            <Route path="/slider" element ={<Slidersview/>}/>
            <Route path="/reviews/:id" element ={<BookDetails/>}/>
          </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
