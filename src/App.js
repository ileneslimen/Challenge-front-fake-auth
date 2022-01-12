import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/login";
import MovieList from "./Components/MovieList";
import Navbare from "./Components/Navbar";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Navbare></Navbare>

      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/movies" element={<MovieList></MovieList>}></Route>
        <Route path="/Profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
