import Auth from "./component/Auth/Auth";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./component/Home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/auth"  element={<Auth />}/>
      <Route path="/"  element={ <Home />}/>
      
     
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
