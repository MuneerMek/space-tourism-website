import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Design system</h1>

      <section id="colors">
        <h2>
          <span>01</span> colors
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            "--gap": ".75rem 1.5rem",
          }}
        >
          <div className="grid text-white">
            <div
              className="bg-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <div>
              <p>
                <span style={{ marginRight: "2rem" }}>RGB</span> 11, 13, 23
              </p>
              <p>
                <span style={{ marginRight: "2rem" }}>HSL</span> 230°, 35%, 7%
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="bg-light text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #D0D6F9
            </div>
            <div>
              <p className="text-white">
                <span style={{ marginRight: "2rem" }}>RGB</span> 208, 214, 249
              </p>
              <p className="text-white">
                <span style={{ marginRight: "2rem" }}>HSL</span> 231°, 77%, 90%
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="bg-white text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #FFFFFF
            </div>
            <div>
              <p className="text-white">
                <span style={{ marginRight: "2rem" }}>RGB</span> 255, 255, 255
              </p>
              <p className="text-white">
                <span style={{ marginRight: "2rem" }}>HSL</span> 0°, 0%, 100%
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
