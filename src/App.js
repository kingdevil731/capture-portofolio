import AboutUs from "./pages/AboutUs";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Components
import Nav from "./components/Nav";
// Pages
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Pages
import MovieDetails from "./pages/MovieDetails";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animate
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route path="/work" component={OurWork} exact />
          <Route path="/work/:id" component={MovieDetails} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
