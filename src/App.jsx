import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1 className="text-7xl text-purple-600">Hello form tailwind CSS</h1>
      </div>
      <PriceList></PriceList>
    </>
  );
}

export default App;
