import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <>
      <style>{`
            body {
        background-size: cover;
        background-position: bottom center;
        background-image: url(assets/destination/background-destination-mobile.jpg);
      }
      @media (min-width: 35rem) {
        body {
          background-position: center center;
          background-image: url(assets/destination/background-destination-tablet.jpg);
        }
      }
      @media (min-width: 45em) {
        body {
          background-image: url(assets/destination/background-destination-desktop.jpg);
        }
      }
      `}</style>
      <main className="container">
        <Link
          to="/destination=europa"
          className="large-button uppercase ff-serif text-dark bg-white"
        >
          Europa Demo
        </Link>
      </main>
    </>
  );
};
export default Destination;
