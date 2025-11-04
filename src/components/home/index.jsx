import React, { useState } from "react";
import { kpopEras } from "../Header/KpopEra";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(kpopEras);

  // Fungsi pencarian
  const handleSearch = () => {
    const results = kpopEras.filter((era) =>
      era.gen.toLowerCase().includes(searchTerm.toLowerCase()) ||
      era.idols.some((idol) =>
        idol.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      era.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <section
      className="bg-gradient-to-br from-pink-200 to-purple-300 text-white text-center py-20 px-6 
                 rounded-t-[30px] shadow-[0_5px_20px_rgba(255,255,255,0.3)] font-poppins 
                 w-full m-0 transition-all duration-300 ease-in-out hover:scale-[1.005] 
                 hover:shadow-[0_6px_25px_rgba(255,255,255,0.5)]"
    >
      <div
        className="flex flex-col items-center gap-5 bg-white/15 p-10 rounded-[25px] 
                   shadow-[0_0_15px_rgba(255,255,255,0.4)] w-4/5 max-w-[700px] mx-auto"
      >
        <h1 className="text-[2.2rem] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          Search
        </h1>

        {/* Input Search */}
        <input
          type="text"
          placeholder="Cari sesuatu di sini..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-4/5 max-w-[400px] px-5 py-3 rounded-full text-black 
                     outline-none transition duration-300 ease-in-out 
                     focus:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        />

        {/* Tombol Cari */}
        <button
          onClick={handleSearch}
          className="bg-gradient-to-br from-pink-300 to-purple-400 text-white 
                     px-8 py-2 rounded-full text-base cursor-pointer 
                     transition-all duration-300 ease-in-out 
                     hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] 
                     drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          Cari
        </button>
      </div>

      {/* Hasil Pencarian */}
      <div className="mt-12 w-11/12 max-w-[1000px] mx-auto">
        <h2 className="text-[1.8rem] font-semibold text-purple-800 mb-6">
          Hasil Pencarian
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((era, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl 
                           overflow-hidden border border-white/30 w-[250px] 
                           hover:scale-105 transition-transform"
              >
                <img
                  src={era.img}
                  alt={era.gen}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-purple-700">{era.gen}</h3>
                  <p className="text-sm text-gray-800">
                    <strong>Famous Idols:</strong> {era.idols.join(", ")}
                  </p>
                  <p className="text-xs italic text-gray-600 mt-2">
                    {era.desc}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-lg">Tidak ditemukan hasil yang cocok.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
