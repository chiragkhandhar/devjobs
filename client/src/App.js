import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import HomePage from "./Pages/HomePage";

// Global Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
