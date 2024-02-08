const Technology = () => {
  return (
    <main className="container">
      <p>Technology</p>
      {/* ----------------------------- */
      /* Page specific backgrounds     */
      /* ----------------------------- */}
      <style>{`
            body {
        background-size: cover;
        background-position: bottom center;
        background-image: url(assets/technology/background-technology-mobile.jpg);
      }
      @media (min-width: 35rem) {
        body {
          background-position: center center;
          background-image: url(assets/technology/background-technology-tablet.jpg);
        }
      }
      @media (min-width: 45em) {
        body {
          background-image: url(assets/technology/background-technology-desktop.jpg);
        }
      }
      `}</style>
    </main>
  );
};
export default Technology;
