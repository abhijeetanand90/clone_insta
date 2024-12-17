import Auth from "./component/Auth/Auth";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./component/Home/Home";
import CreatePost from "./component/CreatePost/CreatePost";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/auth"  element={<Auth />}/>
      <Route path="/"  element={ <Home />}/>
      <Route path="/posts/create" element={<CreatePost />} />
      
     
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
