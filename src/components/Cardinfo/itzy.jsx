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

export default LogoItzy;