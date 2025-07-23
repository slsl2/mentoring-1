import "../styles/Home.css";
import linerImg from "../assets/images/liner.png";
import SearchBar from "../componetns/SearchBar";

function Home() {
  return (
    <>
      <div className="home-container">
        <img className="liner-img" src={linerImg} />
        <SearchBar />
      </div>
    </>
  );
}

export default Home;
