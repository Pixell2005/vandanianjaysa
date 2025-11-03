import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="search-container">
        <h1>Search</h1>
        <input type="text" placeholder="Cari sesuatu di sini..." />
        <button>Cari</button>
      </div>
    </section>
  );
};

export default Home;
