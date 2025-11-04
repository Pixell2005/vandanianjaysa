import React from "react";

const Evolution = () => {
  const genreEvolution = [
    {
      era: "1990–2000: Pop & Dance Awal",
      description:
        "K-Pop lahir dengan pengaruh musik pop Barat dan dance beat sederhana. Grup seperti H.O.T dan S.E.S membawa melodi ceria dan koreografi energik yang menjadi ciri khas awal K-Pop.",
      color: "from-pink-100 to-pink-50",
    },
    {
      era: "2000–2010: R&B dan Hip-Hop Masuk",
      description:
        "Musik K-Pop mulai terinspirasi dari R&B dan hip-hop Amerika. Artis seperti Rain, BoA, BIGBANG, dan 2NE1 membawa gaya urban dan rap yang memperkaya warna musik K-Pop.",
      color: "from-fuchsia-100 to-pink-50",
    },
    {
      era: "2010–2015: EDM & Electro-Pop",
      description:
        "Era global K-Pop dimulai! Musik penuh energi dengan EDM, synth, dan electro-pop. Lagu dari EXO, SHINee, dan Girls’ Generation menonjol dengan beat elektronik dan chorus yang kuat.",
      color: "from-purple-100 to-pink-50",
    },
    {
      era: "2016–2020: Trap, Tropical & Experimental",
      description:
        "K-Pop semakin berani bereksperimen. BTS, BLACKPINK, dan Red Velvet menggabungkan trap, tropical house, dan R&B modern — menciptakan suara khas yang disukai global.",
      color: "from-violet-100 to-purple-50",
    },
    {
      era: "2021–Sekarang: Retro, Indie & AI-Pop",
      description:
        "Era baru menghadirkan gaya retro 80-an, Y2K, hingga nuansa indie. Grup seperti NewJeans, IVE, dan aespa mengeksplor konsep nostalgia dan teknologi digital, termasuk AI voice & virtual idol.",
      color: "from-indigo-100 to-violet-50",
    },
  ];

  return (
    <div className="evolution-container p-8 rounded-3xl shadow-lg bg-gradient-to-b from-pink-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
        🎶 Evolution of K-Pop Genre 🎶
      </h2>

      <p className="text-center text-gray-600 mb-10">
        Dari pop dan dance klasik hingga trap, R&B, dan AI-pop — inilah perjalanan musik K-Pop yang terus berevolusi ✨
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {genreEvolution.map((stage, index) => (
          <div
            key={index}
            className={`rounded-2xl bg-gradient-to-b ${stage.color} shadow-md p-6 border border-pink-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              {stage.era}
            </h3>
            <p className="text-gray-700 leading-relaxed">{stage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evolution;
