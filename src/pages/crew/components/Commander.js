import CrewBg from "./style";

const Commander = () => {
  return (
    <>
      <CrewBg />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>

        <div className="dot-indicators flex">
          <button aria-selected="true">
            <span className="sr-only">The commander</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">The mission specialist</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">The pilot</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">The crew engineer</span>
          </button>
        </div>

        <article className="crew-info flow">
          <header className="flow">
            <h2
              className="uppercase ff-serif fs-600"
              style={{ color: "hsl(var(--clr-white) / 0.5)" }}
            >
              Commander
            </h2>
            <p className="uppercase ff-serif fs-700">Douglas Hurley</p>
          </header>
          <p className="text-light">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>

        <img src="assets/crew/image-douglas-hurley.png" alt="Douglas Hurley" />
      </main>
    </>
  );
};
export default Commander;
