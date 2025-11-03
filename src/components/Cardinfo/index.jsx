import { TypeAnimation } from "react-type-animation";
import LogoCortis from "./cortis";
import LogoItzy from "./itzy";
import LogoNewJeans from "./newjeans";

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

export default CardInfo;
