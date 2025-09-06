import React from "react";
import "./App.css";

function App() {
  const isMobileDevice = () => window.innerWidth <= 768;

  const openTelegram = (e) => {
    e.stopPropagation();
    window.open("https://telegram.me/+1DA0C9zeFwwyMjQ1", "_blank");
  };

  return (
    <div className="card" onClick={isMobileDevice() ? openTelegram : undefined}>
      <div className="box">
        {/* Profile Image */}
        <figure className="hero-image">
          <img src="/duranifixer.jpg" alt="duranifixer" />
        </figure>

        {/* Heading */}
        <h1 className="title">DURANI FIXER™</h1>

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
          <img src="/Aisacup.jpg" alt="The Hundred" className="banner-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
