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

export default LogoCortis;