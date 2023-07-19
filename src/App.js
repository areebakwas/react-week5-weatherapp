
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
      <footer>
        This project was coded by Areeba A. and is {" "} 
        <a href="https://github.com/areebakwas/react-week5-weatherapp" target="_blank" rel="noreferrer">
           open-sourced on Github.
        </a>
      </footer>
      </div>
    </div>
  );
}


