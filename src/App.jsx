import Home from "./components/Home";
import "./App.css";
import sLogo from "../public/images/vector-pref.png";

const App = () => {
  return (
    <>
      <main>
        {/* HUB */}

        <header>
          <img id="sLogo" src={sLogo} alt="Logo Description" />

          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
        </header>

        <section>
          {/* MENU BLOCKS */}
          <Home />
        </section>
      </main>
    </>
  );
};

export default App;
