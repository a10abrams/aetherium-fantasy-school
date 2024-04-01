'use client'

import React, { useEffect } from "react";
import "../../../styles/buttons/buttons_styles.css";

const TopButton = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const up_button = document.getElementById("top-pg-btn");
      if (up_button) {
        if (window.scrollY > 20) {
          up_button.style.display = "block";
        } else {
          up_button.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div id="button-container">
        <button onClick={topFunction} id="top-pg-btn" title="Go to top">
          Top
        </button>
      </div>
    </>
  );
};

export default TopButton;
