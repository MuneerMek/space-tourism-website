import TechBg from "./style";

const Technology = () => {
  const keyDownLeft = 37;
  const keyDownRight = 39;
  let tabFocus = 0;
  const showContent = (parent, content) => {
    parent.querySelector(`#${content}`).classList.remove("hidden");
  };
  const changeTabFocus = (e) => {
    const tabList = document.querySelector('[role="tablist"]');
    const tabs = tabList.querySelectorAll('[role="tab"]');
    // change the tabindex of the current tab to -1
    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === keyDownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
      } else if (e.keyCode === keyDownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }
    }
    // change the tabindex of the next tab to 0
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  };
  const tabClick = () => {
    const tabList = document.querySelector('[role="tablist"]');
    const tabs = tabList.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const targetTab = e.target;
        const targetPanel = targetTab.getAttribute("aria-controls");
        const targetImage = targetTab.getAttribute("data-image");

        const tabContainer = targetTab.parentNode;
        const mainContainer = tabContainer.parentNode;

        tabContainer
          .querySelector("[aria-selected='true']")
          .setAttribute("aria-selected", false);

        targetTab.setAttribute("aria-selected", true);

        mainContainer.querySelectorAll("[role='tabpanel']").forEach((panel) => {
          panel.classList.add("hidden");
        });

        showContent(mainContainer, targetPanel);
        showContent(mainContainer, targetImage);
      });
    });
  };
  return (
    <>
      <TechBg />
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <picture id="moon-image" role="tabpanel">
          <source
            srcSet="assets/destination/image-moon.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-moon.png" alt="the moon" />
        </picture>
        <picture id="mars-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/destination/image-mars.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-mars.png" alt="the planet mars" />
        </picture>
        <picture id="europa-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/destination/image-europa.webp"
            type="image/webp"
          />
          <img
            src="assets/destination/image-europa.png"
            alt="the planet europa"
          />
        </picture>
        <picture id="titan-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/destination/image-titan.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-titan.png" alt="the moon titan" />
        </picture>

        <div
          className="numbered-indicators ff-serif fs-600 flex"
          role="tablist"
          aria-label="destination list"
          onKeyDown={changeTabFocus}
          // onMouseUp={tabClick}
        >
          <button
            aria-selected="true"
            role="tab"
            tabIndex={0}
            aria-controls="1-tab"
            data-image="1-image"
          >
            <span>1</span>
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="2-tab"
            data-image="2-image"
          >
            <span>2</span>
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="3-tab"
            data-image="3-image"
          >
            <span>3</span>
          </button>
        </div>

        <article className="tech-info flow" id="1-tab" role="tabpanel">
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

        <article
          className="hidden crew-info flow"
          id="specialist-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2
              className="uppercase ff-serif fs-600"
              style={{ color: "hsl(var(--clr-white) / 0.5)" }}
            >
              Mission Specialist
            </h2>
            <p className="uppercase ff-serif fs-700">Mark Shuttleworth</p>
          </header>
          <p className="text-light">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </article>

        <article
          className="hidden crew-info flow"
          id="pilot-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2
              className="uppercase ff-serif fs-600"
              style={{ color: "hsl(var(--clr-white) / 0.5)" }}
            >
              Pilot
            </h2>
            <p className="uppercase ff-serif fs-700">Victor Glover</p>
          </header>
          <p className="text-light">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </article>

        <article
          className="hidden crew-info flow"
          id="engineer-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2
              className="uppercase ff-serif fs-600"
              style={{ color: "hsl(var(--clr-white) / 0.5)" }}
            >
              Flight Engineer
            </h2>
            <p className="uppercase ff-serif fs-700">Anousheh Ansari</p>
          </header>
          <p className="text-light">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </article>

        {/* <body>
  00 Home 01 Destination 02 Crew 03 Technology 03 Space launch 101 1 2 3 The
  terminology... Launch vehicle A launch vehicle or carrier rocket is a
  rocket-propelled vehicle used to carry a payload from Earth's surface to
  space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most
  powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring
  sight on the launch pad!
</body>
<body>
  00 Home 01 Destination 02 Crew 03 Technology 03 Space launch 101 1 2 3 The
  terminology... Spaceport A spaceport or cosmodrome is a site for launching (or
  receiving) spacecraft, by analogy to the seaport for ships or airport for
  aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
  situated to take advantage of the Earth’s rotation for launch.
</body>
<body>
  00 Home 01 Destination 02 Crew 03 Technology 03 Space launch 101 1 2 3 The
  terminology... Space capsule A space capsule is an often-crewed spacecraft
  that uses a blunt-body reentry capsule to reenter the Earth's atmosphere
  without wings. Our capsule is where you'll spend your time during the flight.
  It includes a space gym, cinema, and plenty of other activities to keep you
  entertained.
</body>
 */}
      </main>
    </>
  );
};
export default Technology;
