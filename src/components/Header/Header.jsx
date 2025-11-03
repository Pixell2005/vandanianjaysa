import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-pink-400/30 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 py-4 px-6">
        {/* Gambar / logo */}
        <motion.img
          src="images/KpopLogo.jpg"
          alt="Kpop Muzic Logo"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg border border-pink-300/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 0 20px rgba(255, 180, 255, 0.8)",
          }}
        />

        {/* Nama Website */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-400 to-pink-300 animate-pulse drop-shadow-[0_0_6px_white]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kpop Muzic
        </motion.h1>
      </div>

      {/* Efek bawah header */}
      <motion.div
        className="h-1 w-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 blur-sm"
        animate={{
          backgroundPosition: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      />
    </header>
  );
};

export default Header;
