//import logo from "../../logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { 
  getForcastWeather,
  parseWeatherData
} from "../../utils/weatherApi";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../RegisterModal/RegisterModal";
import auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { 
  deleteItem, 
  getItems, 
  addItem, 
  checkResponse, 
  getUser,
} from "../../utils/api"

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

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegister = ({ email, password, name, avatar }) => {
    auth
      .register({ email, password, name, avatar })
      .then((data) => {
        handleLoginSubmit({ email, password });
        console.log(data);
        handleCloseModal();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleCurrentUser = () => {
    const jwt = localStorage.getItem("jwt");
    auth
      .getCurrentUser(jwt)
      .then(({ name, avatar, email, _id }) => {
        setIsLoggedIn(true);
        setCurrentUser({ name, avatar, email, _id });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    handleCurrentUser(userData);
  };

  const handleLoginSubmit = ({ email, password }) => {
    auth
      .login({ email, password })

      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleLogin(res);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAddItem = ({name, imageUrl, weather}) => {
    addItem({name, imageUrl, weather})
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteCard = (item) => {
    deleteItem(item)
      .then(() => {
        setClothingItems(clothingItems.filter((cards) => cards._id !== item._id));
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

    //handle toggleswitch

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  // handle redirect user 

  useEffect(() => {
    getItems()
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

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal
    const handleEscClose = (e) => {  // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {  // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);  // watch activeModal here


  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <Header onCreateModal={handleCreateModal} temp={temp} />
      <Switch>
        <Route exact path="/">
          <Main
            weatherTemp={temp}
            onSelectCard={handleSelectedCard}
            clothingItems={clothingItems}
          />
        </Route>
        {/* Wrap Ducks in ProtectedRoute and pass isLoggedIn as a prop. */}
        <Route path="/profile">
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Profile
              clothingItems={clothingItems}
              handleCreateModal={handleCreateModal}
              onSelectCard={handleSelectedCard}
            />
          </ProtectedRoute>
        </Route>
      </Switch>
      <Footer />
      {activeModal === "create" && (
        <AddItemModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "create"}
          onAddItem={onAddItem}
        />
      )}
      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          handleDeleteCard={handleDeleteCard}
        />
      )}
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
