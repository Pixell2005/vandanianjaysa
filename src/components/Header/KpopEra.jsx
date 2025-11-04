import { motion } from "framer-motion";

// ✅ Tambahkan "export" di depan kpopEras agar bisa diimpor dari komponen lain
export const kpopEras = [
  {
    gen: "1st Generation (1990s - early 2000s)",
    idols: ["H.O.T", "S.E.S", "BoA", "Shinhwa"],
    img: "/images/gen1.jpg",
    desc: "Awal mula K-Pop modern dimulai. Musik masih dipengaruhi pop barat, namun mulai membentuk identitas unik Korea.",
  },
  {
    gen: "2nd Generation (2006 - 2012)",
    idols: ["Girls' Generation", "BIGBANG", "Super Junior", "Wonder Girls"],
    img: "/images/gen2.jpg",
    desc: "K-Pop memasuki era global. Grup-grup besar mendominasi dan fandom mulai terbentuk di seluruh dunia.",
  },
  {
    gen: "3rd Generation (2013 - 2018)",
    idols: ["BTS", "EXO", "BLACKPINK", "TWICE"],
    img: "/images/gen3.jpg",
    desc: "K-Pop menjadi fenomena dunia. Platform digital dan YouTube membantu idol menembus pasar internasional.",
  },
  {
    gen: "4th Generation (2019 - 2023)",
    idols: ["Stray Kids", "ITZY", "TXT", "Aespa"],
    img: "/images/gen4.jpg",
    desc: "Fokus pada kreativitas dan teknologi. Banyak grup menggunakan konsep futuristik dan performance yang kuat.",
  },
  {
    gen: "5th Generation (2024 - now)",
    idols: ["NewJeans", "RIIZE", "ILLIT", "ZEROBASEONE"],
    img: "/images/gen5.jpg",
    desc: "Era baru K-Pop dengan pendekatan AI, desain minimalis, dan koneksi langsung dengan fans lewat platform digital.",
  },
];

const KpopEra = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-purple-100/20 via-pink-100/20 to-white text-center">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-12 drop-shadow-[0_0_8px_white]">
        K-Pop Generations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
        {kpopEras.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/30 hover:scale-105 transition-transform"
            whileHover={{ boxShadow: "0 0 25px rgba(255,180,255,0.6)" }}
          >
            <img
              src={item.img}
              alt={item.gen}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-purple-700 drop-shadow-sm">
                {item.gen}
              </h3>

              <p className="text-sm mb-3">
                <strong className="text-pink-600 font-semibold">Famous Idols:</strong>{" "}
                <span className="text-gray-700">{item.idols.join(", ")}</span>
              </p>

              <p className="text-sm text-gray-600 italic leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ✅ Tetap ekspor default untuk komponen utama
export default KpopEra;
