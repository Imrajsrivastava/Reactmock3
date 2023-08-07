import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import PostClassifieds from './components/PostClassifieds';
import BrowseClassifieds from './components/BrowseClassifieds';
import Navbar from './components/Navbar';
import { Heading } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Heading>OLX Classifieds</Heading>
      <Navbar/>
      <Routes>
        <Route path='/postClassified' element={<PostClassifieds/>}/>
        <Route path='/browserclassified' element={<BrowseClassifieds/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
