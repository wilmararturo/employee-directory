import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
//import EmployeeDirectory from "./pages/EmployeeDirectory";
import About from "./pages/About";
import Card from "./components/Card";

function App() {
  return (
    <Router>
      <div>
        <Title />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/card" component={Card} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
