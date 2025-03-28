import "./App.css";

function App() {
  const isMobileDevice = () => {
    return window.innerWidth <= 768; // Adjust the threshold as needed
  };

  const openTelegram = () => {
    window.open("https://telegram.me/+qfF3nMRqEtNhZTg1", "_blank");
  };

  return (
    <div className="card" onClick={isMobileDevice() ? openTelegram : null}>
      <div className="box">
        <div class="wrap">
          <div class="content content1">
            <p class="blink">⭕ 𝟭𝟬𝟬% 𝗔𝗖𝗖𝗨𝗥𝗔𝗖𝗬 𝗜𝗡 𝗜𝗣𝗟 𝟮𝟬𝟮𝟓 𝐓𝐈𝐋𝐋 𝐍𝐎𝐖 ⭕</p>
          </div>
        </div>
        <button class="custom-btn btn-11">JOIN TELEGRAM</button>
        <figure id="person">
          <img src="/RathodSir.jpg" alt="RATHOD" />
        </figure>
        <h1
          className="text"
          style={{
            color: "white",
            display: "inline-block",
            margin: 0,
            fontSize: "1.5rem",
          }}
        >
          RATHOD SIR™
        </h1>
        <div className="paradiv">
          <p id="text" style={{ margin: 0, padding: 0 }}>
            👑 𝗞𝗜𝗡𝗚 𝗞𝗢𝗛𝗟𝗜'𝗦 𝗕𝗘𝗦𝗧 𝗙𝗥𝗜𝗘𝗡𝗗 👑
          </p>
        </div>
        <p className="detail">⭕𝗜𝗣𝗟 𝟮𝟬𝟮𝟒 - 𝟳𝟮/𝟳𝟰 𝗣𝗔𝗦𝗦✅ ⭕ </p>
        <p className="detail">⭕ 𝗙𝗨𝗟𝗟 𝗙𝗜𝗫𝗘𝗗 𝗜𝗣𝗟 𝟮𝟬𝟮𝟓 ⭕</p>
        <p className="detail">⭕ 𝗔𝗟𝗟 𝗧𝗢𝗦𝗦 + 𝗠𝗔𝗧𝗖𝗛 + 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 ⭕</p>
        <p className="detail">⭕ 𝗣𝗨𝗡𝗧𝗘𝗥 𝗙𝗥𝗜𝗘𝗡𝗗𝗟𝗬 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 ⭕</p>
        <div className="item button-pulse">
          <button className="button">
            <img src="logo.webp" alt="Logo" />
            <div className="join">&nbsp;JOIN TELEGRAM</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
