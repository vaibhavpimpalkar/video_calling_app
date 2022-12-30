import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/home"
// import { route } from 'react';
import RoomPage from './pages/room';
function App() {
  return (
      <Routes>
            <Route path='/'element={<HomePage/>}></Route>
            <Route path='/room/:roomId'element={<RoomPage/>}></Route>
      </Routes>
  );
}

export default App;
