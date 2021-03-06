import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/about" component={About} />
          <Route exact path={["/search", "/"]} component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
