const Europa = () => {
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
      <main id="main" className="container">
        01 Pick your destination Moon Mars Europa Titan Europa The smallest of
        the four Galilean moons orbiting Jupiter, Europa is a winter lover's
        dream. With an icy surface, it's perfect for a bit of ice skating,
        curling, hockey, or simple relaxation in your snug wintery cabin. Avg.
        distance 628 mil. km Est. travel time 3 years
      </main>
    </>
  );
};
export default Europa;
