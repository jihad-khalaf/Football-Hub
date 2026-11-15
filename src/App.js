import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Club from "./pages/Club";
import Matches from "./pages/Matches";
import Players from "./pages/Players";
import News from "./pages/News";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import ComingSoon from "./pages/ComingSoon";

function App() {
  // HOOK: the theme word ('dark' or 'light'), saved in localStorage
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // the class becomes "App dark" or "App light" — App.css sets the colours for each
  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* dynamic route: ":id" can be any club, e.g. /clubs/real-madrid */}
            <Route path="/clubs/:id" element={<Club />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            {/* "*" matches any other address, so unknown pages show "Page not found" */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
