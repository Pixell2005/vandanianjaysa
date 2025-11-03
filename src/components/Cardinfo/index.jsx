import React from "react";
import { TypeAnimation } from "react-type-animation";

const CardInfo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-6 py-16 bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl w-full bg-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl p-10 gap-10 text-gray-800">
        {/* Kiri */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-pink-700 mb-3">K-Pop Idol Card</h1>

          {/* Efek mengetik */}
          <TypeAnimation
            sequence={[
              "Temukan informasi lengkap tentang idol favoritmu! 💜",
              2000,
              "Kenali CORTIS, ITZY, dan NewJeans lebih dekat! 🎶",
              2000,
              "Jelajahi era dan konsep K-Pop terkini! 🌟",
              2000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            className="block text-lg font-semibold text-pink-600 mb-3"
          />

          <p className="text-lg leading-relaxed">
            Dari grup, konsep, hingga era terbaru mereka — semuanya ada di sini 💜
          </p>
        </div>

        {/* Kanan */}
        <div className="flex-2 flex flex-col md:flex-row gap-6 w-full md:w-auto">
          <LogoCortis />
          <LogoItzy />
          <LogoNewJeans />
        </div>
      </div>
    </div>
  );
};

// 🌸 Komponen CORTIS
const LogoCortis = () => {
  return (
    <div className="flex-1 bg-white/30 rounded-xl p-5 text-center shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src="images/cortis.jpg"
        alt="CORTIS"
        className="w-full h-28 object-contain rounded-md mb-3"
      />
      <p className="font-bold text-pink-700">CORTIS ✨</p>
      <p className="text-sm leading-relaxed">
        “CORTIS adalah grup idol K-Pop pendatang baru dari generasi kelima yang dikenal
        dengan konsep futuristik dan elegan. Mereka menggabungkan suara elektronik modern
        dengan koreografi dinamis, menciptakan identitas yang segar di dunia K-Pop.
        Dengan visual memukau dan pesan tentang keberanian serta inovasi,
        CORTIS mulai menarik perhatian fans global sejak debut mereka.”
      </p>
    </div>
  );
};

// 💜 Komponen ITZY
const LogoItzy = () => {
  return (
    <div className="flex-1 bg-white/30 rounded-xl p-5 text-center shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src="images/itzy.jpg"
        alt="ITZY"
        className="w-full h-28 object-contain rounded-md mb-3"
      />
      <p className="font-bold text-pink-600">ITZY 💜</p>
      <p className="text-sm leading-relaxed">
        ITZY akan comeback pada <strong>10 November 2025</strong> dengan mini album{" "}
        <em>“TUNNEL VISION.”</em> Comeback ini menghadirkan konsep yang lebih gelap dan
        karismatik, menampilkan sisi baru dari para member dengan gaya yang kuat dan penuh
        percaya diri.
      </p>
    </div>
  );
};

// 💙 Komponen NEWJEANS
const LogoNewJeans = () => {
  return (
    <div className="flex-1 bg-white/30 rounded-xl p-5 text-center shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src="images/newjeans.jpg"
        alt="NewJeans"
        className="w-full h-28 object-contain rounded-md mb-3"
      />
      <p className="font-bold text-blue-600">NewJeans 🩵</p>
      <p className="text-sm leading-relaxed">
        NewJeans terus menarik perhatian dunia dengan konsep Y2K dan gaya fresh yang
        membedakan mereka dari generasi lain. Dengan musik yang catchy dan visual
        retro-modern, NewJeans sukses membawa nuansa baru dalam industri K-Pop dan
        memperluas pengaruh global mereka.
      </p>
    </div>
  );
};

export default CardInfo;
