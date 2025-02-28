import Data from "./Data";
import Scroll from "./Scroll";
import Social from "./Social";
import "./home.css";
export default function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
          <Scroll />
        </div>
      </section>
    </>
  );
}
