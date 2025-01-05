import "./App.css";
import Footer from "./components/Footer";
import ContactForm from "./components/Main/ContactForm";
import Home from "./components/Main/Home";
import Services from "./components/Main/Services";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="w-full h-[100vh]">
      <Navigation />
      <Home />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
