import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import InfoTooltip from "../PopupsInfoTooltips/InfoTooltip/InfoTooltip";
import InfoTooltipEditProfile from "../PopupsInfoTooltips/InfoTooltipEditProfile/InfoTooltipEditProfile";
import NotFound from "../NotFound/NotFound";
import * as api from "../../utils/MainApi";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [
    isInfoTooltipEditProfilePopupOpen,
    setInfoTooltipEditProfilePopupOpen,
  ] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Закрываю попапы в closeAllPopups
  function closeAllPopups() {
    setInfoToolTipPopupOpen(false);
    setInfoTooltipEditProfilePopupOpen(false);
  }

  // Две константы попапов присваиваю константе isOpen, чтобы отслеживать их состояние в юзэффекте
  const isOpen = isInfoToolTipPopupOpen || isInfoTooltipEditProfilePopupOpen;

  // Отслеживаю состояния попапов и закрываю их по клавише ESC
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  // Закрываю попапы кликом по оверлею
  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  }

  // Проверяю токен в локальном хранилище, если он есть, то получаю данные
  // пользователя из локального хранилища после проверки запроса апи getContent
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            localStorage.removeItem("allMovies");
          }
          navigate(path);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // Регистр
  function handleRegistration({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        setInfoToolTipPopupOpen(true);
        setIsSuccess(true);
      })
      .catch((error) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(error);
      });
  }

  // Логин
  function handleLogin({ email, password }) {
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setIsSuccess(true);
          setInfoToolTipPopupOpen(true);
          localStorage.setItem("jwt", res.token);
          navigate("/movies", { replace: true });
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(error);
      });
  }

  // Вывод данных если авторизован
  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((error) => {
          console.log(error);
        });
      api
        .getMovies()
        .then((cardsSavedFilms) => {
          setSavedMovies(cardsSavedFilms.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  // Поставить лайк фильму
  function handleLikeFilm(card) {
    api
      .addCard(card)
      .then((newMovieFilm) => {
        setSavedMovies([newMovieFilm, ...savedMovies]);
      })
      .catch((error) => {
        setIsSuccess(false);
        console.log(error);
        handleErrorUnauthorized(error);
      });
  }

  // Удаление сохраненного фильма
  function handleRemoveFilm(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((error) => {
        setIsSuccess(false);
        console.log(error);
        handleErrorUnauthorized(error);
      });
  }

  // Редактирования пользователя
  function handleEditProfileInfo(userInfo) {
    api
      .setUserInfo(userInfo)
      .then((data) => {
        setInfoTooltipEditProfilePopupOpen(true);
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch((error) => {
        setInfoTooltipEditProfilePopupOpen(true);
        setIsUpdate(false);
        console.log(error);
        handleErrorUnauthorized(error);
      });
  }

  //Обработка ошибки авторизации
  function handleErrorUnauthorized(error) {
    if (error === "Error: 401") {
      handleLogoutSiteMovie();
    }
  }

  // При выходе из приложения чищу локальное хранилище с данными
  const handleLogoutSiteMovie = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.clear();
    navigate("/");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Header loggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path={"/signin"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login isLoading={isLoading} onAuthorization={handleLogin} />
                )
              }
            />
            <Route
              path={"/signup"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                    isLoading={isLoading}
                    handleRegistration={handleRegistration}
                  />
                )
              }
            />

            <Route path={"*"} element={<ProtectedRoute path="*" loggedIn={!isLoggedIn} component={NotFound} />} />

            <Route
              path={"/movies"}
              element={
                <ProtectedRoute
                  path="/movies"
                  loggedIn={isLoggedIn}
                  component={Movies}
                  handleLikeFilm={handleLikeFilm}
                  onDeleteCard={handleRemoveFilm}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path={"/saved-movies"}
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  loggedIn={isLoggedIn}
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  onDeleteCard={handleRemoveFilm}
                />
              }
            />
            <Route
              path={"/profile"}
              element={
                <ProtectedRoute
                  path="/profile"
                  loggedIn={isLoggedIn}
                  component={Profile}
                  isLoading={isLoading}
                  onUpdateUser={handleEditProfileInfo}
                  signOut={handleLogoutSiteMovie}
                />
              }
            />
          </Routes>
          <InfoTooltip
            isSuccess={isSuccess}
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay}
          />
          <InfoTooltipEditProfile
            isUpdate={isUpdate}
            isOpen={isInfoTooltipEditProfilePopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
