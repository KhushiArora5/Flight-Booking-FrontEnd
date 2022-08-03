import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Book from './Pages/Book/Book';
import Flight from "./Pages/Flights/Flight";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/bookflight" element={<Book />}></Route>
        <Route exact path="/flight" element={<Flight />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;