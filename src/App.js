import Advance from "./components/Advance";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tiny from "./components/Tiny";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Tiny />
      <Advance />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
