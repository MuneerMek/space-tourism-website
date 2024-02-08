import { Link, Route, Routes } from "react-router-dom";

const Destination = () => {
  return (
    <main className="container">
      <p>Destination</p>
      {/* ----------------------------- */
      /* Page specific backgrounds     */
      /* ----------------------------- */}
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
    </main>
  );
};
export default Destination;
