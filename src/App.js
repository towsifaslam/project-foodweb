import Category from "./component/Category";
import Food from "./component/Food";
import Headling from "./component/Headling";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Headling />
      <Food />
      <Category />
    </div>
  );
}

export default App;
