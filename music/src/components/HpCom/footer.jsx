import React, { useRef, useEffect } from "react";
import { debounce } from "lodash";
import { ReactComponent as Icon } from "../assets/square-caret-up-solid.svg";
function Header() {
  const yturl = "https://www.youtube.com/@nyukonmusic1958/featured";
  const elementRef = useRef(null);
  useEffect(() => {
    const handleScroll = debounce(() => {
      const element = elementRef.current;
      const scrollPosition = window.scrollY || window.pageYOffset;
      const elementPosition = element.getBoundingClientRect();

      // Calculate the desired scroll position at which to add the class
      const desiredScrollPosition =
        elementPosition.top - window.innerHeight / 2;

      if (scrollPosition >= desiredScrollPosition) {
        // element.classList.add('animate-class');
        element.classList.add("animate__animated");
        element.classList.add("animate__bounceInLeft");
        // element.style.display="block";
        // element.style.animation = "showup 3s forwards";
      } else {
        // element.classList.remove('animate-class');
        element.classList.remove("animate__animated");
        element.classList.remove("animate__bounceInLeft");
      }
    }, 300); // Adjust the debounce delay (in milliseconds) to control the frequency of class addition

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Cancel the debounce on component unmount
    };
  }, []);
  return (
    <>
      <footer>
        <ul style={{ paddingLeft: "unset" }} ref={elementRef}>
          <a target="_blank" rel="noreferrer" href={yturl}>
            入魂音樂yt
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://soundcloud.com/haruki-dj?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          >
            soundcloud
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:nyukonmusic@gmail.com"
          >
            信箱
          </a>
        </ul>
        <div class="icon">
          <a href="#music">
            <Icon
              className="toup"
              style={{ width: "40px", height: "40px", color: "white" }}
            ></Icon>
          </a>
        </div>
      </footer>
    </>
  );
}
export default Header;
