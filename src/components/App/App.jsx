import "./App.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";

function App() {
  const [currentUser, setCurrentUserState] = useState({});

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />

          {/* registration */}
          <Route path="/signup" element={<Register />} />

          {/* login */}
          <Route path="/signin" element={<Login />} />

          {/* profile */}
          <Route path="/profile" element={<Profile />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/saved-movies" element={<SavedMovies />} />

          {/* 404 */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
