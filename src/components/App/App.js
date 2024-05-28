import "./App.css";

// Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Profile from "../Profile/Profile";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// Hooks and Routes
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

//Utils
import { getForcastWeather, parseWeatherData } from "../../utils/weatherApi";
import auth from "../../utils/auth";
import api from "../../utils/api";

// Contexts
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  //Modal Handlers
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };

  //Authorization Handlers

  const handleSignUp = ({ email, password, name, avatar }) => {
    if (!email || !password) {
      return alert("Please enter an email and password");
    }
    auth
      .signUp({ email, password, name, avatar })
      .then(() => {
        handleSignUpModal({ email, password, name, avatar });
        handleCloseModal();
        setCurrentUser({ email, password, name, avatar });
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = ({email, password}) => {
    auth
      .login({ email, password })
      .then((res) => {
        handleLoginModal({ email, password });
        localStorage.setItem("jwt", res.token);
        handleCloseModal();
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  const handleEditProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    auth
      .editProfile({ name, avatar }, token)
      .then((res) => {
        handleEditProfileModal({ name, avatar });
        setCurrentUser(res);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleSwitch = () => {
    activeModal === "login" 
    ? setActiveModal("signup")
    : setActiveModal("login");
  };

  //Item Handlers

  const handleDeleteCard = (selectedCard) => {
    const token = localStorage.getItem("jwt");
    api
      .deleteItem(selectedCard._id, token)
      .then(() => {
        const postDelete = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });
        setClothingItems(postDelete);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleItemSubmit = ({ name, weather, imageUrl }) => {
    const token = localStorage.getItem("jwt");
    api
      .addItem({ name, weather, imageUrl }, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = (id, isLiked ) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token) 
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  // useEffect APIs
  useEffect(() => {
    api
      .getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const weatherData = parseWeatherData(data);
        setTemp(weatherData);
      })
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   if (!activeModal) return; // stop the effect not to add the listener if there is no active modal
  //   const handleEscClose = (e) => {
  //     // define the function inside useEffect not to lose the reference on rerendering
  //     if (e.key === "Escape") {
  //       handleCloseModal();
  //     }
  //   };
  //   document.addEventListener("keydown", handleEscClose);
  //   return () => {
  //     // don't forget to add a clean up function for removing the listener
  //     document.removeEventListener("keydown", handleEscClose);
  //   };
  // }, [activeModal]); // watch activeModal here

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            temp={temp}
            handleSignUp={handleSignUpModal}
            handleLogin={handleLoginModal}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route 
            exact
              path="/"
              element={
                <Main
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  isLoggedIn={isLoggedIn}
                  onCardLike={handleCardLike}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  clothingItems={clothingItems}
                  onSelectCard={handleSelectedCard}
                  handleCreateModal={handleCreateModal}
                  handleEditProfileModal={handleEditProfileModal}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  onCardLike={handleCardLike}
                />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              onSubmit={handleLogin}
              isOpen={activeModal === "login"}
              switchToSignup={handleSwitch}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              onSubmit={handleSignUp}
              isOpen={activeModal === "signup"}
              switchToLogin={handleSwitch}
            />
          )}
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              deleteCard={handleDeleteCard}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              handleEditProfile={handleEditProfile}
              isOpen={activeModal === "edit"}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
