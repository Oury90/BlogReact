import Navbar from "./components/header/Nav";
import Top from "./components/top/Top";
import About from "./components/about/About";
import Band from "./components/band/Band";
import Servcice from "./components/servic/Service";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <div className="main">
        <About />
      </div>
      <Band />
      <Servcice />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
