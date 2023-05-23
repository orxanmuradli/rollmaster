import "./home.css";
import insta from "../../../assets/insta.png";
import face from "../../../assets/face.png";
import arrow from "../../../assets/arrow-right.png";
import darkmood from "./../../../assets/darkmood.png";


import wolt from "../../../assets/wolt.png";
function Home() {
  return (
    <section className="banner">
      <div className="home">
        <div className="headerContainer">
          <h1>
            Lorem ipsum dolor sit amet consectetur. Egestas quis suscipit leo
            elementum amet.
          </h1>
          {/* <div className="kecid">
            <button> MENYUYA KEÇİD ET </button>

            <div>
              {" "}
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z"
                  fill="white"
                />
              </svg>
            </div>
          </div> */}
          <div className="header_link">
            <a className="link_rectangle" href="#">MENYUYA KEÇİD ET <img className="arrow-icons" src={arrow} alt="" /></a>
          </div>
        </div>
      </div>

      <div className="social">
        <div className="left">
          <div className="lefting1">
            {" "}
            <p>10:00 - 23:00</p>
          </div>
          <div className="righting2">
            {" "}
            <span>+994 50 736 56 16</span>
          </div>
        </div>

        <div className="right">
          <div className="insta">
            <img src={darkmood} alt="" />
          </div>
          <div className="face">
            <img src={insta} alt="" />
          </div>

          <div className="wolt">
            <img src={face} alt="" />
          </div>
          <div className="content">
            <div className="bolt">
              <img src={wolt} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="lorems">
        <h1>
          Lorem ipsum <span className="red">dolor sit amet </span>consectetur.
          Egestas quis suscipit leo elementum amet.
        </h1>
      </div>


      
    </section>
    
  );
}

export default Home;
