import { useEffect, useState } from "react";
import "../css/Navbar.css";
function Navbar() {
  const [stick, setStick] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 59) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (stick === false) {
    return (
      <>
        <div className="nav-flex">
          <div className="left-nav-flex">
            <span className="rounded-button">
              <a href="/">Home</a>
            </span>
            <span className="rounded-button">
              <a href="/">About</a>
            </span>
            <span className="rounded-button">
              <a href="">Projects</a>
            </span>
          </div>
          <div className="right-nav-flex"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="nav-flex nav-sticky">
          <div className="left-nav-flex">
            <span className="rounded-button">
              <a href="/">Home</a>
            </span>
            <span className="rounded-button">
              <a href="/">About</a>
            </span>
            <span className="rounded-button">
              <a href="">Projects</a>
            </span>
          </div>
          <div className="right-nav-flex"></div>
        </div>
      </>
    );
  }
}
export default Navbar;
