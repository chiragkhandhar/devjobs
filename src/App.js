import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";

// Global Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/description/:id" component={DetailsPage} />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
