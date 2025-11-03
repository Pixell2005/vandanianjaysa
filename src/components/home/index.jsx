const Home = () => {
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

        <input
          type="text"
          placeholder="Cari sesuatu di sini..."
          className="w-4/5 max-w-[400px] px-5 py-3 rounded-full text-black 
                     outline-none transition duration-300 ease-in-out 
                     focus:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        />

        <button
          className="bg-gradient-to-br from-pink-300 to-purple-400 text-white 
                     px-8 py-2 rounded-full text-base cursor-pointer 
                     transition-all duration-300 ease-in-out 
                     hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] 
                     drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          Cari
        </button>
      </div>
    </section>
  );
};

export default Home;
