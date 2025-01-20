import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Track from "./Components/Track/Track";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Track />
      </main>
      <Footer />
    </>
  );
}

export default App;
