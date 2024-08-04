import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
  };

  return (
    <section className="timeline_area section_padding_130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          {/* Section Heading*/}
          <div className="section_heading text-center">
            <h2>My Journey</h2>
            <div className="line" />
          </div>
        </div>
      </div>
      <div className="grid">
      <svg
        className="grid-svg"
        xmlns="http://www.w3.org/2000/svg"
        width={982}
        height={786}
        viewBox="0 0 982 786"
        fill="none"
      >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V 0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V 401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V 258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V 257H347.5V116L206 116ZM348.5 116V257H490V116H348.5ZM206 400V258H347.5V400H206ZM348.5 258V400H490V258H348.5Z"
        fill="url(#paint0_radial_1_8)"
      />
    <defs>
      <radialGradient
        id="paint0_radial_1_8"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)"
      >
        <stop stopColor="white" stopOpacity="0.3" />
        <stop offset={1} stopColor="#000" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
  <div className="blur" />
    </div>
      <div className="row">
        <div className="col-12">
          {/* Timeline Area*/}
          <div className="apland-timeline-area">
            {/* Single Timeline Content*/}
            <div className="single-timeline-area">
              <div
                className="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInLeft"
                }}
              >
                <p>2024</p>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft"
                    }}
                  >
                    <div className="timeline-icon">
                      <i className="fa fa-address-card" aria-hidden="true" />
                    </div>
                    <div className="timeline-text">
                      <h6>University of Toronto</h6>
                      <p>
                        Specialized in AI and ML and completed my third year at the UofT
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInLeft"
                    }}
                  >
                    <div className="timeline-icon">
                      <i className="fa fa-archive" aria-hidden="true" />
                    </div>
                    <div className="timeline-text">
                      <h6>Amazon</h6>
                      <p>
                        Interning at Amazon working on data processing systems used worldwide
                      </p>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
            {/* Single Timeline Content*/}
            <div className="single-timeline-area">
              <div
                className="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInLeft"
                }}
              >
                <p>2023</p>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft"
                    }}
                  >
                    <div className="timeline-icon">
                      <i className="fa fa-briefcase" aria-hidden="true" />
                    </div>
                    <div className="timeline-text">
                      <h6>University of Toronto</h6>
                      <p>
                        Majored in Computer Science and completed second year at the UofT
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInLeft"
                    }}
                  >
                    <div className="timeline-icon">
                      <i className="fa fa-desktop" aria-hidden="true" />
                    </div>
                    <div className="timeline-text">
                      <h6>Groupe Canam</h6>
                      <p>
                      Architected a full-stack ERP system and visualizer for Groupe Canam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Timeline Content*/}
            <div className="single-timeline-area">
              <div
                className="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInLeft"
                }}
              >
                <p>2022</p>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft"
                    }}
                  >
                    <div className="timeline-icon">
                      <i className="fa fa-id-card" aria-hidden="true" />
                    </div>
                    <div className="timeline-text">
                      <h6>University of Toronto</h6>
                      <p>
                        Completed general first year of Computer Science at the UofT
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
