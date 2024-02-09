import Europa from "./components/Europa";

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
      <Europa />
    </>
  );
};
export default Destination;
