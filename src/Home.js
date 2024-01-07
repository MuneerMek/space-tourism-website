import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Design system</h1>

      <div className="bg-light text-dark" style={{ padding: "1rem" }}>
        light blue bg, with dark text
      </div>

      <div className="bg-white text-dark" style={{ padding: "1rem" }}>
        white bg, with dark text
      </div>

      <div
        className="text-white"
        style={{
          padding: "1rem",
          backgroundColor: "hsl(var(--clr-light) / .2)",
        }}
      >
        light blue bg with a 20% alpha and white text
      </div>
    </div>
  );
};

export default Home;
