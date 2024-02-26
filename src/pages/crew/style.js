const CrewBg = () => {
  return (
    <style>{`
            body {
        background-size: cover;
        background-position: bottom center;
        background-image: url(assets/crew/background-crew-mobile.jpg);
      }
      @media (min-width: 35rem) {
        body {
          background-position: center center;
          background-image: url(assets/crew/background-crew-tablet.jpg);
        }
      }
      @media (min-width: 45em) {
        body {
          background-image: url(assets/crew/background-crew-desktop.jpg);
        }
      }
      `}</style>
  );
};
export default CrewBg;
