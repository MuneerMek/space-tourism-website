import DestinationBg from "./style";

const Moon = () => {
  return (
    <>
      <DestinationBg />
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <img src="assets/destination/image-moon.png" alt="the moon" />

        <div className="tab-list underline-indicators flex">
          <button
            aria-selected="true"
            className="uppercase text-light ff-sans-cond fs-300 letter-spacing-2"
          >
            Moon
          </button>
          <button
            aria-selected="false"
            className="uppercase text-light ff-sans-cond fs-300 letter-spacing-2"
          >
            Mars
          </button>
          <button
            aria-selected="false"
            className="uppercase text-light ff-sans-cond fs-300 letter-spacing-2"
          >
            Europa
          </button>
          <button
            aria-selected="false"
            className="uppercase text-light ff-sans-cond fs-300 letter-spacing-2"
          >
            Titan
          </button>
        </div>

        <article className="destination-info">
          <h2 className="uppercase text-white fs-800 ff-serif">Moon</h2>
          <p className="text-light">
            See our planet as you've never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you're there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Avg. distance
              </h3>
              <p className="uppercase ff-serif fs-500">384,400 km</p>
            </div>
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Est. travel time
              </h3>
              <p className="uppercase ff-serif fs-500">3 days</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};
export default Moon;
