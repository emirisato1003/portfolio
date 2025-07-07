import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './App.css';
import Projects from './page/Projects';
import About from './page/About';
import Contact from './page/Contact';
import Layout from './Layout/Layout';
import NotFound from './page/NotFound'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
