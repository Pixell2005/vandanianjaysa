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

export default LogoNewJeans;