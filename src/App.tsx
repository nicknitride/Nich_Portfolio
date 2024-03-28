import './Root.css'
import { Route, Routes } from 'react-router'
// import Home from './components/Home';
// import Navbar from './components/Navbar';

import Home from './components/Home';
function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Routes>
    <Route path="/" element={<Home />} />

    {/* This allows any other path to resolve to just home */}
    <Route path='*' element={<Home />} />

    </Routes>
    </>
  )
}

export default App;
