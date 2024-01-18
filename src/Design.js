import React from "react";

const Design = () => {
  return (
    <div className="container">
      <h1 className="uppercase">Design system</h1>

      <section className="flow" id="colors" style={{ margin: "4rem 0" }}>
        <h2 className="numbered-title">
          <span>01</span> colors
        </h2>
        <div className="flex">
          <div className="flow" style={{ flexGrow: 1 }}>
            <div
              className="bg-dark text-white ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-light">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-light">HSL</span> 230°, 35%, 7%
            </p>
          </div>
          <div className="flow" style={{ flexGrow: 1 }}>
            <div
              className="bg-light text-dark ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #D0D6F9
            </div>
            <p>
              <span className="text-light">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-light">HSL</span> 231°, 77%, 90%
            </p>
          </div>
          <div className="flow" style={{ flexGrow: 1 }}>
            <div
              className="bg-white text-dark ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #FFFFFF
            </div>
            <p>
              <span className="text-light">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-light">HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>

      <section id="typography" style={{ margin: "4rem 0" }}>
        <h2 className="numbered-title">
          <span>02 </span>Typography
        </h2>
        <div className="flex">
          <div
            className="flow"
            style={{ flexBasis: "100%", "--flow-space": "4rem" }}
          >
            <div>
              <p className="text-light">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 ff-serif uppercase">Earth</p>
            </div>
            <div>
              <p className="text-light">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 ff-serif uppercase">Venus</p>
            </div>
            <div>
              <p className="text-light">Heading 3 - Bellefair Regular - 56px</p>
              <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-light">Heading 4 - Bellefair Regular - 32px</p>
              <p className="fs-600 ff-serif uppercase">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-light">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-light fs-500 ff-sans-cond letter-spacing-1 uppercase">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div
            className="flow"
            style={{ flexBasis: "100%", "--flow-space": "4rem" }}
          >
            <div>
              <p className="text-light">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="fs-500 uppercase">384,400 km</p>
            </div>
            <div>
              <p className="text-light">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="fs-200 ff-sans-cond letter-spacing-3 uppercase">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-light">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="fs-300 ff-sans-cond letter-spacing-2 uppercase">
                Europa
              </p>
            </div>
            <div>
              <p style={{ color: "hsl(var(--clr-light) / .5)" }}>Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flow" id="interactive-elements">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>
        {/* navigation */}
        <div>
          <nav>
            <ul className="primary-navigation underline-indicators flex">
              <li className="active">
                <a
                  className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
                  href="#"
                >
                  <span>00</span>Active
                </a>
              </li>
              <li>
                <a
                  className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
                  href="#"
                >
                  <span>01</span>Hovered
                </a>
              </li>
              <li>
                <a
                  className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
                  href="#"
                >
                  <span>02</span>Idle
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex">
          <div style={{ marginTop: "5rem" }}>
            {/* <!-- explore button --> */}
            <a
              href="#"
              className="large-button uppercase fs-600 ff-serif text-dark bg-white"
            >
              Explore
            </a>
          </div>

          <div style={{ marginBottom: "50vh" }}>
            {/* <!-- Tabs --> */}
            <div className="tab-list underline-indicators flex">
              <button
                aria-selected="true"
                className="uppercase text-light bg-dark ff-sans-cond fs-300 letter-spacing-2"
              >
                Moon
              </button>
              <button
                aria-selected="false"
                className="uppercase text-light bg-dark ff-sans-cond fs-300 letter-spacing-2"
              >
                Mars
              </button>
              <button
                aria-selected="false"
                className="uppercase text-light bg-dark ff-sans-cond fs-300 letter-spacing-2"
              >
                Europa
              </button>
            </div>
            {/* <!-- Dots --> */}

            {/* <!-- Numbers --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
