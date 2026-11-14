import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Club from './pages/Club';
import ComingSoon from './pages/ComingSoon';

function App() {
  // HOOK: the theme word ('dark' or 'light'), saved in localStorage
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // the class becomes "App dark" or "App light" — App.css sets the colours for each
  return (
    <div className={`App ${theme}`}>
      <Router>
        <NavBar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* dynamic route: ":id" can be any club, e.g. /clubs/real-madrid */}
            <Route path="/clubs/:id" element={<Club />} />
            {/* pages that are not built yet show a temporary page */}
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
