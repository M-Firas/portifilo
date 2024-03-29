import {Routes, Route,} from 'react-router-dom'
//CSS
import './App.css';

//Components
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
   <>
   <Navbar />
   <Routes>
     <Route path='/' element ={<Home />} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
