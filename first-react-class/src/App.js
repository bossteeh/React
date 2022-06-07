// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Project Navbar/Navbar"
import Banner from "./components/Project Navbar/Banner"

function App() {
  document.title = "NavBar"
  return (
    <div className="App">
      <Navbar />
      {/* <Banner /> */}
    </div>
  );
}

export default App;
