import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Cadastro from './Cadastro';
import Feed from './Feed';
import Seguindo from './Seguindo';



function App() {
  return (    
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Cadastro" element={<Cadastro/>}/>
          <Route path="/Feed" element={<Feed/>}/>
          <Route path="/Seguindo" element={<Seguindo/>}/>                   
      </Routes>
    </Router>
  );
}

export default App;
