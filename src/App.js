import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => (
  <>
    <div className="container">
      <header className="primary-header">
        <div></div>
        <nav>
          <ul className="primary-navigation underline-indicators flex">
            <li className="active">
              <Link
                to="/"
                className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
              >
                <span>00</span>Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
              >
                <span>01</span>Destination
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
              >
                <span>02</span>Crew
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
              >
                <span>03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);

export default App;

// Try to work with React Hooks
// this time, instead of using a stateful component
