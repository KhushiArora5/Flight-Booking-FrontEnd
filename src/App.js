import Home from './Pages/Home/Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;