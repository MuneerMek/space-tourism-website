import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid-container">
      <div>
        <h1 className="uppercase text-light fs-500 ff-sans-cond letter-spacing-1">
          So, you want to travel to{" "}
          <span
            className="text-white fs-900 ff-serif"
            style={{ letterSpacing: 0 }}
          >
            Space
          </span>
        </h1>
        <p className="text-light" style={{ lineHeight: "2rem" }}>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <Link
          to="/destination"
          className="large-button uppercase fs-600 ff-serif text-dark bg-white"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};
export default Home;
