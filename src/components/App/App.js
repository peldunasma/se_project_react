import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Weathercard from "../WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header/>
      <main className="main">
        <Weathercard day={false} type='sunny'/>
        <section id='card-section'>card section</section>
      </main>
    </div>
  );
}

export default App;
