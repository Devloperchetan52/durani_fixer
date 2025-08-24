import React from "react";
import "./App.css";

function App() {
  const isMobileDevice = () => window.innerWidth <= 768;

  const openTelegram = (e) => {
    e.stopPropagation();
    window.open("https://telegram.me/+Tt7ipTn2_Ag0NjNl", "_blank");
  };

  return (
    <div className="card" onClick={isMobileDevice() ? openTelegram : undefined}>
      <div className="box">
        {/* Profile Image */}
        <figure className="hero-image">
          <img src="/Vipin_Singh.jpg" alt="VIPIN SINGH" />
        </figure>

        {/* Heading */}
        <h1 className="title">VIPIN SINGH™</h1>

        {/* Details */}
        <div className="details">
          <p>⭕ 99% ACCURATE CRICKET TIPS ⭕</p>
          <p>⭕ IPL 2024-2025 – 74/70 PASS ⭕</p>
          <p>⭕ ALL TOSS + MATCH + SESSION ⭕</p>
          <p>⭕ Click Below to Join Now Free... ⭕</p>
        </div>

        {/* Join Telegram Button */}
        <button className="join-button" onClick={openTelegram}>
          <img src="/logo.webp" alt="Logo" className="btn-logo" />
          <span>JOIN TELEGRAM</span>
        </button>

        {/* Blinking Text */}
        <p className="blink-text">⭕ PREDICTION AVAILABLE ⭕</p>

        {/* Banner Images */}
        <div className="extra-images-vertical">
          <img src="/thehundred.jpg" alt="The Hundred" className="banner-img" />
          <img src="/cpl.jpg" alt="CPL" className="banner-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
