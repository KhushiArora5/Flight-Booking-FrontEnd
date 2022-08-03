import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Book from './Pages/Book/Book';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/bookflight" element={<Book />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;