import DestinationBg from "./style";

const Moon = () => {
  return (
    <>
      <DestinationBg />
      <main id="main" className="grid-containeraaa grid-container--destination">
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

        <article>
          <h2 className="uppercase text-white fs-900 ff-serif">Moon</h2>

          <p className="text-light">
            See our planet as you've never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you're there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <h3>Avg. distance</h3>
          <p>384,400 km</p>

          <h3>Est. travel time</h3>
          <p>3 days</p>
        </article>
      </main>
    </>
  );
};
export default Moon;
