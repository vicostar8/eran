import HomePage from "./components/homePage/homePage";
import NavigationBar from "./components/navigationBar/navigationBar";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
// import "./App.css";

function App() {
  // return <HomePage />;
  return (
    <div className="container-lg">
      <NavigationBar />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
