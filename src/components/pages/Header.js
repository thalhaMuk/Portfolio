import React from "react";
import HeaderButton from "../layouts/HeaderButton";

const Header = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark-mode");
    document.getElementById("not-dark").classList.toggle("inverse-dark");
    document.getElementById("not").classList.toggle("inverse-dark");
    var x = document.getElementsByClassName("img-pro");
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.toggle("inverse-dark");
    }

    if (document.documentElement.classList.contains("dark-mode"))
      localStorage.setItem("mode", "Dark");
    else localStorage.setItem("mode", "Light");
  };

  return (
    <div>
      <div className="Header">
        <h1>Hi! I'm Thalha Muksith</h1>
        <p className="line-1 anim-typewriter">Aspiring Software Engineer.</p>
        <label className="switch">
          <input id="mode-switch" onClick={toggleDarkMode} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <HeaderButton />
      </div>
    </div>
  );
};

export default Header;
