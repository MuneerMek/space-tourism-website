import { Link } from "react-router-dom";
// import "./styles.css";

const Home = () => {
  return (
    <main id="main" className="grid-container grid-container--home">
      <div>
        <h1 className="uppercase text-light fs-500 ff-sans-cond letter-spacing-1">
          So, you want to travel to
          <span
            className="text-white fs-900 ff-serif d-block"
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
          className="large-button uppercase ff-serif text-dark bg-white"
        >
          Explore
        </Link>
      </div>
      {/* ----------------------------- */
      /* Page specific backgrounds     */
      /* ----------------------------- */}
      <style>{`
            body {
        background-size: cover;
        background-position: bottom center;
        background-image: url(assets/home/background-home-mobile.jpg);
      }
      @media (min-width: 35rem) {
        body {
          background-position: center center;
          background-image: url(assets/home/background-home-tablet.jpg);
        }
      }
      @media (min-width: 45em) {
        body {
          background-image: url(assets/home/background-home-desktop.jpg);
        }
      }
      `}</style>
    </main>
  );
};
export default Home;
