import React from "react";
import "./CardInfo.css";

function CardInfo() {
  return (
    <div className="cardinfo">
      <div className="cardinfo-content">
        <h1>K-Pop Idol Card</h1>
        <p>
          Temukan informasi lengkap tentang idol favoritmu!  
          Dari grup, konsep, hingga era terbaru mereka — semuanya ada di sini 💜
        </p>

        <Logo />
        <TypeEffect />
        <Evolution />
      </div>
    </div>
  );
}

// Komponen Logo
function Logo() {
  return (
    <div className="card-section logo-section">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Blackpink_logo.svg"
        alt="K-Pop Logo"
      />
      <p className="logo-caption">BLACKPINK ✨</p>
    </div>
  );
}

// Komponen TypeEffect
function TypeEffect() {
  return (
    <div className="card-section type-effect">
      <h2>✨ Concept Type ✨</h2>
      <ul>
        <li>Girl Crush</li>
        <li>Elegant</li>
        <li>Powerful</li>
      </ul>
    </div>
  );
}

// Komponen Evolution
function Evolution() {
  return (
    <div className="card-section evolution">
      <h2>🌸 Evolution Era</h2>
      <div className="era-list">
        <div className="era-card">
          <h3>Debut Era</h3>
          <p>Boombayah (2016)</p>
        </div>
        <div className="era-card">
          <h3>Global Stardom</h3>
          <p>DDU-DU DDU-DU (2018)</p>
        </div>
        <div className="era-card">
          <h3>World Tour Era</h3>
          <p>Born Pink (2022)</p>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
